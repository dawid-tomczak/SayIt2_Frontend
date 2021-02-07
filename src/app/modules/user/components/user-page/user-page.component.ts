import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChallengeService } from 'src/app/shared/services/challenge.service';
import { User } from 'src/app/shared/models/user';
import { UserProgress } from 'src/app/shared/models/user-progress';
import { UserService } from 'src/app/shared/services/user.service';
import { Challenge } from 'src/app/shared/models/challenge';

@Component({
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

  user: User;
  progress: UserProgress;
  challenges: Challenge[] = [];

  subscriptions: Subscription[] = [];

  constructor(private userService: UserService, private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.downloadUserProgress();
    this.downloadChallenges();
  }

  private getUserInfo() {
    this.user = this.userService.getCurrentUser();
  }

  private downloadUserProgress() {
    this.subscriptions.push(
      this.userService.getProgress().subscribe(res => {
        this.progress = res;
      })
    );
  }

  private downloadChallenges() {
    this.challengeService.getMyChallenges().subscribe(res => {
      this.challenges = res;
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}

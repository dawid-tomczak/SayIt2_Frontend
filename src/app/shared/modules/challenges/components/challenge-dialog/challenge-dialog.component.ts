import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Challenge } from 'src/app/shared/models/challenge';
import { ChallengeService } from 'src/app/shared/services/challenge.service';

@Component({
  templateUrl: './challenge-dialog.component.html',
  styleUrls: ['./challenge-dialog.component.scss']
})
export class ChallengeDialogComponent implements OnInit, OnDestroy {

  challengesSubscription: Subscription;
  challenges: Challenge[];
  loading = false;

  constructor(private challengesService: ChallengeService) { }

  ngOnInit(): void {
    this.downloadChallenges();
  }

  private downloadChallenges() {
    this.loading = true;

    this.challengesSubscription = this.challengesService.getMyChallenges().subscribe(res => {
      this.challenges = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  ngOnDestroy() {
    if (this.challengesSubscription) {
      this.challengesSubscription.unsubscribe();
    }
  }
}

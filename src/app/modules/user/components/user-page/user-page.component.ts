import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UserProgress } from 'src/app/shared/models/user-progress';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {

  user: User;
  progress: UserProgress;

  subscriptions: Subscription[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.downloadUserProgress();
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

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }
}

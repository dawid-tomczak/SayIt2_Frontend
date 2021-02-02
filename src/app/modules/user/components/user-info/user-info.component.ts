import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserProgress } from 'src/app/shared/models/user-progress';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() user: User;
  @Input() progress: UserProgress;

  constructor() { }

  ngOnInit(): void {
  }

  deleteAvatar() {
    console.warn('Not Implemented');
  }

  updateAvatar() {
    console.warn('Not Implemented');
  }
}

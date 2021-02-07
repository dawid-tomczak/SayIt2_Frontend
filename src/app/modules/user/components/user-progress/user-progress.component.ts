import { Component, Input, OnInit } from '@angular/core';
import { UserProgress } from 'src/app/shared/models/user-progress';

@Component({
  selector: 'app-user-progress',
  templateUrl: './user-progress.component.html',
  styleUrls: ['./user-progress.component.scss']
})
export class UserProgressComponent implements OnInit {

  @Input() progress: UserProgress;

  constructor() { }

  ngOnInit(): void {
  }

}

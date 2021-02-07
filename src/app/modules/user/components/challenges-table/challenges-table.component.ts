import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'src/app/shared/models/challenge';

@Component({
  selector: 'app-challenges-table',
  templateUrl: './challenges-table.component.html',
  styles: [
    `
    table{
      width:100%;
    }

    .users__vs{
      opacity: 0.75;
      font-weight: 500;
    }
    `
  ]
})
export class ChallengesTableComponent implements OnInit {

  @Input() challenges: Challenge[];

  displayedColumns = ['users', 'result', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

}

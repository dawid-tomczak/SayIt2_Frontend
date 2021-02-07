import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'src/app/shared/models/challenge';

@Component({
  selector: 'app-challenges-table',
  templateUrl: './challenges-table.component.html',
  // needed to use padding in users column because margin does not work on this angular material element
  styles: [
    `
    .wrapper{
      padding: 0px 40px;
    }

    .mat-column-users{
      padding-right: 50px;
    }

    .users__vs{
      opacity: 0.75;
      font-weight: 500;
    }
    `
  ],
})

export class ChallengesTableComponent implements OnInit {

  @Input() challenges: Challenge[];

  displayedColumns = ['users', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

}

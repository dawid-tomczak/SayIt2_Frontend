import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'src/app/shared/models/challenge';

@Component({
  selector: 'app-challenges-table',
  templateUrl: './challenges-table.component.html',
  styleUrls: ['./challenges-table.component.scss'],
})

export class ChallengesTableComponent implements OnInit {

  @Input() challenges: Challenge[];

  displayedColumns = ['users', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

}

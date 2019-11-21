import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-card',
  templateUrl: './fiche-card.component.html',
  styleUrls: ['./fiche-card.component.scss']
})
export class FicheCardComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  meaningShown: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  _meaningToggle() {
    const meaningDiv = document.getElementById('container__meaning-div');

    meaningDiv.classList.add('meaningShown');
    console.log(meaningDiv.classList);
  }
}

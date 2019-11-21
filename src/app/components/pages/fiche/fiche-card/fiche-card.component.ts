import { Component, OnInit, Input, Output } from '@angular/core';
import { Translation } from 'src/app/models';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fiche-card',
  templateUrl: './fiche-card.component.html',
  styleUrls: ['./fiche-card.component.scss']
})
export class FicheCardComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  meaningShown: boolean = false;

  @Input() translation: Translation;
  @Input() ficheIndex: number;

  @Output() ficheChangeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  changeFiche(direction: 'previous' | 'next') {
    this.ficheChangeEmitter.emit(direction);
  }

  _meaningToggle() {
    const meaningDiv = document.getElementById('container__meaning-div');

    meaningDiv.classList.add('meaningShown');
    console.log(meaningDiv.classList);
  }
}

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
  @Input() maxIndex: number;

  @Output() ficheChangeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  changeFiche(direction: 'previous' | 'next') {
    this.ficheChangeEmitter.emit(direction);
  }

  _meaningToggle() {
    const meaningDiv = document.getElementById('container__mainContent__meaning-div');

    if (!this.meaningShown) {
      meaningDiv.style.setProperty('height', 'auto');
      meaningDiv.style.setProperty('padding', '20px 0px 20px 0px');
    } else {
      meaningDiv.style.setProperty('height', '0px');
      meaningDiv.style.setProperty('padding', '0px');
    }

    this.meaningShown = !this.meaningShown;
  }
}

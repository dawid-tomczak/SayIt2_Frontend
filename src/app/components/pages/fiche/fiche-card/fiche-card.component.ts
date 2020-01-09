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
  mobileDevice = false;

  @Input() translation: Translation;
  @Input() ficheIndex: number;
  @Input() maxIndex: number;

  @Output() ficheChangeEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 414) {
      this.mobileDevice = true;
    }
  }

  changeFiche(direction: 'previous' | 'next') {
    if ((direction === 'previous' && this.ficheIndex !== 0) || (direction === 'next' && this.ficheIndex !== this.maxIndex)) {
      this.ficheChangeEmitter.emit(direction);
    }
  }

  tapHandler() {
    if (this.mobileDevice) {
      this._meaningToggle();
    }
  }

  swipeHandler(direction: 'previous' | 'next') {
    if (this.mobileDevice) {
      this.changeFiche(direction);
    }
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

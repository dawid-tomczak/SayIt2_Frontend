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
      this._animationHandler(direction, 'out');

      setTimeout(() => {
        this.ficheChangeEmitter.emit(direction);
        this._animationHandler(direction, 'in');
      }
        , 250);

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

  private _animationHandler(direction: 'previous' | 'next', fade: 'in' | 'out') {
    const cardRef = document.getElementById('card');
    let animationName: string;

    if (direction === 'previous' && fade === 'out') {
      animationName = 'swipeOutRight';
    } else if (direction === 'previous' && fade === 'in') {
      animationName = 'swipeInLeft';
    } else if (direction === 'next' && fade === 'out') {
      animationName = 'swipeOutLeft';
    } else if (direction === 'next' && fade === 'in') {
      animationName = 'swipeInRight';
    }

    cardRef.style.animationDuration = '0.25s';
    cardRef.style.animationFillMode = 'forward';
    cardRef.style.animationName = animationName;
  }

  _meaningToggle() {
    const meaningDiv = document.getElementById('card__mainContent__meaning-div');

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

import { Component, OnInit, Input } from '@angular/core';
import { Translation } from 'src/app/models';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {

  @Input() quizTranslation: Translation;

  optionsArray: string[] = [];
  answerSelected = false;

  constructor() { }

  ngOnInit() {
    this.optionsArray = this._buildOptionsArray(this.quizTranslation);
  }

  private _buildOptionsArray(translation: Translation): string[] {
    const quizQuestion = translation.quizQuestion[0];

    return this._shuffleArray([translation.translationEN, quizQuestion.option1, quizQuestion.option2, quizQuestion.option3]);
  }

  private _shuffleArray(array: any[]) {
    const arrayCoppy = array;
    for (let i = arrayCoppy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCoppy[i], arrayCoppy[j]] = [arrayCoppy[j], arrayCoppy[i]];
    }

    return arrayCoppy;
  }

  private _optionSelect(option: string) {
    this.answerSelected = true;

    if (option === this.quizTranslation.translationEN) {
      this._assignRightOptionStyles(true);
    } else {
      this._assignRightOptionStyles();
      this._assignWrongOptionStyles(option);
    }
  }

  private _assignRightOptionStyles(answeredRight: boolean = false) {
    const rightOptionButton = document.getElementsByClassName('container__options__button')
      .item(this.optionsArray.indexOf(this.quizTranslation.translationEN));

    rightOptionButton.classList.add('animated', answeredRight ? 'tada' : null, 'container__options__button--right');
  }

  private _assignWrongOptionStyles(selectedOption: string) {
    const wrongOptionButton = document.getElementsByClassName('container__options__button')
      .item(this.optionsArray.indexOf(selectedOption));

    wrongOptionButton.classList.add('animated', 'shake', 'container__options__button--wrong');
  }
}

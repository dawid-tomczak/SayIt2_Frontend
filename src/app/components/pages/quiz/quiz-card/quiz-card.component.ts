import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Translation } from 'src/app/models';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() quizTranslation: Translation;
  @Input() quizEnd: boolean;
  @Input() correctAnswers: number;
  @Input() translationsAmount: number;
  // emmit TRUE when the answer is correct and FALSE when it is wrong
  @Output() answerEmitter = new EventEmitter();

  optionsArray: string[] = [];
  answerSelected = false;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.quizTranslation != null) {
      this.optionsArray = this._buildOptionsArray(this.quizTranslation);
      this.answerSelected = false;
    }

    if (changes.quizEnd != null && changes.quizEnd.currentValue) {
      this._quizEnded();
    }
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

  optionSelect(option: string) {
    this.answerSelected = true;

    if (option === this.quizTranslation.translationEN) {
      // the answer is right
      this.answerEmitter.emit(true);

      this._assignRightOptionStyles(true);
    } else {
      // the answer is wrong
      this.answerEmitter.emit(false);

      this._assignRightOptionStyles();
      this._assignWrongOptionStyles(option);
    }
  }

  private _quizEnded() {
    this._assignQuizEndStyles();
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

  private _assignQuizEndStyles() {
    const questionContainer = document.getElementById('container__question');
    const optionsContainer = document.getElementById('container__options');

    questionContainer.classList.add('container__question--end');
    optionsContainer.classList.add('container__options--end');
  }
}

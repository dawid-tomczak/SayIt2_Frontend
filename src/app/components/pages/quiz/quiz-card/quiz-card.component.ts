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
}

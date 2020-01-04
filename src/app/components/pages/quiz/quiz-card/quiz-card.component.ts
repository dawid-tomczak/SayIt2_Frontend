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
    console.log(this.quizTranslation);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationsService } from 'src/app/services/translations.service';
import { Translation } from 'src/app/models';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  selectedCategoryId: number;
  quizTranstations: Translation[];
  translationIndex = 0;
  correctAnswersCounter = 0;
  quizEnd = false;

  constructor(private translationsService: TranslationsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.selectedCategoryId = params.categoryId);

    this.translationsService.getQuizTranslations(this.selectedCategoryId).subscribe(res => {
      this.quizTranstations = res;
    }, err => console.log('can not download quiz questions', err));
  }

  answerHandler(correctAnswer) {
    if (correctAnswer) {
      this.correctAnswersCounter += 1;
    }

    // arrow function becouse without it setTimeout in TypeScript is not working with "this."
    setTimeout(() => this._nextQuestion(), 2000);
  }

  private _nextQuestion() {
    if (this.quizTranstations.length - 1 > this.translationIndex) {
      ++this.translationIndex;
    } else {
      this.quizEnd = true;
    }
  }
}

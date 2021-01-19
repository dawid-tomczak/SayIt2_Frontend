import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { questionSeconds } from 'src/app/shared/consts';
import { TranslationService } from 'src/app/shared/services/translation.service';
import { Answer } from '../../models/answer';
import { QuizQuestionComplex } from '../../models/quiz-question-complex';
import { QuizResult } from '../../models/quiz-result';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionCardComponent implements OnInit, OnChanges {

  @Input() quizQuestion: QuizQuestionComplex;
  @Input() answers$: Observable<boolean | null[]>;
  @Input() quizResult: QuizResult;

  answeredCorrect: boolean;
  selectedAnswerId: number;
  correctAnswerId: number;
  afterAnswer: boolean;
  answeredSubscription: Subscription

  // ref to config variable for using inside of HTML
  fullTime = questionSeconds;


  constructor(public translationService: TranslationService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.reset();
    this.listenToTimeOut();
  }

  checkAnswer(userAnswer?: Answer) {
    if (userAnswer) {
      this.selectedAnswerId = userAnswer.id;
    }
    this.correctAnswerId = this.quizQuestion.correctAnswer.id;
    this.afterAnswer = true;

    this.answeredCorrect = this.quizQuestion.checkAnswer(userAnswer);
  }

  private listenToTimeOut() {
    this.answeredSubscription = this.quizQuestion.answered$.subscribe(res => {
      if (res === false && this.afterAnswer === false) {
        this.correctAnswerId = this.quizQuestion.correctAnswer.id;
        this.afterAnswer = true;
      }
    })
  }

  private reset() {
    if (this.answeredSubscription) {
      this.answeredSubscription.unsubscribe();
    }

    this.selectedAnswerId = null;
    this.correctAnswerId = null;
    this.afterAnswer = false;
  }
}

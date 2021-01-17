import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { questionSeconds } from 'src/app/shared/consts';
import { TranslationService } from 'src/app/shared/services/translation.service';
import { Answer } from '../../models/answer';
import { QuizQuestionComplex } from '../../models/quiz-question-complex';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionCardComponent implements OnInit, OnDestroy {

  @Input() $quizQuestion: Observable<QuizQuestionComplex>;
  @Input() $answers: Observable<boolean | null[]>;
  @Output() answered = new EventEmitter<boolean>();

  answeredCorrect: boolean;
  selectedAnswerId: number;
  correctAnswerId: number;
  afterAnswer: boolean;
  actualQuestion: QuizQuestionComplex;
  questionSubscription: Subscription;

  // ref to config variable for using inside of HTML
  fullTime = questionSeconds;
  timeLeftObservable$: Observable<number>;


  constructor(public translationService: TranslationService) {
  }

  ngOnInit(): void {
    this.subscribeToQuestions();
  }

  checkAnswer(userAnswer: Answer) {
    this.selectedAnswerId = userAnswer.id;
    this.correctAnswerId = this.actualQuestion.correctAnswer.id;
    this.afterAnswer = true;

    this.answeredCorrect = this.actualQuestion.checkAnswer(userAnswer);
  }

  subscribeToQuestions() {
    if (!this.questionSubscription) {
      this.$quizQuestion.subscribe(question => {
        this.reset();
        this.actualQuestion = question;
        this.timeLeftObservable$ = this.actualQuestion.getTimeLeftObservable();
      });
    }
  }

  private reset() {
    this.timeLeftObservable$ = null;
    this.selectedAnswerId = null;
    this.correctAnswerId = null;
    this.afterAnswer = false;
  }

  ngOnDestroy() {
    if (this.questionSubscription) {
      this.questionSubscription.unsubscribe();
    }
  }
}

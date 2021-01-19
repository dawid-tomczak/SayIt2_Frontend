import { Inject } from '@angular/core';
import { MersenneTwister19937, shuffle } from 'random-js';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { questionSeconds } from 'src/app/shared/consts';
import { TranslationService } from 'src/app/shared/services/translation.service';
import { Answer } from './answer';
import { QuizQuestion } from './quiz-question';
import { Injector } from '@angular/core';

// need to use reflective injector, because when it was in constructor you needed to pass it on "new QuizQuestionComplex()"
const injector = Injector.create({
  providers: [
    { provide: TranslationService, deps: [] },
  ]
});

export class QuizQuestionComplex {
  question: string;
  answers: Answer[];
  correctAnswer: Answer;

  private _timeLeft$: BehaviorSubject<number>;
  public get timeLeft$(): Observable<number> {
    return this._timeLeft$.asObservable();
  }
  // using Subject, because we are not creating it with a default value
  // after correct answer we will send true, and otherwise false
  private _answered$: Subject<boolean> = new Subject<boolean>();
  public get answered$(): Observable<boolean> {
    return this._answered$.asObservable();
  }

  private countdownInterval: NodeJS.Timer;

  // need to inject service outside of constructor, because we are creating class instance with "new QuizQuestionComplex"
  private translationService = injector.get(TranslationService);

  constructor(quizQuestion: QuizQuestion) {
    this.assignFieldsFromQuestion(quizQuestion);
    this._timeLeft$ = new BehaviorSubject<number>(questionSeconds);
  }

  checkAnswer(answer: Answer): boolean {
    // correct has bool value saying if the answer was correct;
    const correct = (answer.id === this.correctAnswer.id);

    this.stopTimer();

    this._answered$.next(correct);
    return correct;
  }

  startTimer(): Observable<number> {
    this.countdownInterval = setInterval(() => {
      const newTimeLeft = this._timeLeft$.value - 1;

      if (newTimeLeft >= 0) {
        this._timeLeft$.next(newTimeLeft);
      } else {
        this.stopTimer();
        // sending false, because time is over
        this._answered$.next(false);
      }

      console.log('pozostało sekund', newTimeLeft);
    }, 1000);

    return this._timeLeft$.asObservable();
  }

  stopTimer() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private assignFieldsFromQuestion(quizQuestion: QuizQuestion) {
    this.question = this.translationService.extractTextFromTranslationInLanguage(quizQuestion.questionTranslation, 'EN');
    this.answers = this.buildQuestionsArray(quizQuestion);
    this.correctAnswer = quizQuestion.correctAnswer;
  }

  private buildQuestionsArray(question: QuizQuestion): Answer[] {
    const response = question.badAnswers;
    response.push(question.correctAnswer);

    return this.randomizeArray(response);
  }

  private randomizeArray(inputArray: any[]): any[] {
    const randomEngine = MersenneTwister19937.autoSeed();
    return shuffle(randomEngine, inputArray);
  }
}

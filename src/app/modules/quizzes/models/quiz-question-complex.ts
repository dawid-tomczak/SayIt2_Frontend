import { Inject } from '@angular/core';
import { MersenneTwister19937, shuffle } from 'random-js';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { questionSeconds } from 'src/app/shared/consts';
import { TranslationService } from 'src/app/shared/services/translation.service';
import { Answer } from './answer';
import { QuizQuestion } from './quiz-question';
import { Injector } from "@angular/core";

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

  private $timeLeft: BehaviorSubject<number>;
  // using Subject, because we are not creating it with a default value
  // after correct answer we will send true, and otherwise false
  private $answered: Subject<boolean> = new Subject<boolean>();
  private countdownInterval: NodeJS.Timer;

  private translationService = injector.get(TranslationService);

  constructor(quizQuestion: QuizQuestion) {
    this.assignFieldsFromQuestion(quizQuestion);
    this.$timeLeft = new BehaviorSubject<number>(questionSeconds);
  }

  checkAnswer(answer: Answer): boolean {
    // correct has bool value saying if the answer was correct;
    const correct = (answer.id === this.correctAnswer.id);

    this.stopTimer();

    this.$answered.next(correct);
    return correct;
  }

  getTimeLeftObservable(): Observable<number> {
    return this.$timeLeft.asObservable();
  }

  getAnsweredObservable(): Observable<boolean> {
    return this.$answered.asObservable();
  }

  startTimer(): Observable<number> {
    this.countdownInterval = setInterval(() => {
      const newTimeLeft = this.$timeLeft.value - 1;

      if (newTimeLeft >= 0) {
        this.$timeLeft.next(newTimeLeft);
      } else {
        this.stopTimer();
        // sending false, because time is over
        this.$answered.next(false);
      }

      console.log('pozostało sekund', newTimeLeft);
    }, 1000);

    return this.getTimeLeftObservable();
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

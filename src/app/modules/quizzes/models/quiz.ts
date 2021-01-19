import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { QuizQuestionComplex } from './quiz-question-complex';
import { QuizResult } from './quiz-result';

export class Quiz {
  private actualIndex = 0;
  private _answers$: BehaviorSubject<(boolean | null)[]> = new BehaviorSubject<(boolean | null)[]>([]);
  public get answers$(): Observable<(boolean | null)[]> {
    return this._answers$.asObservable();
  }

  private _actualQuestion$: BehaviorSubject<QuizQuestionComplex>;
  public get actualQuestion$(): Observable<QuizQuestionComplex> {
    return this._actualQuestion$.asObservable();
  }

  private _quizFinished$: Subject<boolean> = new Subject<boolean>();
  public get quizFinished$(): Observable<boolean> {
    return this._quizFinished$.asObservable();
  }

  private subscriptions: Subscription[] = [];

  constructor(public questions: QuizQuestionComplex[]) {
    this._answers$.next(this.generateAnswersArray(questions.length));
    this.assignActualQuestion(this.actualIndex);
  }

  getResult(): QuizResult {
    return new QuizResult(this._answers$.value);
  }


  unsubscribe() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  closeSubscriptions() {
    this.questions.forEach(question => {
      question.stopTimer();
    });

    this.unsubscribe();
  }

  private assignActualQuestion(index: number) {
    const questionRef = this.questions[index];

    // if BehaviorSubject is already created
    if (this._actualQuestion$) {
      this._actualQuestion$.next(questionRef);
    } else {
      // init of Behavior Subject
      this._actualQuestion$ = new BehaviorSubject<QuizQuestionComplex>(questionRef);
    }

    questionRef.startTimer();

    this.subscriptions.push(
      // subscribing to answers
      questionRef.answered$.subscribe((correct) => {
        const updatedAnswers = this._answers$.getValue();
        updatedAnswers[this.actualIndex] = correct;
        this._answers$.next(updatedAnswers);

        setTimeout(() => {
          if (this.actualIndex < this.questions.length - 1) {
            this.nextQuestion();
          } else {
            this._quizFinished$.next(true);
          }
          console.log('weszło w timeout');
        }, 3000);
      })
    );
  }

  private nextQuestion() {
    this.actualIndex += 1;

    this.unsubscribe();
    this.assignActualQuestion(this.actualIndex);
  }

  private generateAnswersArray(length: number): (boolean | null)[] {
    return new Array(length).fill(null);
  }
}

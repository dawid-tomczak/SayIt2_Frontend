import { BehaviorSubject, Observable, Subject, Subscription } from "rxjs";
import { QuizQuestionComplex } from "./quiz-question-complex";

export class Quiz {
  private actualIndex = 0;
  private $answers: BehaviorSubject<(boolean | null)[]> = new BehaviorSubject<(boolean | null)[]>([]);
  private $actualQuestion: BehaviorSubject<QuizQuestionComplex>;
  private $quizFinished: Subject<boolean> = new Subject<boolean>();

  private subscriptions: Subscription[] = [];

  constructor(public questions: QuizQuestionComplex[]) {
    this.$answers.next(this.generateAnswersArray(questions.length));
    this.assignActualQuestion(this.actualIndex);
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

  getActualQuestionObservable(): Observable<QuizQuestionComplex> {
    return this.$actualQuestion.asObservable();
  }

  getAnswersObservable(): Observable<(boolean | null)[]> {
    return this.$answers.asObservable();
  }

  private assignActualQuestion(index: number) {
    const questionRef = this.questions[index];

    // if BehaviorSubject is already created
    if (this.$actualQuestion) {
      this.$actualQuestion.next(questionRef);
    } else {
      // init of Behavior Subject
      this.$actualQuestion = new BehaviorSubject<QuizQuestionComplex>(questionRef);
    }

    questionRef.startTimer();

    this.subscriptions.push(
      // subscribing to answers
      questionRef.getAnsweredObservable().subscribe((correct) => {
        const updatedAnswers = this.$answers.getValue();
        updatedAnswers[this.actualIndex] = correct;
        this.$answers.next(updatedAnswers);

        setTimeout(() => {
          if (this.actualIndex < this.questions.length - 1) {
            this.nextQuestion();
          } else {
            this.$quizFinished.next(true);
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

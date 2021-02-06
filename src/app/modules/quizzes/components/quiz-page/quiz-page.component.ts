import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Quiz } from '../../models/quiz';
import { QuizQuestionComplex } from '../../models/quiz-question-complex';
import { QuizResponse } from '../../models/quiz-response';
import { QuizResult } from '../../models/quiz-result';
import { ChallengeService } from '../../services/challenge.service';
import { QuizService } from '../../services/quiz.service';

@Component({
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit, OnDestroy {

  quiz: Quiz;
  quizResult: QuizResult;
  answersObservable$: Observable<(boolean | null)[]>;
  subscriptions: Subscription[] = [];
  questionSubscription: Subscription;

  selectedQuestion: QuizQuestionComplex;

  constructor(private quizService: QuizService, private challengeService: ChallengeService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.extractDataFromUrl();
  }

  private extractDataFromUrl() {
    this.route.queryParams.subscribe(params => {
      if (params.category) {
        this.subscriptions.push(
          this.downloadQuiz(params.category, params.challenge)
        );
      } else {
        console.error('brak kategorii w URL');
        this.router.navigate(['categories']);
      }
    });
  }

  private downloadQuiz(categoryId: number, challengeMode: boolean = false): Subscription {
    const getFunctionRef =
      challengeMode ? this.challengeService.getNewChallenge(categoryId) : this.quizService.getQuizForCategory(categoryId);

    return getFunctionRef.subscribe(res => {
      this.quiz = new Quiz(res.id, res.questions);
      this.answersObservable$ = this.quiz.answers$;

      this.subscriptions.push(this.listenToQuestion(), this.listenToFinish());
    });
  }

  private listenToFinish(): Subscription {
    return this.quiz.quizFinished$.subscribe(finish => {
      if (finish) {
        this.quizResult = this.quiz.getResult();
        this.sendResult(this.quizResult.won);
      }
    });
  }

  private listenToQuestion(): Subscription {
    return this.quiz.actualQuestion$.subscribe(question => {
      this.selectedQuestion = question;
    });
  }

  private sendResult(won: boolean) {
    this.subscriptions.push(
      this.quizService.postQuizResult(this.quiz.id, won).subscribe()
    );
  }


  ngOnDestroy() {
    this.quiz.closeSubscriptions();

    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}

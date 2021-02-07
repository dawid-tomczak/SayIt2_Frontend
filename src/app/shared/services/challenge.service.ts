import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MOCK_MY_CHALLENGES, MY_CHALLENGES, START_CHALLENGE } from 'src/app/shared/consts';
import { Challenge } from 'src/app/shared/models/challenge';
import { QuizQuestion } from '../../modules/quizzes/models/quiz-question';
import { QuizQuestionComplex } from '../../modules/quizzes/models/quiz-question-complex';
import { QuizResponse } from '../../modules/quizzes/models/quiz-response';
import { ChallengeMOCK } from '../models/challenge-mock';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http: HttpClient) { }

  getNewChallenge(categoryId: number): Observable<QuizResponse> {
    const url = START_CHALLENGE;

    return this.http.get<{ id: number, questions: QuizQuestion[] }>(url).pipe(
      map(val => {
        const response: QuizResponse = {
          id: val.id,
          questions: val.questions.map(question => new QuizQuestionComplex(question))
        };

        return response;
      })
    );
  }

  getMyChallenges(): Observable<Challenge[]> {
    const url = MY_CHALLENGES;

    return this.http.get<Challenge[]>(url);
  }

  getMyChallengesMOCK(): Observable<ChallengeMOCK[]> {
    const url = MOCK_MY_CHALLENGES;

    return this.http.get<ChallengeMOCK[]>(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { START_CHALLENGE } from 'src/app/shared/consts';
import { QuizQuestion } from '../models/quiz-question';
import { QuizQuestionComplex } from '../models/quiz-question-complex';
import { QuizResponse } from '../models/quiz-response';

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
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { QUIZ_CONTROLLER, QUIZ_LOOSED, QUIZ_WON } from 'src/app/shared/consts';
import { QuizQuestion } from '../models/quiz-question';
import { QuizQuestionComplex } from '../models/quiz-question-complex';
import { QuizResponse } from '../models/quiz-response';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuizForCategory(categoryId: number): Observable<QuizResponse> {
    const url = QUIZ_CONTROLLER + `/${categoryId.toString()}`;


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

  postQuizResult(id: number, won: boolean): Observable<null> {
    const url = won ? QUIZ_WON : QUIZ_LOOSED;

    return this.http.post<null>(url, id);
  }
}

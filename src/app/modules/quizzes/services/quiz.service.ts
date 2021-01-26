import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { QUIZ_CONTROLLER, QUIZ_LOOSED, QUIZ_WON } from 'src/app/shared/consts';
import { QuizQuestion } from '../models/quiz-question';
import { QuizQuestionComplex } from '../models/quiz-question-complex';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuizForCategory(categoryId: number): Observable<QuizQuestionComplex[]> {
    const url = QUIZ_CONTROLLER + `/${categoryId.toString()}`;


    return this.http.get(url).pipe(
      // extracting only questions property from response
      pluck('questions'),
      map(res => (res as QuizQuestion[]).map(question => new QuizQuestionComplex(question)))
    );
  }

  postQuizResult(id: number, won: boolean): Observable<null> {
    const url = won ? QUIZ_WON : QUIZ_LOOSED;

    return this.http.patch<null>(url, id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { QUIZ_CONTROLLER } from 'src/app/shared/consts';
import { QuizQuestion } from '../models/quiz-question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuizForCategory(categoryId: number): Observable<QuizQuestion[]> {
    const url = QUIZ_CONTROLLER + `/${categoryId.toString()}`;

    return this.http.get(url).pipe(
      // extracting only questions property from response
      pluck('questions')
    );
  }
}

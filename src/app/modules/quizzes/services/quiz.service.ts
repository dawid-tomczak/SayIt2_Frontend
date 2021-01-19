import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';
import { QUIZ_CONTROLLER } from 'src/app/shared/consts';
import { Answer } from '../models/answer';
import { QuizQuestion } from '../models/quiz-question';
import { MersenneTwister19937, shuffle } from 'random-js';
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
}

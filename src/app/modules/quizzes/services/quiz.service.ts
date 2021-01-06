import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { QUIZ_CONTROLLER } from 'src/app/shared/consts';
import { Answer } from '../models/answer';
import { QuizQuestion } from '../models/quiz-question';
import { MersenneTwister19937, shuffle } from 'random-js';

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

  buildQuestionsArray(question: QuizQuestion): Answer[] {
    const response = question.badAnswers;
    response.push(question.correctAnswer);

    return this.randomizeArray(response);
  }

  private randomizeArray(inputArray: any[]): any[] {
    const randomEngine = MersenneTwister19937.autoSeed();
    return shuffle(randomEngine, inputArray);
  }
}

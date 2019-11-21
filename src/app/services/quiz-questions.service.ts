import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import { QuizQuestion } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizQuestionsService {

  private url: string = environment.backendURL + 'QuizQuestions';

  constructor(private http: HttpClient) { }

  public getQuizQuestions(): Observable<QuizQuestion> {
    return this.http.get(this.url).pipe(
      pluck('value')
    );
  }

  public postQuizQuestion(questionToAdd: QuizQuestion): Observable<any> {
    return this.http.post(this.url, questionToAdd);
  }

  public patchQuizQuestion(id: number, changes: any) {
    return this.http.patch(this.url + `(${id})`, changes);
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Category } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url: string = environment.backendURL + 'Categories';

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get(this.url).pipe(
      pluck('value')
    );
  }

  public getCategoriesWithTranslations(): Observable<any> {
    return this.http.get(this.url + `?$expand=translations`).pipe(
      pluck('value')
    );
  }

  public getOneCategoryWithTranslations(categoryId): Observable<any> {
    return this.http.get(this.url + `(${categoryId})?$expand=translations`);
  }

  public getOneCategoryWithQuizQuestions(categoryId): Observable<any> {
    return this.http.get(this.url + `(${categoryId})?$expand=translations($expand=quizQuestion)`);
  }
}

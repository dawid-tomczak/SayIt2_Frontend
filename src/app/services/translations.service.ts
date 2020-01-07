import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Translation } from '../models';
import { pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  private url: string = environment.backendURL + 'Translations';

  constructor(private http: HttpClient) { }

  public getTranslations(): Observable<Translation[]> {
    return this.http.get(this.url).pipe(
      pluck('value')
    );
  }

  public getTranslationsForCategory(categoryId: number): Observable<Translation[]> {
    return this.http.get(this.url + `?$filter=categoryId eq ${categoryId}`).pipe(
      pluck('value')
    );
  }

  public getQuizTranslations(categoryId: number): Observable<any> {
    return this.http.get(this.url + `?$filter=categoryId eq ${categoryId} &$expand=quizQuestion`).pipe(
      pluck('value')
    );
  }

  public postTranslation(newTranslation: Translation): Observable<any> {
    return this.http.post(this.url, newTranslation);
  }

  public patchTranslation(id: number, changes: any): Observable<any> {
    return this.http.patch(`${this.url}(${id})`, changes);
  }
}

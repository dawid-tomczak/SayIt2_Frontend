import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models';
import { CATEGORIES_CONTROLLER } from 'src/app/shared/consts';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    const url = CATEGORIES_CONTROLLER;

    return this.http.get<Category[]>(url);
  }
}

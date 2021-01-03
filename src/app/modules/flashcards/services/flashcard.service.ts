import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALL_FLASHCARDS_ENDPOINT } from 'src/app/shared/consts';
import { Flashcard } from '../models/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor(private http: HttpClient) { }

  getAllFlashcards(): Observable<Flashcard[]> {
    const url = ALL_FLASHCARDS_ENDPOINT;

    return this.http.get<Flashcard[]>(url);
  }
}

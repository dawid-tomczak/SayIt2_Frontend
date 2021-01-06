import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALL_FLASHCARDS_ENDPOINT } from 'src/app/shared/consts';
import { Flashcard } from '../models/flashcard';
import { FlashcardExtendedInfo } from '../models/flashcard-extended-info';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor(private http: HttpClient) { }

  getAllFlashcards(): Observable<any[]> {
    const url = ALL_FLASHCARDS_ENDPOINT;

    return this.http.get<Flashcard[]>(url);
  }

  extractTextFromFlashcardInLanguage(flashcard: Flashcard, prop: 'content' | 'description', langCode: string): string {
    let arrayToSearchIn: FlashcardExtendedInfo[];
    let response: string;

    if (prop === 'description') {
      arrayToSearchIn = flashcard.descriptionWithTranslation;
    } else {
      arrayToSearchIn = flashcard.contentWithTranslation;
    }

    try {
      response = arrayToSearchIn.find(element => element.langCode === langCode).text;
    } catch {
      response = 'Not Found'
    }

    return response ? response : 'Not Found';
  }
}

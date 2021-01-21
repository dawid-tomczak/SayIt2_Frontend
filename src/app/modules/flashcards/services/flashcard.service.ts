import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALL_FLASHCARDS_ENDPOINT, ALL_FLASHCARDS_FROM_CATEGORY } from 'src/app/shared/consts';
import { Translation } from 'src/app/shared/models/translation';
import { TranslationService } from 'src/app/shared/services/translation.service';
import { Flashcard } from '../models/flashcard';
import { FlashcardsDataResponse } from '../models/flashcards-data-response';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor(private http: HttpClient, private translationService: TranslationService) { }

  getAllFlashcards(): Observable<Flashcard[]> {
    const url = ALL_FLASHCARDS_ENDPOINT;

    return this.http.get<Flashcard[]>(url);
  }

  getAllFlashcardsFromCategory(categoryId: number): Observable<FlashcardsDataResponse> {
    const url = ALL_FLASHCARDS_FROM_CATEGORY.replace(/:ID/, categoryId.toString());

    return this.http.get<FlashcardsDataResponse>(url);
  }

  extractTextFromFlashcardInLanguage(flashcard: Flashcard, prop: 'content' | 'description', langCode: string): string {
    let arrayToSearchIn: Translation[];

    if (prop === 'description') {
      arrayToSearchIn = flashcard.descriptionWithTranslation;
    } else {
      arrayToSearchIn = flashcard.contentWithTranslation;
    }
    return this.translationService.extractTextFromTranslationInLanguage(arrayToSearchIn, langCode);
  }
}

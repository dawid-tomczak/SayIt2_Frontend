import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALL_FLASHCARDS_ENDPOINT } from 'src/app/shared/consts';
import { Translation } from 'src/app/shared/models/translation';
import { TranslationService } from 'src/app/shared/services/translation.service';
import { Flashcard } from '../models/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {

  constructor(private http: HttpClient, private translationService: TranslationService) { }

  getAllFlashcards(): Observable<any[]> {
    const url = ALL_FLASHCARDS_ENDPOINT;

    return this.http.get<Flashcard[]>(url);
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

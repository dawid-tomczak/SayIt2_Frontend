import { Injectable } from '@angular/core';
import { Translation } from '../models/translation';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

  extractTextFromTranslationInLanguage(translation: Translation[], langCode: string): string {
    let response: string;

    try {
      response = translation.find(element => element.langCode === langCode).text;
    } catch {
      response = 'Not Found';
    }

    return response ? response : 'Not Found';
  }
}

import { Language } from './language';

export interface FlashcardExtendedInfo {
  text: string;
  langCodeId: number;
  langCode: string;
  languages: Language[];
}

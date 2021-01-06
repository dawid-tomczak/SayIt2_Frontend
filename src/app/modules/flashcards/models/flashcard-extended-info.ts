import { Language } from "../../../shared/models/language";

export interface FlashcardExtendedInfo {
  text: string;
  langCodeId: number;
  langCode: string;
  languages: Language[];
}

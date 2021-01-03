import { FlashcardExtendedInfo } from "./flashcard-extended-info";

export interface Flashcard {
  id: number;
  content: string;
  description: string;
  contentWithTranslation: FlashcardExtendedInfo[];
  descriptionWithTranslation: FlashcardExtendedInfo[];
}
import { Flashcard } from './flashcard';

export interface FlashcardsDataResponse {
  allFlashcardsCount: number;
  flashcards: Flashcard[];
  seenBeforeQty: number;
  selectedQty: number;
}

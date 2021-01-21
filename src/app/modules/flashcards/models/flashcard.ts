import { Translation } from 'src/app/shared/models/translation';

export interface Flashcard {
  id: number;
  content: string;
  description: string;
  contentWithTranslation: Translation[];
  descriptionWithTranslation: Translation[];
  // property added on frontend to check if already marked as seen
  seenInCurrentSession?: boolean;
}

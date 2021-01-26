import { Translation } from 'src/app/shared/models/translation';

export interface Flashcard {
  id: number;
  content: string;
  description: string;
  contentWithTranslation: Translation[];
  descriptionWithTranslation: Translation[];
  seenBefore: boolean;
}

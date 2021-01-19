import { Translation } from "src/app/shared/models/translation";
import { Answer } from "./answer";

export interface QuizQuestion {
  id: number;
  questionTranslation: Translation[];
  correctAnswer: Answer;
  badAnswers: Answer[];
}

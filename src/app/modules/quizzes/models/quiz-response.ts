import { QuizQuestionComplex } from './quiz-question-complex';

export interface QuizResponse {
  id: number;
  questions: QuizQuestionComplex[];
}

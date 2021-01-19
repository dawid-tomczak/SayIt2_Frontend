import { Pipe, PipeTransform } from '@angular/core';
import { QuizResult } from '../models/quiz-result';

@Pipe({
  name: 'quizResultNumeric'
})
export class QuizResultNumericPipe implements PipeTransform {

  transform(result: QuizResult): string {
    return `${result.correctAnswers}/${result.totalAnswers}`;
  }

}

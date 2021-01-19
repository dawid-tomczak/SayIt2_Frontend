import { Pipe, PipeTransform } from '@angular/core';
import { QuizResult } from '../models/quiz-result';

@Pipe({
  name: 'quizResultDesc'
})
export class QuizResultDescPipe implements PipeTransform {

  transform(result: QuizResult): string {
    const ratio = result.correctAnswers / result.totalAnswers;

    if (ratio < 0.5) {
      return 'Słabiutko 😔';
    } else if (ratio >= 0.5 && ratio < 0.75) {
      return 'Całkiem nieźle 👌';
    } else {
      return 'Brawo! 😃';
    }
  }

}

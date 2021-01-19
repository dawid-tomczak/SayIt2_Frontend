export class QuizResult {
  correctAnswers: number;
  totalAnswers: number;

  constructor(answers: boolean[]) {
    this.totalAnswers = answers.length;
    this.correctAnswers = answers.filter(value => value === true).length;
  }
}

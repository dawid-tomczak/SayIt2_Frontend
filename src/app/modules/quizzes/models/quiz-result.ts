export class QuizResult {
  correctAnswers: number;
  totalAnswers: number;
  won: boolean;

  constructor(answers: boolean[]) {
    this.totalAnswers = answers.length;
    this.correctAnswers = answers.filter(value => value === true).length;

    this.won = (this.correctAnswers === this.totalAnswers);
  }
}

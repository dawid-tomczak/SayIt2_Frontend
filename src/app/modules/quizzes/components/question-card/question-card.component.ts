import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Translation } from 'src/app/models';
import { TranslationService } from 'src/app/shared/services/translation.service';
import { Answer } from '../../models/answer';
import { QuizQuestion } from '../../models/quiz-question';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionCardComponent implements OnInit {

  @Input() quizQuestion: QuizQuestion;
  @Output() answered = new EventEmitter<boolean>();

  answers: Answer[] = [];
  afterAnswer = false;

  constructor(public translationService: TranslationService, private quizService: QuizService) { }

  ngOnInit(): void {
    this.answers = this.quizService.buildQuestionsArray(this.quizQuestion);
  }

  checkAnswer(userAnswer: Answer): boolean {
    this.afterAnswer = true;

    if (userAnswer.id === this.quizQuestion.correctAnswer.id) {
      this.answered.emit(true);
      return true;
    } else {
      this.answered.emit(false);
      return false;
    }
  }

}

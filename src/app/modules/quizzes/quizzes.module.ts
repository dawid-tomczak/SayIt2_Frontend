import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';



@NgModule({
  declarations: [QuizPageComponent, QuestionCardComponent],
  imports: [
    CommonModule
  ]
})
export class QuizzesModule { }

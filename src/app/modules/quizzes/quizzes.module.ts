import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { QuizTimerComponent } from './components/quiz-timer/quiz-timer.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';



@NgModule({
  declarations: [QuizPageComponent, QuestionCardComponent, QuizTimerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class QuizzesModule { }

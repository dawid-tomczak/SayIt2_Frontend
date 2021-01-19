import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { QuizTimerComponent } from './components/quiz-timer/quiz-timer.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { QuizProgressComponent } from './components/quiz-progress/quiz-progress.component';
import { QuizResultDescPipe } from './pipes/quiz-result-desc.pipe';
import { QuizResultNumericPipe } from './pipes/quiz-result-numeric.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [QuizPageComponent, QuestionCardComponent, QuizTimerComponent, QuizProgressComponent, QuizResultDescPipe, QuizResultNumericPipe],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class QuizzesModule { }

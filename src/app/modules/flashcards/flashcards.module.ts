import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashcardsPageComponent } from './components/flashcards-page/flashcards-page.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [FlashcardsPageComponent, FlashcardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FlashcardsModule { }

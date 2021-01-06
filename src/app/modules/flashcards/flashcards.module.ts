import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashcardsPageComponent } from './components/flashcards-page/flashcards-page.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { FlashcardChangeHelpComponent } from './components/flashcard-change-help/flashcard-change-help.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1
};

@NgModule({
  declarations: [FlashcardsPageComponent, FlashcardComponent, FlashcardChangeHelpComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class FlashcardsModule { }

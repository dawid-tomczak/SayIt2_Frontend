import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { scaleInOut } from 'src/app/shared/animations';
import { MobileDeviceService } from 'src/app/shared/services/mobile-device.service';
import { SwiperOptions } from 'swiper';
import { Flashcard } from '../../models/flashcard';
import { FlashcardChangeDirection } from '../../models/flashcard-change-direction.enum';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  templateUrl: './flashcards-page.component.html',
  styleUrls: ['./flashcards-page.component.scss'],
  animations: [scaleInOut]
})
export class FlashcardsPageComponent implements OnInit {

  initLoading: boolean;
  subscriptions: Subscription[] = [];
  flashcards: Flashcard[] = [];
  selectedFlashcard: Flashcard;
  selectedIndex = 0;
  maxIndex = 0;
  showHelp = false;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
  };

  @ViewChild('swiper', { static: false }) swiper;

  constructor(private flashcardService: FlashcardService, private mobileService: MobileDeviceService) { }

  ngOnInit() {
    this.initLoading = true;

    this.subscriptions.push(
      this.startListeningToDevice(),
      this.downloadFlashcards(true)
    );
  }

  flashcardChangeHandler(direction: FlashcardChangeDirection) {
    const modifier = (direction === FlashcardChangeDirection.next ? 1 : -1);

    this.selectedIndex += modifier;
    this.showHelp = false;
  }

  private downloadFlashcards(initDownload: boolean = false): Subscription {
    return this.flashcardService.getAllFlashcards().subscribe(res => {
      this.flashcards = res;
      this.initLoading = false;

      if (initDownload) {
        this.selectedIndex = 0;
        this.selectedFlashcard = this.flashcards[0];
        this.maxIndex = res.length;
      }

    }, err => { this.initLoading = false; });
  }

  private startListeningToDevice(): Subscription {
    return this.mobileService.getMobileDeviceObservable().subscribe(isMobile => {
      if (isMobile) {
        this.showHelp = true;
      }
    });
  }
}

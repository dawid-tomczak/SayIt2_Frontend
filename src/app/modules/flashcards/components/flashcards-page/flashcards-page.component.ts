import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selectedIndex = 0;
  maxIndex = 0;
  showHelp = false;

  // separated data out of FlashcardsDataResponse to handle also the /getall endpoint which returns simple Flashcard[]
  seenBeforeQty = 0;
  allFlashcardsCount = 0;

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
  };

  @ViewChild('swiper', { static: false }) swiper;

  constructor(private flashcardService: FlashcardService, private mobileService: MobileDeviceService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initLoading = true;
    this.downloadDataFromURL();

    this.subscriptions.push(
      this.startListeningToDevice(),
    );
  }

  flashcardChangeHandler(direction: FlashcardChangeDirection) {
    const modifier = (direction === FlashcardChangeDirection.next ? 1 : -1);

    this.selectedIndex += modifier;

    if (!this.flashcards[this.selectedIndex].seenInCurrentSession) {
      this.markFlashcardAsSeen(this.selectedIndex);
    }

    this.showHelp = false;
  }

  countProgress(): number {
    // not having data about seen flashcards from backend
    if (this.allFlashcardsCount === 0) {
      return this.selectedIndex / (this.flashcards.length - 1) * 100;
    }
    return (this.seenBeforeQty / this.allFlashcardsCount) * 100;

  }

  private markFlashcardAsSeen(index: number) {
    this.flashcards[index].seenInCurrentSession = true;
    ++this.seenBeforeQty;
  }

  private downloadDataFromURL() {
    this.activeRoute.queryParams.subscribe(params => {
      if (params.category) {
        this.subscriptions.push(this.downloadFlashcards(params.category, true));
      } else {
        console.error('no category in URL');
      }
    });
  }

  private downloadFlashcards(categoryId: number, initDownload: boolean = false): Subscription {
    return this.flashcardService.getAllFlashcardsFromCategory(categoryId).subscribe(res => {
      this.flashcards = res.flashcards;
      this.seenBeforeQty = res.seenBeforeQty;
      this.allFlashcardsCount = res.allFlashcardsCount;

      this.initLoading = false;

      if (initDownload) {
        this.selectedIndex = 0;
        this.maxIndex = res.flashcards.length;
        this.markFlashcardAsSeen(this.selectedIndex);
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

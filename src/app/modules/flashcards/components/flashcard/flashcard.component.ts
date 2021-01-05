import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { slideHeight } from 'src/app/shared/animations';
import { MobileDeviceService } from 'src/app/shared/services/mobile-device.service';
import { Flashcard } from '../../models/flashcard';
import { FlashcardChangeDirection } from '../../models/flashcard-change-direction.enum';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
  animations: [slideHeight]
})
export class FlashcardComponent implements OnInit, OnDestroy {

  @Input() flashcard: Flashcard;
  @Input() index: number;
  @Input() maxIndex: number;
  @Output() ficheChangeEmitter = new EventEmitter<FlashcardChangeDirection>();

  showDescription = false;
  // ref to enum for using in HTML
  changeDirection = FlashcardChangeDirection;
  $mobileDeviceSubscription: Subscription;
  displayedOnMobileDevice: boolean;

  constructor(public flashcardService: FlashcardService, private mobileService: MobileDeviceService) {
  }

  ngOnInit() {
    this.startListeningToDeviceType();
  }

  descriptionToggle() {
    this.showDescription = !this.showDescription;
  }

  // need to create a separate function with if because (tap) in html is also triggered on mouse clicks
  tapHandler() {
    console.log(this.displayedOnMobileDevice);
    if (this.displayedOnMobileDevice) {
      this.descriptionToggle();
    }
  }

  private startListeningToDeviceType() {
    if (!this.$mobileDeviceSubscription) {
      this.$mobileDeviceSubscription = this.mobileService.getMobileDeviceObservable().subscribe(res => {
        this.displayedOnMobileDevice = res;
        console.log(res);
      });
    }
  }

  ngOnDestroy() {
    if (this.$mobileDeviceSubscription) {
      this.$mobileDeviceSubscription.unsubscribe();
    }
  }

}

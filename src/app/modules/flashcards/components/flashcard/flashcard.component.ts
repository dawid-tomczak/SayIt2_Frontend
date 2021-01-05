import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { slideHeight } from 'src/app/shared/animations';
import { Flashcard } from '../../models/flashcard';
import { FlashcardChangeDirection } from '../../models/flashcard-change-direction.enum';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
  animations: [slideHeight]
})
export class FlashcardComponent implements OnInit {

  @Input() flashcard: Flashcard;
  @Input() index: number;
  @Input() maxIndex: number;
  @Output() ficheChangeEmitter = new EventEmitter<FlashcardChangeDirection>();

  showDescription = false;
  // ref to enum for using in HTML
  changeDirection = FlashcardChangeDirection;

  constructor(public flashcardService: FlashcardService) { }

  ngOnInit() {
  }

  descriptionToggle() {
    this.showDescription = !this.showDescription;
  }

}

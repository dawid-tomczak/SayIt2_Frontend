import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flashcard } from '../../models/flashcard';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  templateUrl: './flashcards-page.component.html',
  styleUrls: ['./flashcards-page.component.scss']
})
export class FlashcardsPageComponent implements OnInit {

  initLoading: boolean;
  subscriptions: Subscription[] = [];
  flashcards: Flashcard[] = [];

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit() {
    this.initLoading = true;
    this.subscriptions.push(this.downloadFlashcards());
  }

  private downloadFlashcards(): Subscription {
    return this.flashcardService.getAllFlashcards().subscribe(res => {
      this.flashcards = res;
      this.initLoading = false;
    }, err => { this.initLoading = false; });
  }
}

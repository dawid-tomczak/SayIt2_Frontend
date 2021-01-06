import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-flashcard-change-help',
  templateUrl: './flashcard-change-help.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .info{
      background-color:rgba(247, 160, 252, 0.288);
      color: rgba(0, 0, 0, 0.75);
      border-radius: 10px;
      font-size: 1.25rem;
      text-align: center;
      padding: 10px 20px 10px 20px;
    }`
  ],
})
export class FlashcardChangeHelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

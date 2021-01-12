import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-progress',
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizProgressComponent implements OnInit {

  // TODO delete default value;
  @Input() answersProgress: boolean[] = [true, true, false, true, null];

  constructor() { }

  ngOnInit(): void {
  }

  generateDotColor(properAnswer: boolean) {
    if (properAnswer) {
      return '#72CC79';
    } else if (properAnswer === false) {
      return '#E63946';
    } else {
      return '#000000';
    }
  }

}

import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-progress',
  templateUrl: './quiz-progress.component.html',
  styleUrls: ['./quiz-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizProgressComponent implements OnInit {

  @Input() $answersProgress: Observable<(boolean | null)[]>;

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

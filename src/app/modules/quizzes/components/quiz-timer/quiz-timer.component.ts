import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-timer',
  templateUrl: './quiz-timer.component.html',
  styles: [`
    .wrapper{
      position: absolute;
    }

    .wrapper__text{
      display: block;
      font-size: 10px;
      color: white;
      position: relative;
      top:-23px;
      left: 0px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizTimerComponent implements OnInit {

  @Input() fullTime: number;
  @Input() $timeLeft: Observable<number>;

  constructor() { }

  ngOnInit(): void {
  }

}

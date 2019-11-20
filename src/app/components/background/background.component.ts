import { Component, OnInit } from '@angular/core';
import { BackgroundShape } from 'src/app/models';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  backgroundElementsArray: BackgroundShape[] = [
    {
      name: 'circle',
      positionPercentageX: 5,
      positionPercentageY: 5,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0,
      color: 'purple'
    },
    {
      name: 'rectangle',
      positionPercentageX: 2.5,
      positionPercentageY: 31,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 40,
      color: 'pink'
    },
    {
      name: 'line',
      positionPercentageX: 8,
      positionPercentageY: 86,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: -15,
      color: 'pink'
    },
    {
      name: 'zig',
      positionPercentageX: 12,
      positionPercentageY: 17,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: -30,
      color: 'green'
    },
    {
      name: 'zig',
      positionPercentageX: 24,
      positionPercentageY: 54,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: -20,
      color: 'green'
    },
    {
      name: 'rectangle',
      positionPercentageX: 26,
      positionPercentageY: 25,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: -8,
      color: 'purple'
    },
    {
      name: 'circle',
      positionPercentageX: 28,
      positionPercentageY: 86,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0,
      color: 'green'
    },
    {
      name: 'circle',
      positionPercentageX: 35,
      positionPercentageY: 10,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0,
      color: 'pink'
    },
    {
      name: 'line',
      positionPercentageX: 46,
      positionPercentageY: 80,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0,
      color: 'green'
    },
    {
      name: 'rectangle',
      positionPercentageX: 49,
      positionPercentageY: 75,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0,
      color: 'pink'
    },
    {
      name: 'zig',
      positionPercentageX: 54,
      positionPercentageY: 22,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 72,
      color: 'green'
    },
    {
      name: 'circle',
      positionPercentageX: 65,
      positionPercentageY: 48,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0,
      color: 'purple'
    },
    {
      name: 'line',
      positionPercentageX: 72,
      positionPercentageY: 24,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 45,
      color: 'green'
    },
    {
      name: 'rectangle',
      positionPercentageX: 72,
      positionPercentageY: 91,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 31,
      color: 'purple'
    },
    {
      name: 'rectangle',
      positionPercentageX: 83,
      positionPercentageY: 34,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 43,
      color: 'purple'
    },
    {
      name: 'zig',
      positionPercentageX: 90,
      positionPercentageY: 88,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: -8,
      color: 'purple'
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0,
      color: 'purple'
    },
    {
      name: 'rectangle',
      positionPercentageX: 96,
      positionPercentageY: 26,
      scaleThreshold: this._getRndInteger(0.35, 1),
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: -5,
      color: 'green'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  _getRndInteger(min: number, max: number) {
    console.log(Math.floor(Math.random() * ((max * 100) - min * 100 + 1)) + min * 100);
    return (Math.floor(Math.random() * ((max * 100) - min * 100 + 1)) + min * 100) / 100;
  }

}

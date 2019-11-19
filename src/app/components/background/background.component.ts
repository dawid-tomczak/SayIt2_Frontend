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
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'rectangle',
      positionPercentageX: 2.5,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'line',
      positionPercentageX: 8,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'zig',
      positionPercentageX: 12,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
    {
      name: 'circle',
      positionPercentageX: 0,
      positionPercentageY: 0,
      scalePercentageThreshold: 10,
      xMovingPercentageThreshold: 10,
      yMovingPercentageThreshold: 10,
      rotate: 0
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

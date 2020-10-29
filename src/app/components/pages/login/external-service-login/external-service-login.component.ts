import { Component, Input, OnInit } from '@angular/core';
import { ExternalLoginItem } from '../models/externalLoginItem';

@Component({
  selector: 'app-external-service-login',
  templateUrl: './external-service-login.component.html',
  styleUrls: ['./external-service-login.component.scss']
})
export class ExternalServiceLoginComponent implements OnInit {

  @Input() externalLoginItem: ExternalLoginItem;

  // using hover flag in ts to pass background color from variable in ngStype
  hover = false;

  constructor() { }

  ngOnInit() {
  }

}

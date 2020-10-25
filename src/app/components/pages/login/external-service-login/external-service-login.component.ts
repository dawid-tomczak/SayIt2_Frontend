import { Component, Input, OnInit } from '@angular/core';
import { ExternalLoginItem, ExternalLoginItemType } from '../models/externalLoginService';

@Component({
  selector: 'app-external-service-login',
  templateUrl: './external-service-login.component.html',
  styleUrls: ['./external-service-login.component.scss']
})
export class ExternalServiceLoginComponent implements OnInit {

  @Input() externalLoginItemKey: ExternalLoginItemType;

  externalLoginItem: ExternalLoginItem;
  // using hover flag in ts to pass background color from variable in ngStype
  hover = false;

  constructor() { }

  ngOnInit() {
    this.externalLoginItem = new ExternalLoginItem(this.externalLoginItemKey);
  }

}

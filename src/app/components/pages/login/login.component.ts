import { Component, OnInit } from '@angular/core';
import { ExternalLoginItem, ExternalLoginItemType } from './models/externalLoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // filtering to get only keys from enum
  externalLoginServicesTypes = Object.keys(ExternalLoginItemType).filter(type => {
    return !isNaN(+type);
  });

  constructor() { }

  ngOnInit() {
  }

}

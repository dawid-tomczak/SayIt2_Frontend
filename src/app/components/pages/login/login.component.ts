import { Component, OnInit } from '@angular/core';
import { ExternalLoginItem } from './models/externalLoginItem';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  externalLoginServicesTypes: ExternalLoginItem[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.externalLoginServicesTypes = this.loginService.getPossibleExternalLoginServices();
  }

}

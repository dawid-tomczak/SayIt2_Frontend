import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExternalLoginItem } from './models/externalLoginItem';
import { LoggedUserInfo } from './models/logged-user-info';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  externalLoginServicesTypes: ExternalLoginItem[] = [];
  subscriptions: Subscription[] = [];
  invalidLoginOrPassword = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.externalLoginServicesTypes = this.loginService.getPossibleExternalLoginServices();
    this.loginForm = this.loginService.generateNewLoginFormGroup();
  }

  submit(): void {
    this.invalidLoginOrPassword = false;

    this.subscriptions.push(
      this.loginService.loginFormSubmit().subscribe(res => {
        this.loginSuccessful(res);
      }, err => {
        if (err.status === 400) {
          this.invalidLoginOrPassword = true;
        }
      })
    );
  }

  private loginSuccessful(user: LoggedUserInfo): void {
    this.invalidLoginOrPassword = false;
    this.loginService.storeUserInfo(user);

    this.router.navigate(['main']);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }
}

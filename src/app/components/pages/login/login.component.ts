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
  registerMode = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.externalLoginServicesTypes = this.loginService.getPossibleExternalLoginServices();
    this.loginForm = this.loginService.generateNewLoginFormGroup();
  }

  submit(): void {
    this.invalidLoginOrPassword = false;

    if (!this.registerMode) {
      this.loginAction();
    }
    else {
      this.registerAction();
    }
  }

  registerToggle(): void {
    this.registerMode = !this.registerMode;
    // needed to handle reactive form fields
    this.loginService.toggleRegisterForm(this.registerMode);
  }

  private loginSuccessful(user: LoggedUserInfo): void {
    this.invalidLoginOrPassword = false;
    this.loginService.storeUserInfo(user);

    this.router.navigate(['main']);
  }

  private loginAction() {
    this.subscriptions.push(
      this.loginService.loginSubmit().subscribe(res => {
        this.loginSuccessful(res);
      }, err => {
        if (err.status === 400) {
          this.invalidLoginOrPassword = true;
        }
      })
    );
  }

  private registerAction() {
    this.subscriptions.push(
      this.loginService.loginSubmit(true).subscribe(res => {
        // TODO add actions when backend will return some data
        console.log(res);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }
}

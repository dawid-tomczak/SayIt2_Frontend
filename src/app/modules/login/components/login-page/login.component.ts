import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { ExternalLoginItem } from '../../models/externalLoginItem';
import { LoggedUserInfo } from '../../models/logged-user-info';
import { LoginService } from '../../services/login.service';

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
  requestLoading = false;

  constructor(private loginService: LoginService, private router: Router, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    this.externalLoginServicesTypes = this.loginService.getPossibleExternalLoginServices();
    this.loginForm = this.loginService.generateNewLoginFormGroup();
  }

  submit(): void {
    this.invalidLoginOrPassword = false;

    if (!this.registerMode) {
      this.loginAction();
    } else {
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

    this.router.navigate(['categories']);
  }

  private loginAction() {
    this.requestLoading = true;

    this.subscriptions.push(
      this.loginService.loginSubmit().subscribe(res => {
        this.requestLoading = false;
        this.loginSuccessful(res);
      }, err => {
        if (err.status === 400) {
          this.invalidLoginOrPassword = true;
          this.requestLoading = false;
        }
      })
    );
  }

  private registerAction() {
    this.requestLoading = true;

    this.subscriptions.push(
      this.loginService.loginSubmit(true).subscribe(res => {
        this.requestLoading = false;
        this.registerMode = false;
        this.loginService.toggleRegisterForm(false);

        this.snackbarService.showSnackbar('Użytkownik zarejestrowany, możesz się zalogować');
      }, err => this.requestLoading = false)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}

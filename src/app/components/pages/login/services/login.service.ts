import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { LOGIN_ENDPOINT, LOGOFF_ENDPOINT } from 'src/app/shared/consts';
import { ExternalLoginItem } from '../models/externalLoginItem';
import { LoggedUserInfo } from '../models/logged-user-info';
import { LoginCredentials } from '../models/login-credentials';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ResponseMessage } from 'src/app/shared/models/response-message';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginForm: FormGroup;
  private loggedUser: Subject<LoggedUserInfo> = new Subject<LoggedUserInfo>();

  constructor(private fb: FormBuilder, private http: HttpClient, private jwtHelper: JwtHelperService) { }

  getPossibleExternalLoginServices(): ExternalLoginItem[] {
    return [new ExternalLoginItem('Facebook'), new ExternalLoginItem('Google'), new ExternalLoginItem('Microsoft')];
  }

  generateNewLoginFormGroup(): FormGroup {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    return this.loginForm;
  }

  loginFormSubmit(): Observable<LoggedUserInfo> {
    this.markLoginFormFieldsTouched();

    if (this.loginForm.valid) {
      return this.loginUser(this.loginForm.getRawValue() as LoginCredentials);
    }
  }

  loginUser(credentials: LoginCredentials): Observable<LoggedUserInfo> {
    const url = LOGIN_ENDPOINT;
    return this.http.post<LoggedUserInfo>(url, credentials);
  }

  logoutUser(): Observable<ResponseMessage> {
    return this.http.get<ResponseMessage>(LOGOFF_ENDPOINT);
  }

  getLoggedUser(): Observable<LoggedUserInfo> {
    return this.loggedUser.asObservable();
  }

  storeUserInfo(user: LoggedUserInfo): void {
    this.loggedUser.next(user);
    sessionStorage.setItem('SayIT_Token', user.token);
  }

  clearUserInfo(): void {
    this.loggedUser.next(null);
    sessionStorage.removeItem('SayIT_Token');
  }

  getUserToken(): string {
    return sessionStorage.getItem('SayIT_Token');
  }

  isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.getUserToken());
  }

  toggleRegisterForm(registerMode: boolean) {
    if (registerMode) {
      const confirmationControl = this.fb.control('', [Validators.required, this.passwordConfirmationMatchValidator]);
      this.loginForm.addControl('passwordConfirmation', confirmationControl);
    }
    else {
      this.loginForm.removeControl('passwordConfirmation');
    }
  }

  private markLoginFormFieldsTouched(): void {
    this.loginForm.markAllAsTouched();
  }

  private passwordConfirmationMatchValidator(control: AbstractControl) {
    if (control.parent && (<FormGroup>control.parent).get('password').value !== control.value) {
      return { passwordMatch: false };
    }
    else {
      return null;
    }
  }
}

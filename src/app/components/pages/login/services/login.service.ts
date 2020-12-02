import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { LOGIN_ENDPOINT } from 'src/app/shared/consts';
import { ExternalLoginItem, ExternalLoginItemType } from '../models/externalLoginItem';
import { LoggedUserInfo } from '../models/logged-user-info';
import { LoginCredentials } from '../models/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginForm: FormGroup;
  private loggedUser: Subject<LoggedUserInfo> = new Subject<LoggedUserInfo>();

  constructor(private fb: FormBuilder, private http: HttpClient) { }

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

  getLoggedUser(): Observable<LoggedUserInfo> {
    return this.loggedUser.asObservable();
  }

  storeUserInfo(user: LoggedUserInfo) {
    this.loggedUser.next(user);
    sessionStorage.setItem('SayIT_Token', user.token);
  }

  getUserToken() {
    sessionStorage.getItem('SayIT_Token');
  }

  private markLoginFormFieldsTouched(): void {
    this.loginForm.markAllAsTouched();
  }
}

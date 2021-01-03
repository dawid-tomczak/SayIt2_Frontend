import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { LOGIN_ENDPOINT, LOGOFF_ENDPOINT, REGISTER_ENDPOINT } from 'src/app/shared/consts';
import { ExternalLoginItem } from '../models/externalLoginItem';
import { LoggedUserInfo } from '../models/logged-user-info';
import { LoginCredentials } from '../models/login-credentials';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ResponseMessage } from 'src/app/shared/models/response-message';
import { RegisterCredentials } from '../models/register-credentials';

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

  loginSubmit(registration: boolean = false): Observable<LoggedUserInfo> | Observable<any> {
    this.markLoginFormFieldsTouched();

    if (this.loginForm.valid) {
      let formValue = this.loginForm.getRawValue();

      if (!registration) {
        return this.loginUser(formValue as LoginCredentials);
      }
      else {
        // backend is not receiving password confirmation
        delete formValue.passwordConfirmation;

        // ! Bug to be fixed at backend
        formValue.email = formValue.userName;
        delete formValue.userName;

        return this.registerUser(formValue as RegisterCredentials);
      }
    }
  }



  loginUser(credentials: LoginCredentials): Observable<LoggedUserInfo> {
    const url = LOGIN_ENDPOINT;
    return this.http.post<LoggedUserInfo>(url, credentials);
  }

  registerUser(credentials: RegisterCredentials): Observable<any> {
    const url = REGISTER_ENDPOINT;
    return this.http.post(url, credentials);
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

  toggleRegisterForm(registerMode: boolean): void {
    // creating controls
    const registerFields: { key: string, control: FormControl }[] = [
      {
        key: 'passwordConfirmation',
        control: this.fb.control('', [Validators.required, this.passwordConfirmationMatchValidator])
      },
      {
        key: 'firstName',
        control: this.fb.control('', [Validators.required])
      },
      {
        key: 'lastName',
        control: this.fb.control('', [Validators.required])
      }
    ];

    // adding or deleting controls
    if (registerMode) {
      registerFields.forEach(field => this.loginForm.addControl(field.key, field.control))
    }
    else {
      registerFields.forEach(field => this.loginForm.removeControl(field.key))
    }
  }

  private markLoginFormFieldsTouched(): void {
    this.loginForm.markAllAsTouched();
  }

  private passwordConfirmationMatchValidator(control: AbstractControl): any | null {
    if (control.parent && (<FormGroup>control.parent).get('password').value !== control.value) {
      return { passwordMatch: false };
    }
    else {
      return null;
    }
  }
}

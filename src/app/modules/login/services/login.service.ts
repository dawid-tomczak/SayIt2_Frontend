import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ExternalLoginItem } from '../models/externalLoginItem';
import { LoggedUserInfo } from '../models/logged-user-info';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/shared/services/user.service';
import { CookiesService } from 'src/app/shared/services/cookies.service';
import { AUTH_TOKEN_KEY } from 'src/app/shared/consts';
import { RegisterCredentials } from '../models/register-credentials';
import { LoginCredentials } from '../models/login-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginForm: FormGroup;
  private loggedUser: Subject<LoggedUserInfo> = new Subject<LoggedUserInfo>();

  constructor(private fb: FormBuilder, private userService: UserService, private jwtHelper: JwtHelperService,
    private cookiesService: CookiesService) { }

  getPossibleExternalLoginServices(): ExternalLoginItem[] {
    return [new ExternalLoginItem('Facebook'), new ExternalLoginItem('Google'), new ExternalLoginItem('Microsoft')];
  }

  generateNewLoginFormGroup(): FormGroup {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    return this.loginForm;
  }

  loginSubmit(registration: boolean = false): Observable<LoggedUserInfo> | Observable<any> {
    this.markLoginFormFieldsTouched();

    if (this.loginForm.valid) {
      const formValue = this.loginForm.getRawValue();

      if (!registration) {
        return this.userService.loginUser(formValue as LoginCredentials);
      } else {
        // backend is not receiving password confirmation
        delete formValue.passwordConfirmation;

        formValue.email = formValue.userName;
        delete formValue.userName;

        return this.userService.registerUser(formValue as RegisterCredentials);
      }
    }
  }

  getLoggedUser(): Observable<LoggedUserInfo> {
    return this.loggedUser.asObservable();
  }

  storeUserInfo(user: LoggedUserInfo): void {
    this.loggedUser.next(user);
    this.cookiesService.setItem(AUTH_TOKEN_KEY, user.token);
  }

  clearUserInfo(): void {
    this.loggedUser.next(null);
    this.cookiesService.removeItem(AUTH_TOKEN_KEY);
  }

  getUserToken(): string {
    return this.cookiesService.getItem(AUTH_TOKEN_KEY);
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
      registerFields.forEach(field => this.loginForm.addControl(field.key, field.control));
    } else {
      registerFields.forEach(field => this.loginForm.removeControl(field.key));
    }
  }

  private markLoginFormFieldsTouched(): void {
    this.loginForm.markAllAsTouched();
  }

  private passwordConfirmationMatchValidator(control: AbstractControl): any | null {
    if (control.parent && (control.parent as FormGroup).get('password').value !== control.value) {
      return { passwordMatch: false };
    } else {
      return null;
    }
  }
}

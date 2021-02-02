import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoggedUserInfo } from 'src/app/modules/login/models/logged-user-info';
import { LoginCredentials } from 'src/app/modules/login/models/login-credentials';
import { RegisterCredentials } from 'src/app/modules/login/models/register-credentials';
import { AUTH_TOKEN_KEY, LEVEL_ENDPOINT, LOGIN_ENDPOINT, LOGOFF_ENDPOINT, REGISTER_ENDPOINT } from '../consts';
import { ResponseMessage } from '../models/response-message';
import { User } from '../models/user';
import { CookiesService } from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private cookiesService: CookiesService) { }

  loginUser(credentials: LoginCredentials): Observable<LoggedUserInfo> {
    const url = LOGIN_ENDPOINT;
    return this.http.post<LoggedUserInfo>(url, credentials);
  }

  registerUser(credentials: RegisterCredentials): Observable<any> {
    const url = REGISTER_ENDPOINT;
    return this.http.post(url, credentials);
  }

  logoutUser(): Observable<ResponseMessage> {
    const url = LOGOFF_ENDPOINT;
    return this.http.get<ResponseMessage>(url);
  }

  getLevel(): Observable<number> {
    const url = LEVEL_ENDPOINT;
    return this.http.get<number>(url);
  }

  getCurrentUser(): User {
    let response: User;
    const decodedToken = this.jwtHelper.decodeToken(this.cookiesService.getItem(AUTH_TOKEN_KEY));

    response = {
      id: decodedToken.Id,
      name: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
      email: decodedToken.Email
    };

    return response;
  }
}

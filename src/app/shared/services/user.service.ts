import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedUserInfo } from 'src/app/components/pages/login/models/logged-user-info';
import { LoginCredentials } from 'src/app/components/pages/login/models/login-credentials';
import { RegisterCredentials } from 'src/app/components/pages/login/models/register-credentials';
import { LEVEL_ENDPOINT, LOGIN_ENDPOINT, LOGOFF_ENDPOINT, REGISTER_ENDPOINT } from '../consts';
import { ResponseMessage } from '../models/response-message';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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
}

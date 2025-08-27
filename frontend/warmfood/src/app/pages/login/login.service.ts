import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse } from './login.model';
import { Observable } from 'rxjs';
import { ApiLogin } from '../../services/api-url';
import { UserSessionService } from '../../services/session/user-session.service';
import { createUserByLoginAndUser, UserSession } from '../../model/user-session.model';
import { GetByEmailResponse } from '../../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private userSessionService: UserSessionService,
  ) {}

  auth(user: LoginRequest): Observable<LoginResponse> {
    const body = { user: user.user, pass: user.pass };
    return this.http.post<LoginResponse>(ApiLogin.AUTH, body);
  }

  loginSuccess(loginResponse: LoginResponse, user: GetByEmailResponse): void {
    const userSession: UserSession = createUserByLoginAndUser(loginResponse, user);
    this.userSessionService.saveUser(userSession);
  }
}

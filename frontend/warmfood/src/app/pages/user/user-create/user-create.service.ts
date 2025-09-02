import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCreateModel, UserCreateResponse } from './user-create.model';
import { Observable } from 'rxjs';
import { ApiUser } from '../../../services/api-url';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  constructor(
    private http: HttpClient,
  ) {}

  create(user: UserCreateModel): Observable<UserCreateResponse> {
    return this.http.post<UserCreateResponse>(ApiUser.CREATE, user);
  }
}

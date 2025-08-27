import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUser } from './api-url';
import { GetByEmailResponse } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getByEmail(email: string): Observable<GetByEmailResponse> {
    const url = `${ApiUser.GET_BY_EMAIL}/${email}`;
    return this.http.get<GetByEmailResponse>(url);
  }
}

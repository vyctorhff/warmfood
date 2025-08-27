import { Injectable } from '@angular/core';
import { UserSession } from '../../model/user-session.model';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {

  private USER_SESSION_KEY = "USER_SESSION_KEY";

  constructor(private storage: Storage) {}

  saveUser(user: UserSession): void {
    this.save(this.USER_SESSION_KEY, user);
  }

  save(key: string, user: UserSession): void {
    this.storage.setItem(key, JSON.stringify(user));
  }

  get(key: string): UserSession | null {
    const value = this.storage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
}

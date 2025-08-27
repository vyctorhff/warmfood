import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {}

  save(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }
}

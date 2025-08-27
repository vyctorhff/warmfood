import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavegationService {

  constructor(private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login'])
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToCreateUser() {
    this.router.navigate(['/create-user']);
  }
}

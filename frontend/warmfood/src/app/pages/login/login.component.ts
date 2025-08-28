import { Component } from '@angular/core';
import { NavegationService } from '../../services/navegation.service';
import { createLoginModelFromForm, LoginRequest, LoginResponse } from './login.model';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { UserService } from '../../services/user.service';
import { GetByEmailResponse } from '../../model/user.model';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {

  constructor(
    private navegationService: NavegationService,
    private loginService: LoginService,
    private userService: UserService,
  ) {}

  login(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    const model: LoginRequest = createLoginModelFromForm(form);
    this.requestAuth(model);
  }

  requestAuth(model: LoginRequest): void {
    this.loginService.auth(model).subscribe({
      next: (next: LoginResponse) => {
        this.requestUser(model, next);
      },
      error: this.errorHandler,
    });
  }

  requestUser(model: LoginRequest, respLogin: LoginResponse): void {
    this.userService.getByEmail(model.user).subscribe({
      next: (next: GetByEmailResponse) => {
        this.loginService.loginSuccess(respLogin, next);
        this.navegationService.goToHome();
      },
      error: this.errorHandler,
    });
  }

  navToCreateUser(): void {
    this.navegationService.goToCreateUser();
  }

  private errorHandler(error: any): void {
    console.error(error)
  }
}

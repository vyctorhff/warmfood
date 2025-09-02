import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { NavegationService } from '../../../services/navegation.service';
import { createUserCreateFromForm, UserCreateResponse } from './user-create.model';
import { UserCreateService } from './user-create.service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [FormsModule, FooterComponent, HeaderComponent],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.less'
})
export class UserCreateComponent {

  public requestErrorMsg = signal('');

  constructor(
    private navegation: NavegationService,
    private userCreateService: UserCreateService,
  ) {}

  create(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    const model = createUserCreateFromForm(form);

    this.userCreateService.create(model).subscribe({
      next: (next) => this.handlerSuccess(next),
      error: (error) => this.handlerError(error),
    });
  }

  handlerSuccess(next: UserCreateResponse): void {
    this.navegation.goToLogin();
  }

  handlerError(error: any): void {
    this.requestErrorMsg.set(error.message);
  }

  cancel(): void {
    this.navegation.goToLogin();
  }
}

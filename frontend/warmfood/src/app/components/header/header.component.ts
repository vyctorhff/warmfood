import { Component, Input, OnInit } from '@angular/core';
import { UserSessionService } from '../../services/session/user-session.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent implements OnInit {

  public isUserLogged = false;

  @Input()
  public isShowMenu = false;

  @Input()
  public isShowBtnBack = false;

  constructor(private userSession: UserSessionService) {}

  ngOnInit(): void {
    this.isUserLogged = this.userSession.isUserSet();
    console.log(this.isUserLogged);
  }
}

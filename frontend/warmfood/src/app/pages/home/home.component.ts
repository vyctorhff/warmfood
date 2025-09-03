import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { createMenuDailyModelEmpty, MenuDailyModel } from './home.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {

  menuDaily = signal<MenuDailyModel>(createMenuDailyModelEmpty());

  constructor() {}

  ngOnInit(): void {}
}

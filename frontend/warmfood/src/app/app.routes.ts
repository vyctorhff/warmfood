import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        canActivate: [],
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [],
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [],
    },
];

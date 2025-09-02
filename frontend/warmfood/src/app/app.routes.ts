import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserCreateComponent } from './pages/user/user-create/user-create.component';
import { userLoggedGuard } from './guards/user-logged/user-logged.guard';

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
        path: 'create-user',
        component: UserCreateComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [userLoggedGuard],
    }
];

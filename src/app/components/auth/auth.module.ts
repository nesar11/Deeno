import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from '../../components/auth/auth.component';

import { AuthService } from '../auth/auth.service';
import { AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent ,canActivate: [AuthGuard]},
      { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AuthComponent
  ],
  imports: [ RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers:[AuthService, AuthGuard]
})
export class AuthModule { }

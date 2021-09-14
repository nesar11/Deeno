import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from '../../components/auth/auth.component';

import { AuthService } from '../auth/auth.service';
import { AuthGuard} from '../auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [

      { path: 'login', component: LoginComponent ,canActivate: [AuthGuard]},
      { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UserViewComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AuthComponent,
    UserViewComponent
  ],
  imports: [ RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    RouterModule
  ],
  providers:[AuthService, AuthGuard]
})
export class AuthModule { }

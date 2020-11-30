import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [NavMenuComponent, HomeComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    NavMenuComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }

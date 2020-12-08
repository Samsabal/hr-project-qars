import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './contact/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListCarsComponent } from './list-cars/list-cars.component';



@NgModule({
  declarations: [NavMenuComponent, HomeComponent, RegisterComponent, LoginComponent, ListCarsComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    NavMenuComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ListCarsComponent
  ]
})
export class AuthModule { }

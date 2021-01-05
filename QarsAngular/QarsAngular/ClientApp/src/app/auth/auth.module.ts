import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './contact/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { ReservationComponent } from './reservation/reservation.component';



@NgModule({
  declarations: [NavMenuComponent, HomeComponent, LoginComponent, RegisterComponent, ListCarsComponent, ReservationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListCarsComponent,
    ReservationComponent
  ]
})
export class AuthModule { }

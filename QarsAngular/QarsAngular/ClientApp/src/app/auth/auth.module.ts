import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './contact/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [NavMenuComponent, HomeComponent, LoginComponent, RegisterComponent, ListCarsComponent, ReservationComponent, AdminComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
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

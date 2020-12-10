import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'


@NgModule({
  declarations: [NavMenuComponent, HomeComponent, FetchDataComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    RegisterComponent
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './login/login.component';


@NgModule({
  declarations: [NavMenuComponent, HomeComponent, FetchDataComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent
  ]
})
export class AuthModule { }

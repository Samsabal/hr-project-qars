import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './auth/nav-menu/nav-menu.component';
import { HomeComponent } from './auth/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListCarsComponent } from './auth/list-cars/list-cars.component';
import { LoginComponent } from './auth/login/login.component';
import { CarService } from './cars.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ListCarsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'list-cars', component: ListCarsComponent },

    ])
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

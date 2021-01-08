import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './auth/nav-menu/nav-menu.component';
import { HomeComponent } from './auth/contact/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListCarsComponent } from './auth/list-cars/list-cars.component';
import { LoginComponent } from './auth/login/login.component';
import { CarService } from './cars.service';
import { ReservationComponent } from './auth/reservation/reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    ListCarsComponent,
    RegisterComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'cars', component: ListCarsComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'cars/:id/reservation', component: ReservationComponent },
      { path: '', redirectTo: 'cars', pathMatch: 'full' }
    ])
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

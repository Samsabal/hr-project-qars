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
import { AccountComponent } from './auth/account/account.component';
import { CustomerService } from './customers.service';
import { AdminComponent } from './auth/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    ListCarsComponent,
    RegisterComponent,
    ReservationComponent,
    AccountComponent,
    AdminComponent
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
      { path: 'account', component: AccountComponent },
      { path: 'home', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'cars/:id/:startdate/:enddate/:pickuplocation/:dropofflocation/:daydiff/reservation', component: ReservationComponent },
      { path: 'cars/:id/:startdate/:enddate/:pickuplocation/:dropofflocation/:daydiff/reservation/login', component: LoginComponent },
      { path: '', redirectTo: 'cars', pathMatch: 'full' }
    ])
  ],
  providers: [CarService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

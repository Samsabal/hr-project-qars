import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ICustomer } from 'src/app/customers.model';
import { CarService } from 'src/app/cars.service';
import { CustomerService } from 'src/app/customers.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'LoginComponent',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public loginForm;

  public customers: any = [];
  public customer: ICustomer;

  public username: string;
  public password: string;

  public loggedIn: boolean = false;
  public admincheck: boolean = false;

  constructor(private _carservice: CarService, private _customerService: CustomerService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
      
    });
  }

  ngOnInit() {
    this._carservice.getCustomers().subscribe((data: ICustomer) => this.customers = data);
  }

  // you have to press twice to login and i dont know why
  login() {
    console.warn('Uw gegevens zijn verstuurd!', this.loginForm.value);

    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;
    if(this.username && this.password == 'admin') {
      console.warn("logged in as admin!");
      this.admincheck = true;
      this.router.navigate(['/admin']);
    }
      this.getCustomer();
    if (this.customer != null) {
      console.warn("logged in!");
      this._customerService.add("user", this.username);
      this._customerService.add("password", this.password);
      console.log(this._customerService.localStorage_hasItem("user"));
      this.refresh();
      //this.changeInterface();
    }
  }

  check() {
    console.log(this._customerService.localStorage_hasItem("user"));
  }

  refresh(): void {
    window.location.reload();
  }

  // searches for customer in database
  getCustomer() {
    this._carservice.getCustomer(this.username, this.password).subscribe((data: ICustomer) => this.customer = data);
  }

  changeInterface() {
    this.loggedIn = true;
  }
}


import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ICustomer } from 'src/app/customers.model';
import { CarService } from 'src/app/cars.service';

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

  constructor(private _carservice: CarService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this._carservice.getCustomers().subscribe((data: ICustomer) => this.customers = data);
  }

  login() {
    console.warn('Uw gegevens zijn verstuurd!', this.loginForm.value);

    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;
    this._carservice.getCustomer(this.username, this.password).subscribe((data: ICustomer) => this.customer = data);
    console.log(this.customer);
    if (this.customer != null) {
      console.warn("logged in!");
    }
  }
}


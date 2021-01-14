import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/cars.service';
import { ICustomer } from 'src/app/customers.model';
import { CustomerService } from 'src/app/customers.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {

  public user: ICustomer;

  public username: string;
  public password: string;
  public givenname: string;
  public familyname: string;
  public countrycode: string;
  public city: string;
  public address: string;
  public zip: string;
  public phonenumber: string;
  public emailaddress: string;

  constructor(private _carService: CarService, private _customerService: CustomerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.username = this._customerService.localStorage_getItem("user");
    this.password = this._customerService.localStorage_getItem("password");

    this._customerService.getCustomer(this.username, this.password).subscribe((data: ICustomer) => this.user = data);
  }

  logout() {
    this._customerService.clear();
    this.refresh();
  }

  refresh() {
    window.location.reload();
  }

  getInfo() {
    this._customerService.getCustomer(this.username, this.password).subscribe((data: ICustomer) => this.user = data);
    this.givenname = this.user.givenname;
    this.familyname = this.user.familyname;
    this.countrycode = this.user.countrycode;
    this.city = this.user.city;
    this.address = this.user.address;
    this.zip = this.user.zip;
    this.phonenumber = this.user.phonenumber;
    this.emailaddress = this.user.emailaddress;
  }

  check() {
    if (this.user != null) {
      console.log(this.user);
      this.getInfo();
    } else {
      console.log("no user info")
    }
  }
}

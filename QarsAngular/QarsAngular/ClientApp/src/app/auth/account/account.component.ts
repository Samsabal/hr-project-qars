import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/cars.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit{

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

  constructor (private _customerService: CarService, private route: ActivatedRoute){

  }

  ngOnInit() {
    
  }
  


}

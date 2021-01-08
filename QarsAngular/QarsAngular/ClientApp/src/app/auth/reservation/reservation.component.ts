import { Component, Inject, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarService } from '../../cars.service';
import { ICar } from 'src/app/cars.model';
import { ICarmodel } from 'src/app/carmodels.model';

import { from } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html'
})
export class ReservationComponent implements OnInit {

  public carmodelid: number;

  public cars: any = [];
  public car: ICar;
  public carmodels: any = [];
  public carmodel: ICarmodel;

  public customerrentProfile;

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
  public startdate: Date;
  public enddate: Date;

  public displayForm = true;
  public displayPayment = false;

  constructor(private _carService: CarService, private route: ActivatedRoute, private fb: FormBuilder) {

    this.customerrentProfile = this.fb.group({
      emailaddress: ['', Validators.required],
      givenname: ['', Validators.required],
      familyname: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      phonenumber: ['', Validators.required]
    });
  }

  ngOnInit() {
    this._carService.getCars()
      .subscribe((data: ICar) => this.cars = data);
    this._carService.getCarmodels()
      .subscribe((data: ICarmodel) => this.carmodels = data);

    this.route.paramMap.subscribe((params: ParamMap) => { this.carmodelid = parseInt(params.get('id')); })

    this._carService.getCarmodel(this.carmodelid)
      .subscribe((data: ICarmodel) => this.carmodel = data);
  }

  onSubmit() {
    console.warn(this.customerrentProfile.value);
    this.givenname = this.customerrentProfile.get('givenname').value;
    this.familyname = this.customerrentProfile.get('familyname').value;
    this.emailaddress = this.customerrentProfile.get('emailaddress').value;
    this.city = this.customerrentProfile.get('city').value;
    this.address = this.customerrentProfile.get('address').value;
    this.zip = this.customerrentProfile.get('zip').value;
    this.phonenumber = this.customerrentProfile.get('phonenumber').value;

    this.displayForm = false;
    this.displayPayment = true;
  }

  finishBooking() {
    
  }

}
import { Component, Inject, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarService } from '../../cars.service';
import { ICar } from 'src/app/cars.model';
import { ICarmodel } from 'src/app/carmodels.model';

import { Subject, from } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/customers.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html'
})
export class ReservationComponent implements OnInit {

  public carmodelid: number;

  public subject = new Subject<number>();

  public cars: any = [];
  public carsnearby: any = [];
  public car: ICar;
  public carmodels: any = [];
  public carmodel: ICarmodel;

  public chosenCar: ICar;

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
  public bookingdate: string;
  public startdate: string;
  public enddate: string;
  public daydiff: number;
  public totalprice: number;

  public pickuplocation: string;
  public dropofflocation: string;

  public childseat: string;
  public childseatcost: number = 0;
  public gps: string;
  public gpscost: number = 0;

  private displayForm = true;
  private displayPayment = false;
  private displayCompletion = false;


  constructor(private _carService: CarService, private _customerService: CustomerService, private route: ActivatedRoute, private fb: FormBuilder) {

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
    this.route.paramMap.subscribe((params: ParamMap) => { this.startdate = params.get('startdate'); })
    this.route.paramMap.subscribe((params: ParamMap) => { this.enddate = params.get('enddate'); })
    this.route.paramMap.subscribe((params: ParamMap) => { this.pickuplocation = params.get('pickuplocation'); })
    this.route.paramMap.subscribe((params: ParamMap) => { this.dropofflocation = params.get('dropofflocation'); })
    this.route.paramMap.subscribe((params: ParamMap) => { this.daydiff = parseInt(params.get('daydiff')); })

    this._carService.getCarmodel(this.carmodelid)
      .subscribe((data: ICarmodel) => this.carmodel = data);
    this._carService.getCarmodelCars(this.pickuplocation, this.carmodelid)
      .subscribe((data: ICarmodel) => this.carsnearby = data);
    this.getGpsChildseat();
    this.getGpsChildseat();
  }

  getGpsChildseat() {
    this.gps = this._customerService.localStorage_getItem("gps");
    this.childseat = this._customerService.localStorage_getItem("childseat");

    if (this.gps == "yes") {
      this.gpscost = 30;
    } else {
      this.gpscost = 0;
    }

    if (this.childseat == "yes") {
      this.childseatcost = 50;
    } else {
      this.gpscost = 0;
    }
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

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.bookingdate = yyyy + '-' + mm + '-' + dd;

    this.totalprice = parseFloat((this.carmodel.dayrate * this.daydiff).toFixed(2));

    this.displayForm = false;
    this.displayPayment = true;
    this.getGpsChildseat();
  }

  dateCalc(date: Date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    return yyyy + "/" + mm + "/" + dd;
  }

  selectCar(id: string) {
    this._carService.getCar(id).subscribe((data: ICar) => this.chosenCar = data);
    localStorage.setItem("licenseplate", this.chosenCar.licenseplate);
    console.log(this.chosenCar);
  }

  finishBooking() {
    if (this.givenname != null && this.familyname != null && this.emailaddress != null && this.city != null && this.address != null && this.zip != null && this.phonenumber != null != null && localStorage.getItem("user") != null) {
      this.displayPayment = false;
      this.displayCompletion = true;
    } else {
      console.log("info not complete")
    }
  }

}
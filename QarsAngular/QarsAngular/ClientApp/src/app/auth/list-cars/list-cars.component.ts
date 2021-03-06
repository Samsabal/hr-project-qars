import { Component, OnInit, Output } from '@angular/core';
import { Config } from 'protractor';
import { CarService } from '../../cars.service';
import { HttpParams } from "@angular/common/http";
import { ICar } from 'src/app/cars.model';
import { ConnectableObservable, Observable } from 'rxjs';
import { ICarmodel } from 'src/app/carmodels.model';
import { Console } from 'console';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/customers.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  public cars: any = [];
  public car: ICar;
  public carmodels: any = [];
  public carmodelspu: any = [];
  public carmodelsairco: any = [];
  public carmodel: ICarmodel;
  public startdate: string;
  public enddate: string;
  public pickuplocation: string;
  public dropofflocation: string;
  public user: string;

  public today;
  public daydiff: number;
  public rentDetails;

  public carbutton = false;
  public airco: boolean;
  public categoryCar: string;

  public gps: string = "";
  public childseat: string = "";

  public displayDetail = false;

  constructor(private _carService: CarService, private _customerService: CustomerService, private fb: FormBuilder) {
    this.rentDetails = this.fb.group({
      StartDate: ['', Validators.required],
      EndDate: ['', Validators.required],
      PickUpLocation: ['', Validators.required],
      DropOffLocation: ['', Validators.required]
    })
  }

  ngOnInit() {
    this._carService.getCars()
      .subscribe((data: ICar) => this.cars = data);
    this._carService.getCarmodels()
      .subscribe((data: ICarmodel) => this.carmodels = data);
    this.user = localStorage.getItem("user");
  }

  onSave() {
    console.warn(this.rentDetails.value);
    this.enddate = this.rentDetails.get('EndDate').value;
    this.startdate = this.rentDetails.get('StartDate').value;
    this.pickuplocation = this.rentDetails.get('PickUpLocation').value;
    this.dropofflocation = this.rentDetails.get('DropOffLocation').value;
    this.daydiff = this.getDifferenceInDays(new Date(this.enddate), new Date(this.startdate));

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;
    if (this.daydiff == 0) {
      alert("You can't rent for a day that already happend or go backwards in time")
    } else {
      this.pickuplocation = this.rentDetails.get('PickUpLocation').value;
      this.dropofflocation = this.rentDetails.get('DropOffLocation').value;
      this.user = localStorage.getItem("user");
      localStorage.setItem("childseat", this.childseat);
      localStorage.setItem("gps", this.gps);
      if (this.user != null) {
        this.carbutton = true;
      } else {
        console.log("not logged in yet")
      }
    }
    var parsedStartDate = this.startdate.split("-", 3);
    var parsedEndDate = this.enddate.split("-", 3);
    var startMonth = parsedStartDate[1];
    var startDay = parsedStartDate[2];
    var startYear = parsedStartDate[0];
    //checking if the startDate is correct, because the startDate shouldn't be later then the Enddate and vice versa. 
    if (Number(startYear) > Number(parsedEndDate[0])) // this is the input parsed to the given year for renting.
    {
      alert('Your end date for the renting can not be later then your start date, please fix this.');
    }
    else if (Number(startMonth) > Number(parsedEndDate[1])) // this is the input parsed to the given month for renting.
    {
      alert('Your end date for the renting can not be later then your start date, please fix this.');
    }
    else if (Number(startDay) > Number(parsedEndDate[2])) // this is the input parsed to the given day for renting.
    {
      alert('Your end date for the renting can not be later then your start date, please fix this.');
    }



  }

  carDetail(code: number) {
    this._carService.getCarmodel(code)
      .subscribe((data: ICarmodel) => this.carmodel = data);
    this.displayDetail = !this.displayDetail;
  }

  saveExtra() {
    localStorage.setItem("childseat", this.childseat);
    localStorage.setItem("gps", this.gps);
  }

  filterAirco(value: boolean) {
    this.airco = value;
    this._carService.getCarmodelAirco(1000, this.airco)
      .subscribe((data: ICarmodel) => this.carmodels = data);

    console.log(value);
  }

  filterCategory(value: string) {
    this.categoryCar = value;
    this._carService.getCarmodelCategory(1000, this.airco, this.categoryCar)
      .subscribe((data: ICarmodel) => this.carmodels = data);
    console.log(value);
  }

  // checks if extra gps is added
  checkExtraGps(value: string) {
    if (value == "yes") {
      this.gps = value;
      console.log("gps: ", this.gps);
    } else {
      this.gps = value;
      console.log("gps: ", this.gps);
    }
  }

  // checks if extra childseat is added
  checkExtraChildseat(value: string) {
    if (value == "yes") {
      this.childseat = value;
      console.log("childseat: ", this.childseat);
    } else {
      this.childseat = value;
      console.log("childseat: ", this.childseat);
    }
  }

  // if filter is not working right or you don't want to filter anymore, you can reset the car list
  resetCarlist() {
    this._carService.getCarmodels()
      .subscribe((data: ICarmodel) => this.carmodels = data);
  }

  getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }
} 

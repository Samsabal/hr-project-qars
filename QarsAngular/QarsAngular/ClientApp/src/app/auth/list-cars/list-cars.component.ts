import { Component, OnInit, Output } from '@angular/core';
import { Config } from 'protractor';
import { CarService } from '../../cars.service';
import { HttpParams } from "@angular/common/http";
import { ICar } from 'src/app/cars.model';
import { ConnectableObservable, Observable } from 'rxjs';
import { ICarmodel } from 'src/app/carmodels.model';
import { Console } from 'console';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  public cars: any = [];
  public car: ICar;
  public carmodels: any = [];
  public carmodel: ICarmodel;
  public startdate= "";
  public enddate="";
  public pulocation= "";
  public dolocation= "";
  public rentDetails;

  displayDetail = false;
  public lastid: number;

  constructor(private _carService: CarService, private _rentingDetails: FormBuilder) { 
    this.rentDetails = this._rentingDetails.group({ StartDate: ['', Validators.required], EndDate: ['', Validators.required], PickUpLocation: ['', Validators.required], DropOffLocation: ['', Validators.required] })
   }

  ngOnInit() {
    this._carService.getCars()
      .subscribe((data: ICar) => this.cars = data);
    this._carService.getCarmodels()
      .subscribe((data: ICarmodel) => this.carmodels = data);
  }

  getCar(id: string) {
    return this._carService.getCar(id);

  }
  getCarmodel(id: number) {
    return this._carService.getCarmodel(id);
  }

  Filters(value: string)
  {
    console.log(value);
    if (value == "Yes")
    {
      alert('The filter is enabled !');
    }
    else
    {
      alert('The filter is enabled !!');
    }
  }

  onSave()
  {
    console.warn(this.rentDetails.value);
    this.enddate = this.rentDetails.get('EndDate').value;
    this.startdate = this.rentDetails.get('StartDate').value;
    this.pulocation = this.rentDetails.get('PickUpLocation').value;
    this.dolocation = this.rentDetails.get('DropOffLocation').value;
  }

} 

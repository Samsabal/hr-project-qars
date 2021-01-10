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
  public carmodelspu: any = [];
  public carmodel: ICarmodel;
  public startdate: string;
  public enddate: string;
  public pickuplocation: string;
  public dropofflocation: string;
  public daydiff: number;
  public rentDetails;

  public carbutton = false;

  public displayDetail = false;

  constructor(private _carService: CarService, private _rentingDetails: FormBuilder) {
    this.rentDetails = this._rentingDetails.group({
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
  }

  getCar(id: string) {
    return this._carService.getCar(id);
  }
  getCarmodel(id: number) {
    return this._carService.getCarmodel(id);
  }

  AircoFilter(event?: KeyboardEvent) {
    const evtMsg = event ? ' The filter is ' + (event.target as HTMLElement).textContent : '';
    alert('Your filter is enabled !');
    if (event) {

    }
    if (event) { event.stopPropagation(); }
  }

  carDetail(code: number) {
    this._carService.getCarmodel(code)
      .subscribe((data: ICarmodel) => this.carmodel = data);
    this.displayDetail = !this.displayDetail;
  }


  onSave() {
    console.warn(this.rentDetails.value);
    this.enddate = this.rentDetails.get('EndDate').value;
    this.startdate = this.rentDetails.get('StartDate').value;
    this.pickuplocation = this.rentDetails.get('PickUpLocation').value;
    this.dropofflocation = this.rentDetails.get('DropOffLocation').value;
    this.daydiff = this.getDifferenceInDays(new Date(this.enddate), new Date(this.startdate));
    this.carbutton = true;
  }

  getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }
} 

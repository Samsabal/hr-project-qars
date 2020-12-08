import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { CarService } from '../../cars.service';
import { HttpParams } from "@angular/common/http";
import { ICar } from 'src/app/cars.model';
import { Observable } from 'rxjs';
import { ICarmodel } from 'src/app/carmodel.model';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})

export class ListCarsComponent implements OnInit {

  public cars: any = [];
  public carmodels: any = [];

  //public carsUrl: string = 'https://localhost:5001/cars';
  //public carmodelsUrl: string = 'https://localhost:5001/cars';


  public url: string = 'config/config.json';

  constructor(private _carService: CarService) { }

  ngOnInit() {
    this._carService.getCars()
      .subscribe((data: ICar) => this.cars = data);
    this._carService.getCarmodels()
      .subscribe((data: ICarmodel) => this.carmodels = data);
  }

  getCars() {
    return this.cars;
  }
  getCarmodels() {
    return this.carmodels;
  }
}

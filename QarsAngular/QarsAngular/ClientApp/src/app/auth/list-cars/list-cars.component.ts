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
  public car: ICar;
  public carmodels: any = [];
  public carmodel: ICarmodel;

  displayDetail = false;

  constructor(private _carService: CarService) { }

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

  myFucntion(id: number) {
    this.displayDetail = !this.displayDetail;
    if (id != null) {
      this._carService.getCarmodel(id).subscribe((data: ICarmodel) => this.carmodel = data);
    }
  }
}

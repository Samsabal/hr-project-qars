import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarService } from '../../cars.service';
import { ICar } from 'src/app/cars.model';
import { ICarmodel } from 'src/app/carmodels.model';

import { from } from 'rxjs';

@Component({
  selector: 'ReservationComponent',
  templateUrl: './reservation.component.html'
})
export class ReservationComponent implements OnInit {

  public carmodelid: string;

  public cars: any = [];
  public car: ICar;
  public carmodels: any = [];
  public carmodel: ICarmodel;

  public LastId: number;

  constructor(private _carService: CarService) {

  }

  ngOnInit() {
    this.LastId = this._carService.lastid;
    this._carService.getCars()
      .subscribe((data: ICar) => this.cars = data);
    this._carService.getCarmodels()
      .subscribe((data: ICarmodel) => this.carmodels = data);
    this._carService.getCarmodel(this.LastId)
      .subscribe((data: ICarmodel) => this.carmodel = data);

  }

}



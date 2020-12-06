import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { CarService } from '../../cars.service';
import { HttpParams } from "@angular/common/http";
import { ICar } from 'src/app/cars.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})

export class ListCarsComponent implements OnInit {

  public cars: any = [];

  constructor(private _carService: CarService) { }

  ngOnInit() {
    this._carService.getCars()
      .subscribe((data: Config) => this.cars = {
        carsUrl: data.carsUrl,
        textfile: data.textfile
      });
  }

  getCars() {
    return this.cars;
  }

}

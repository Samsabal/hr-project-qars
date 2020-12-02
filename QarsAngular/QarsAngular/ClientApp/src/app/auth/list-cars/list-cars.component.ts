import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../../cars.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})

export class ListCarsComponent implements OnInit {

  public cars = [];

  constructor(private _carService: CarService) { }

  ngOnInit() {
     this._carService.getCars()
       .subscribe(data => this.cars = data);
  }
  

}

import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { CarService } from '../../cars.service';
import { HttpParams } from "@angular/common/http";
import { ICar } from 'src/app/cars.model';
import { ConnectableObservable, Observable } from 'rxjs';
import { ICarmodel } from 'src/app/carmodels.model';
import { Console } from 'console';

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
  public date= "";
  public pulocation= "";
  public dolocation= "";

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

  AircoFilter(event?: KeyboardEvent)
    {
      const evtMsg = event ? ' The filter is ' + (event.target as HTMLElement).textContent : '';
      alert('Your filter is enabled !');
      if (event) { event.stopPropagation(); }
    }
  
  DateInput(event: any) 
  {
    this.date = event.target.value;
  }
  PuLocationInput(event: any)
  {
    this.pulocation = event.target.value;
  }
  DoLocationInput(event: any)
  {
    this.dolocation = event.target.value;
  }
  onSave(event?: KeyboardEvent)
  {
    alert('Saved :)')
  }

} 

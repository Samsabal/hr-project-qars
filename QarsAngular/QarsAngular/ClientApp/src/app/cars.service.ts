import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICar } from './cars.model';


@Injectable()
export class CarService {

    private _dburl: string = "api/cars";

    constructor(private http: HttpClient) { }

    getCars(): Observable<ICar[]> {
        return this.http.get<ICar[]>(this._dburl);
    }

}
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Config } from "protractor";
import { Observable } from "rxjs";
import { ICar } from './cars.model';
import { HttpHeaders } from '@angular/common/http';



@Injectable()
export class CarService {

    private configurl = "https://localhost:5001/cars";
    private carmodelurl = "https://localhost:5001/carmodels";

    public lastid: number;

    constructor(private http: HttpClient) {
    }

    getCars() {
        return this.http.get(this.configurl);
    }

    getCarmodels() {
        return this.http.get(this.carmodelurl);
    }

    getCar(id: string) {
        return this.http.get(this.configurl + "/" + id);
    }

    getCarmodel(id: number) {
        this.lastid = id;
        return this.http.get(this.carmodelurl + "/" + id);
    }

    ///* GET heroes whose name contains search term */
    //searchHeroes(term: string): Observable<ICar[]> {
    //    term = term.trim();

    //    // Add safe, URL encoded search parameter if there is a search term
    //    const options = term ?
    //        { params: new HttpParams().set('name', term) } : {};

    //    return this.http.get<Config>(this.carsUrl, options)
    //        .pipe(
    //            catchError(this.handleError<ICar[]>('searchHeroes', []))
    //        );
    //}

}
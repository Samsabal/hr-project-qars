import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Config } from "protractor";
import { Observable } from "rxjs";
import { ICar } from './cars.model';
import { HttpHeaders } from '@angular/common/http';



@Injectable()
export class CarService {

    private configurl = "https://localhost:5001/api/cars";
    private carmodelurl = "https://localhost:5001/api/carmodels";

    constructor(private http: HttpClient) {
    }

    getCars() {
        return this.http.get(this.configurl);
    }

    getCarmodels() {
        return this.http.get(this.carmodelurl);
    }

    getCar(licenseplate: string) {
        return this.http.get(this.configurl + "/" + licenseplate);
    }

    getCarmodel(id: number) {
        return this.http.get(this.carmodelurl + "/" + id);
    }
    getCarmodelPrice(id: number) {
        return this.http.get(this.carmodelurl + "/" + id)
    }

    getCarmodelCars(locationcode: string, id: number) {
        return this.http.get(this.configurl + "/" + locationcode + "/" + id);
    }

    getCarmodelAirco(id: number, airconditioning: boolean) {
        return this.http.get(this.carmodelurl + "/" + id + "/" + String(airconditioning));
    }

    getCarmodelCategory(id: number, airconditioning: boolean, category: string) {
        return this.http.get(this.carmodelurl + "/" + id + "/" + String(airconditioning) + "/" + category);
    }
}
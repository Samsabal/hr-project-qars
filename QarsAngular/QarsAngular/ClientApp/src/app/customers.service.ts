import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICustomer } from "./customers.model";

@Injectable()
export class CustomerService {

    private customerurl = "https://localhost:5001/api/customers";

    localStorageSupported: boolean;

    constructor(private http: HttpClient) {
        this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
    }

    getCustomers() {
        return this.http.get(this.customerurl);
    }

    getCustomer(username: string, password: string) {
        return this.http.get(this.customerurl + "/" + username + "/" + password);
    }

    addCustomer(customer: ICustomer) {
        return this.http.post<ICustomer>(this.customerurl, customer);
    }

    localStorage_getItem(key) {
        return localStorage.getItem(key);
    }

    localStorage_hasItem(key) {
        return localStorage.getItem(key) !== null;
    }

    add(key: string, item: string) {
        if (this.localStorageSupported) {
            localStorage.setItem(key, item);
        }
    }

    clear() {
        if (this.localStorageSupported) {
            localStorage.clear();
        }
    }
}
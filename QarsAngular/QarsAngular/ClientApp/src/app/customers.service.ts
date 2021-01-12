import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomerService {

    private customerurl = "https://localhost:5001/api/customers";

    localStorageSupported: boolean;

    constructor(private http: HttpClient) {
        this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
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
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarService } from 'src/app/cars.service';
import { ICustomer } from 'src/app/customers.model';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})


export class RegisterComponent implements OnInit {

    public customerForm;

    public customers: any = [];
    public customer: ICustomer;

    constructor(private fb: FormBuilder , private _carService: CarService) {
        this.customerForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            givenname: ['', Validators.required],
            familyname: ['', Validators.required],
            countrycode: ['', Validators.required],
            city: ['', Validators.required],
            address: ['', Validators.required],
            zip: ['', Validators.required],
            phonenumber: ['', Validators.required],
            emailaddress: ['', Validators.required]
        });
    }
    ngOnInit(): void {
        this._carService.getCustomers().subscribe((data: ICustomer) => this.customers = data);
    }

}

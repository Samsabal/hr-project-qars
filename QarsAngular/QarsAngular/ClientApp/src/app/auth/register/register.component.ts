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

    public username: "";
    public password: "";
    public givenname: "";
    public familyname: "";
    public countrycode: "";
    public city: "";
    public address: "";
    public zip: "";
    public phonenumber: "";
    public emailaddress: "";

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
    RegisterSubmit() {
        // adding the values to the public variables..
        this.username = this.customerForm.get('username').value;
        this.password = this.customerForm.get('password').value;
        this.givenname = this.customerForm.get('givenname').value;
        this.familyname = this.customerForm.get('familyname').value;
        this.countrycode = this.customerForm.get('countrycode').value;
        this.city = this.customerForm.get('city').value;
        this.address = this.customerForm.get('address').value;
        this.zip = this.customerForm.get('zip').value;
        this.phonenumber = this.customerForm.get('phonenumber').value;
        this.emailaddress = this.customerForm.get('emailaddress').value;
        // checking if everything is filled
        console.log(this.username);
    }

}

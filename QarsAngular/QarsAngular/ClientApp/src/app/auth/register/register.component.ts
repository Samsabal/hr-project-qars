import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Console } from 'console';
import { CarService } from 'src/app/cars.service';
import { ICustomer } from 'src/app/customers.model';
import { CustomerService } from 'src/app/customers.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})


export class RegisterComponent implements OnInit {

    public customerForm;

    public customers: any = [];
    public customer: ICustomer = {
        username: "",
        password: "",
        givenname: "",
        familyname: "",
        countrycode: "",
        city: "",
        address: "",
        zip: "",
        phonenumber: "",
        emailaddress: "",
    };
    public newCustomer: ICustomer = {
        username: "",
        password: "",
        givenname: "",
        familyname: "",
        countrycode: "",
        city: "",
        address: "",
        zip: "",
        phonenumber: "",
        emailaddress: "",
    };

    public username: string = "";
    public password: string = "";
    public givenname: string = "";
    public familyname: string = "";
    public countrycode: string = "";
    public city: string = "";
    public address: string = "";
    public zip: string = "";
    public phonenumber: string = "";
    public emailaddress: string = "";

    constructor(private fb: FormBuilder, private _carService: CarService, private _customerService: CustomerService) {
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
            emailaddress: ['', Validators.required],
            leeftijd: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._customerService.getCustomers().subscribe((data: ICustomer) => this.customers = data);
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
        console.log(this.username, this.password);
        this.newCustomer.username = this.username;
        this.newCustomer.password = this.password;
        this.newCustomer.givenname = this.givenname;
        this.newCustomer.familyname = this.familyname;
        this.newCustomer.countrycode = this.countrycode;
        this.newCustomer.city = this.city;
        this.newCustomer.zip = this.zip;
        this.newCustomer.phonenumber = this.phonenumber;
        this.newCustomer.emailaddress = this.emailaddress;
        if (this.checkCustomer(this.newCustomer)) {
            this.addCustomer(this.customer);
            alert("added customer");
        }

    }

    addCustomer(customer: ICustomer) {
        this._customerService.addCustomer(customer).subscribe((data: ICustomer) => this.customers.push(data));
    }

    checkCustomer(customer: ICustomer): boolean {
        this.newCustomer = null;
        this._customerService.getCustomer(customer.username, customer.password).subscribe((data: ICustomer) => this.newCustomer = data);
        if (this.newCustomer != null) {
            console.log("customer exits already");
            this.newCustomer = null;
            return false;
        } else {
            console.log("customer doesn't exist");
            return true;
        }
    }
}

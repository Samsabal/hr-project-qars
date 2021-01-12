import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Console } from 'console';
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
    public leeftijd: "";

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
            emailaddress: ['', Validators.required],
            leeftijd: ['', Validators.required]
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
        this.leeftijd = this.customerForm.get('leeftijd').value;
        // Verifying the user's age.
        let Datum = new Date() + ""; // the date of today as a string. 
        var SplitDatum = Datum.split(" ", 4);
        var ThisYear = Number(SplitDatum[3]); // 2021 -> as integer
        var CustomerDate = this.leeftijd.split("-", 2); // for example 14-05-2001
        var CustomersBirthYear = Number(CustomerDate[0]); // for example 2001 -> as integer
        var bool = ThisYear - CustomersBirthYear; 
        if ((ThisYear - CustomersBirthYear) > 18)
        {
            console.warn("Your account has been created."); 
        }
        else
        {
            console.warn("Your not 18+ yet."); 
        }

    }

}

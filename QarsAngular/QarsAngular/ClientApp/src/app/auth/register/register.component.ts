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

    public AgreeTermsAndPolicy: Boolean; 

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
        var CustomerDate = this.leeftijd.split("-", 3); // for example 14-05-2001
        var CustomersBirthYear = Number(CustomerDate[0]); // 2001 -> as integer 
        var CustomersBirthMonth = Number(CustomerDate[1]); // 05 -> may -> as integer
        var CustomersBirthDay = Number(CustomerDate[2]); // 14th may -> as integer
        var MonthsOfTheYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var ThisMonth = MonthsOfTheYear.findIndex(Month => Month === (SplitDatum[1])) + 1; // should be 1 -> January
        var ValidAge = false;
        // Writing if statement to check the user's age. 
        if ((ThisYear - CustomersBirthYear) > 18) // The user is older than 18 so no further steps needed.
        {
            ValidAge = true;
        }
        else if ((ThisYear - CustomersBirthYear) == 18 || (ThisYear - CustomersBirthYear) == 17) // The user could be 18 but also 17.
        {
            if (ThisMonth > CustomersBirthMonth) // Checking if todays month is past the user's month of birth.
            {
                ValidAge = true;
            }
            else if (ThisMonth == CustomersBirthMonth) // Todays Month is the same as the user's month of birth. 
            {
                if (Number(SplitDatum[2]) > CustomersBirthDay) // Checking if today is past the user's birthday.
                {
                    ValidAge = true;
                }
                else 
                {
                    console.warn('Invalid age, you have to be at least 18.');
                }
            }
            else // The user's month of birth isn't past todays month, so he the age is < 18.
            {
                console.warn("Invalid age, you have to be 18+.");
            }
        }
        else // The user has to wait atleast an year before he can rent our cars..
        {
            console.warn("Your not 18+ yet."); 
        }

        // The user has to accept or terms & policy to continue. 
        if (this.AgreeTermsAndPolicy == true && ValidAge == true)
        {
            //push account -> database.
            console.warn("Your account has been created!");
        }
        else if (ValidAge == false) // User is not 18 yet.
        {
            console.warn("You are not old enough to use our services.");
        }
        else // User didn't accept our policy and terms.
        {
            console.warn("You have to accept our policy and terms.");
            console.log("You have to accept our policy and terms.");
        }
    }

    TermsAndPolicy() 
    {
        this.AgreeTermsAndPolicy = true;
        console.log("The user agreed to our policy and terms, so he should have a valid Drivers License.");
    }

}

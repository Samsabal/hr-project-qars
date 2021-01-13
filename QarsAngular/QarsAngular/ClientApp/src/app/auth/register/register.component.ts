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
    public AgreeTermsAndPolicy: Boolean;
    public leeftijd: ""; 

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
        this.leeftijd = this.customerForm.get('leeftijd').value;

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
                    alert('Invalid age, you have to be at least 18.');
                }
            }
            else // The user's month of birth isn't past todays month, so he the age is < 18.
            {
                alert("Invalid age, you have to be 18+.");
            }
        }
        else // The user has to wait atleast an year before he can rent our cars..
        {
            alert("Your not 18+ yet."); 
        }

        // The user has to accept or terms & policy to continue. 
        if (this.AgreeTermsAndPolicy == true && ValidAge == true)
        {
            //push account -> database.
            alert("Your account has been created!");
        }
        else if (ValidAge == false) // User is not 18 yet.
        {
            alert("You are not old enough to use our services.");
        }
        else // User didn't accept our policy and terms.
        {
            alert("You have to accept our policy and terms.");
            console.log("You have to accept our policy and terms.");
        }
    }

    TermsAndPolicy() 
    {
        this.AgreeTermsAndPolicy = true;
        console.log("The user agreed to our policy and terms, so he should have a valid Drivers License.");
        alert("Our Policy And Terms: \nYou should be aware of the fact that when you agree to our policy and terms you also agree to this: \n* You are having a valid drivers license.\n* You are 18 years or older. \n* You are aware of our damage policy.\n-> We take pictures of the car before the customer is going to take the car of the pickuplocation.\nWhen the customer returns the car to the dropofflocation we are going to check it and when the car has damage.\nWe are going to check the insurance you took when renting the damaged car.\nIf the customer has all-risk insurance he is good to go after paying his own risk.\nIf the customer doesn't have all-risk insurance, we are obligated to make an estimation of the money that is needed to repare the car.\nYou can't leave before you paid the money for the damage repair.\n* You are aware that every speed fine will be sended to you. If you are the one that rented the car at the time the crime occured.");
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

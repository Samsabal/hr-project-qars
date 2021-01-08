import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})


export class RegisterComponent {

    constructor(private fb: FormBuilder) {
        let customerProfile = this.fb.group({
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

}

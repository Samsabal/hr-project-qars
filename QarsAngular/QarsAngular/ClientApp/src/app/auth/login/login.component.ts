import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'LoginComponent',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm;
  public email = "";
  public password = "";

  constructor(private _accountDetails: FormBuilder) {
    this.loginForm = this._accountDetails.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // Process checkout data here
    this.email.get('Email').value;
    this.password.get('Password').value;
    // this.loginForm.reset();

    console.warn('Uw gegevens zijn verstuurd!');
  }
   
}


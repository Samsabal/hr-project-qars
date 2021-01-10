import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'LoginComponent',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  onSubmit(loginData) {
    // Process checkout data here
    this.loginForm.reset();

    console.warn('Uw gegevens zijn verstuurd!', loginData);
  }
   
}


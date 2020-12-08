import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './login.component.html'
})
export class FetchDataComponent {
   
}

function login_details(email : string, password : string) {
  let psw = password;
  let mail = email;
  let check = false; 
  console.log(mail + password);
  if (password.length > 0 && email.length > 0){
    console.log('Correct credentials');
    check = true;
    return psw + mail + check;
  }
  else{
    console.log("Your email and Password both need to be filled in");
    return check;
  }
}

interface Person {
  firstname: string;
  lastname: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstname + " " + person.lastname;
}


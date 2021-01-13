import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // anti spam
  submitted: boolean = false; // tonen succes bericht
  isLoading: boolean = false; // sumbit knop niet klikbaar als die laadt
  responseMessage: string; // antwoord voor de gebruiker
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable(); // form uitschakelen om meerdere requests tegen tegaan
      var formData: any = new FormData();
      formData.append("name", this.form.get("name").value);
      formData.append("email", this.form.get("email").value);
      formData.append("message", this.form.get("message").value);
      this.isLoading = true; // async request versturen 
      this.submitted = false; // response bericht verstoppen
      this.http.post("https://script.google.com/macros/s/AKfycbyQsx-lN8M5I8ve5pk_gzvHZIUiT1M-oLvjbrW7muhPI4KrLvk5RtJy/exec", formData).subscribe(
        (response) => {
          // Kiezen van antwoord
          if (response["result"] == "success") {
            this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          } else {
            this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          }
          this.form.enable(); // opnieuw mail sturen mogelijk
          this.submitted = true; // tonen van de antwoord
          this.isLoading = false; // opnieuw mail kunnen sumbitten
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          this.form.enable(); // opnieuw mail sturen mogelijk
          this.submitted = true; // tonen van de antwoord
          this.isLoading = false; // opnieuw mail kunnen sumbitten
          console.log(error);
        }
      );
    }
  }
}


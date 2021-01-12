import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customers.service';
import { LoginComponent } from 'src/app/auth/login/login.component';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  

  public loggedIn: boolean = false;

  constructor(private cs: CustomerService) {
  }

  ngOnInit() {
    this.loggedIn = this.cs.localStorage_hasItem("user");
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

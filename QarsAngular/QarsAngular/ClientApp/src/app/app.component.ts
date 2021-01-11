import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app';

  public loggedIn: boolean = false;

  ngOnInit(){
    
  }
  
  checkLoggedIn() {
    if (this.loggedIn){
      
    }
    return this.loggedIn;
  }

}

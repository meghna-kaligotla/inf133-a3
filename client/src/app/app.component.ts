import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { HandtrackerComponent } from './pages/handtracker/handtracker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //openHand:boolean = false;
   openHand: boolean = false;
  //https://stackoverflow.com/questions/43159090/how-can-i-detect-service-variable-change-when-updated-from-another-component
  constructor() {
  }

  public login(){
    this.openHand = true;
    console.log("Attempting to log in");
    document.getElementById("openHand").innerHTML = "http://localhost:8888/login"
    // press button in html
  }
}

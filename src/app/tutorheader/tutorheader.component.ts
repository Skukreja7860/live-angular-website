import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tutorheader',
  templateUrl: './tutorheader.component.html',
  styleUrls: ['./tutorheader.component.css']
})
export class TutorheaderComponent implements OnInit {
  personname:string;
  constructor(private myrouter:Router) {
    this.myrouter.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    }
    )
   }

  ngOnInit(): void {
    console.log("Header NG Oninit");
    if (sessionStorage.getItem("pname") == null) {

      this.personname = "Guest";
    }
    else {

      this.personname = sessionStorage.getItem("pname");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-seekerheader',
  templateUrl: './seekerheader.component.html',
  styleUrls: ['./seekerheader.component.css']
})
export class SeekerheaderComponent implements OnInit {
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



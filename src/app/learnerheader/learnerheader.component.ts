import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-learnerheader',
  templateUrl: './learnerheader.component.html',
  styleUrls: ['./learnerheader.component.css']
})
export class LearnerheaderComponent implements OnInit {
  emailid:string;
  personname: string;
  
  constructor(private myrouter: Router,private myhttp:HttpClient) {
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
      this.emailid = sessionStorage.getItem("uname");
      this.personname = sessionStorage.getItem("pname");
    }
   
  }
  
}
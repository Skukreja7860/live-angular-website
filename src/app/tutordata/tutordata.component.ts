import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-tutordata',
  templateUrl: './tutordata.component.html',
  styleUrls: ['./tutordata.component.css']
})
export class TutordataComponent implements OnInit {
  tutordata:any[];
  email:string;
  name:string;
  phone:string;
  constructor(private myrouter: Router, private myhttp: HttpClient) {
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

      this.name = "Guest";
    }
    else {
      this.email = sessionStorage.getItem("uname");
      this.name = sessionStorage.getItem("pname");
      this.phone = sessionStorage.getItem("phoneno");
    }
    this.fetchtutordetails();
  }


 
  fetchtutordetails() {
    this.myhttp.get("http://localhost:3000/api/gettutordetails?email="+this.email, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            
          }
          else {
            this.tutordata=resp;
            
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

}

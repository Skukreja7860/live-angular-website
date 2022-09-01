import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-seekerdata',
  templateUrl: './seekerdata.component.html',
  styleUrls: ['./seekerdata.component.css']
})
export class SeekerdataComponent implements OnInit {


  seekerdata: any[];
  email: string;
  name: string;
  phone: string;
  constructor(private myrouter:Router, private myhttp:HttpClient) {
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
    this.fetchseekerdetails();
  }



  fetchseekerdetails() {
    this.myhttp.get("http://localhost:3000/api/getseekerdetails?email=" + this.email, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {
            this.seekerdata = resp;

          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

}
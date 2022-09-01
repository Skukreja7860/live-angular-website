import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
personname:string;
flag:boolean;
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
      this.flag = false;
      this.personname = "Guest";
    }
    else {
      this.flag = true;
      this.personname = sessionStorage.getItem("pname");
    }
  }

}

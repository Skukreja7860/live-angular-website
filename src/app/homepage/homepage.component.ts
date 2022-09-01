import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  search:string;
  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }
onsearch()
{
    this.myrouter.navigate(["/searchresults"], {queryParams:{s:this.search}});
  }

}

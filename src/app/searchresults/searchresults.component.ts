import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  searchval: string;
  msg: string;
  allcourse: any[];
  flag: boolean;
  constructor(private myroute: ActivatedRoute, private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.myroute.queryParams.subscribe(
      {
        next: (resp) => {
          this.searchval = resp["s"];
          this.searchcourse();
        }
      }
    )
  }

  searchcourse() {
    this.myhttp.get("http://localhost:3000/api/searchcoursebyname?s=" + this.searchval, { responseType: "json" }).subscribe(
      (response: []) => {
        if (response.length > 0) {
          this.flag = true;
          this.allcourse = response;

        }
        else {
          this.flag = false;
          this.msg = "No courses found";
        }

      },
      (error) => {
        this.msg = error;
      }
    )
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategorypaid',
  templateUrl: './subcategorypaid.component.html',
  styleUrls: ['./subcategorypaid.component.css']
})
export class SubcategorypaidComponent implements OnInit {

  flag: boolean;
  msg: string;
  coursedata: any[];
  catid: string;

  constructor(private myhttp: HttpClient, private myrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.catid = resp["catid"];
          this.fetchcoursedata();
        },
        error: (err) => {
          this.msg = err;
        }
      })
  }
  fetchcoursedata() {
    this.myhttp.get("http://localhost:3000/api/getcoursedatabycatid?catid=" + this.catid, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
            this.msg = "No Sub Categories Found";
          }
          else {
            this.flag = true;
            this.coursedata = resp;
           

          }

        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }



}

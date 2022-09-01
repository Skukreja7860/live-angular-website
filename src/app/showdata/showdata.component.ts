import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  subcatid: string;
  msg: string;
  flag: boolean;
  data: any[];
  constructor(private myhttp: HttpClient, private myrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.subcatid = resp["subcatid"];
          this.fetchdata();
        },
        error: (err) => {
          this.msg = err;
        }
      })
  }
  fetchdata() {
    this.myhttp.get("http://localhost:3000/api/getdatabysubcatid?scid=" + this.subcatid, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
            this.msg = "No Products Found";
          }
          else {
            this.flag = true;
            this.data = resp;
            this.msg = null;
          }

        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

}

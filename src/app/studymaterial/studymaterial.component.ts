import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studymaterial',
  templateUrl: './studymaterial.component.html',
  styleUrls: ['./studymaterial.component.css']
})
export class StudymaterialComponent implements OnInit {

  allcat: any[];
  flag: boolean;
  msg: string;
  allfiles:any[];
  constructor(private myhttp: HttpClient) {
  }

  ngOnInit(): void {this.fetchallcat();
    this.fetchallfile();
  }
  fetchallcat() {
    this.myhttp.get("http://localhost:3000/api/getallcat", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
            this.msg = "No Categories Found";
          }
          else {
            this.flag = true;
            this.allcat = resp;
            this.msg = null;
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
  fetchallfile() {
    this.myhttp.get("http://localhost:3000/api/getfiles", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
          }
          else {
            this.flag = true;
            this.allfiles = resp;

          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewmsg',
  templateUrl: './reviewmsg.component.html',
  styleUrls: ['./reviewmsg.component.css']
})
export class ReviewmsgComponent implements OnInit {

  msg: string;
  allreviews: string[];
  constructor(private myhttp:HttpClient) { }

  ngOnInit(): void {
    this.fetchallreviews();
  }
  fetchallreviews() {
    this.myhttp.get("http://localhost:3000/api/reviewmsg", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.msg = "No Reviews Found";

          }
          else {
            this.allreviews = resp;
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
}

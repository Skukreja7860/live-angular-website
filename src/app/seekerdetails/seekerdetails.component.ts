import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seekerdetails',
  templateUrl: './seekerdetails.component.html',
  styleUrls: ['./seekerdetails.component.css']
})
export class SeekerdetailsComponent implements OnInit {

  msg: string;
  allmembs: string[];
  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.fetchallseekermembers();
  }
  fetchallseekermembers() {
    this.myhttp.get("http://localhost:3000/api/allseekermembers", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.msg = "No Members Found";

          }
          else {
            this.allmembs = resp;
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
}



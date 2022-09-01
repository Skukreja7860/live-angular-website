import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learnerdetails',
  templateUrl: './learnerdetails.component.html',
  styleUrls: ['./learnerdetails.component.css']
})
export class LearnerdetailsComponent implements OnInit {

  msg: string;
  allmembs: string[];
  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.fetchalllearnermembers();
  }
  fetchalllearnermembers() {
    this.myhttp.get("http://localhost:3000/api/alllearnermembers", { responseType: "json" }).subscribe(
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



import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutors2',
  templateUrl: './tutors2.component.html',
  styleUrls: ['./tutors2.component.css']
})
export class Tutors2Component implements OnInit {

  tutordata2: any[];
  constructor(private myhttp: HttpClient) { this.fetchtutordetails(); }

  ngOnInit(): void {
  }
  fetchtutordetails() {
    this.myhttp.get("http://localhost:3000/api/getcollegedata", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {
            this.tutordata2 = resp;

          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )

  }
}

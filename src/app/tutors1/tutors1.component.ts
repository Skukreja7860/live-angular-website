import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutors1',
  templateUrl: './tutors1.component.html',
  styleUrls: ['./tutors1.component.css']
})
export class Tutors1Component implements OnInit {
  tutordata1: any[];
  constructor(private myhttp: HttpClient) { this.fetchtutordetails(); }

  ngOnInit(): void {
  }
  fetchtutordetails() {
    this.myhttp.get("http://localhost:3000/api/getmiddledata", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {
            this.tutordata1 = resp;
            console.log(this.tutordata1);
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )

  }
}

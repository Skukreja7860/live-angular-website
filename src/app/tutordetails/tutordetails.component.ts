import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutordetails',
  templateUrl: './tutordetails.component.html',
  styleUrls: ['./tutordetails.component.css']
})
export class TutordetailsComponent implements OnInit {

  msg: string;
  allmembs: string[];
  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.fetchalltutormembers();
  }
  fetchalltutormembers() {
    this.myhttp.get("http://localhost:3000/api/alltutormembers", { responseType: "json" }).subscribe(
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



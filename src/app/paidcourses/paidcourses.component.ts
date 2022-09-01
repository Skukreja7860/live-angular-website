import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paidcourses',
  templateUrl: './paidcourses.component.html',
  styleUrls: ['./paidcourses.component.css']
})
export class PaidcoursesComponent implements OnInit {
  allcoursecat: any[];
  flag: boolean;
  msg: string;
  constructor(private myhttp: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchallcourse();
  }
  fetchallcourse() {

    this.myhttp.get("http://localhost:3000/api/getallcoursecat", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
            this.msg = "No Categories Found";
          }
          else {
            this.flag = true;
            this.allcoursecat = resp;
            console.log(this.allcoursecat);            
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

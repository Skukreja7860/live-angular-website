import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freecourses',
  templateUrl: './freecourses.component.html',
  styleUrls: ['./freecourses.component.css']
})
export class FreecoursesComponent implements OnInit {

  allfreecourse: any[];
  flag: boolean;
  msg: string;
  constructor(private myhttp: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchallcourse();
  }
  fetchallcourse() {
 
    this.myhttp.get("http://localhost:3000/api/getallfreecourse",{ responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
            this.msg = "No Categories Found";
          }
          else {
            this.flag = true;
            this.allfreecourse = resp;
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

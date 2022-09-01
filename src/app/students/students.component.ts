import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  tutordata:any[];
  enroll:any[];
  msg:String;
  flag:boolean;
  constructor(private myhttp: HttpClient) {
    
   
  }

  ngOnInit(): void {this.fetchtutordetails();
  }
  fetchtutordetails() {
    this.myhttp.get("http://localhost:3000/api/gettutordetails?email=" + sessionStorage.getItem("uname"), { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {
            this.tutordata = resp;
            this.fetchenrolldetails();
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
  fetchenrolldetails() {
    this.myhttp.get("http://localhost:3000/api/getenrolldetails?id=" + this.tutordata[0]._id, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
          this.msg="No student enrolled";
          }
          else {
            this.flag=true;
            this.enroll= resp;
          
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
}


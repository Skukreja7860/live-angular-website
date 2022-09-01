import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacherdetl',
  templateUrl: './teacherdetl.component.html',
  styleUrls: ['./teacherdetl.component.css']
})
export class TeacherdetlComponent implements OnInit {

  tutordetails: any[];
  tutorid;
  msg:string;
  flag:boolean;
  flag2:boolean=true;
  constructor(private myhttp: HttpClient, private myrouter:ActivatedRoute,private myrouting:Router) {  }

  ngOnInit(): void {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.tutorid = resp["tid"];
          this.fetchtutordetails();
        },
        error: (err) => {
          this.msg = err;
          console.log(err);
        }
      })
  }
  fetchtutordetails() {
    this.myhttp.get("http://localhost:3000/api/getdetailsoftutor?tid="+this.tutorid, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {
            this.tutordetails = resp;
            console.log(this.tutordetails);

          }
        },
        error: (err) => {
          console.log(err);
        }
      }
    )

  }
  onview() {
    if(sessionStorage.getItem("uname")==null){
    alert("Please login to view");
    this.myrouting.navigateByUrl("/login");
    this.flag=false;
  }
  else{
    this.flag=true;
    this.flag2=false;
  }
}
startnow(){
  this.myrouting.navigate(["/startnow"], { queryParams: { tid: this.tutorid } });
}
}

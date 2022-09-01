import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managecoursevideos',
  templateUrl: './managecoursevideos.component.html',
  styleUrls: ['./managecoursevideos.component.css']
})
export class ManagecoursevideosComponent implements OnInit {
  coursename: string;
  headingname:string;
  headingid:string;
  coursepath:string;
  msg: string;
  allvideos:any[];
  duration:string;
  flag: boolean;
  
  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.fetchallvideos();
  }

  onaddcv() {
    var mydata ={duration:this.duration,coursename:this.coursename,headingname:this.headingname,headingid:this.headingid,coursepath:this.coursepath}
   
    this.myhttp.post("http://localhost:3000/api/addcoursevideos", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          this.msg = resp;
          this.fetchallvideos();
          this.headingid=null;
          this.headingname=null;
          this.coursepath=null;
          this.coursename=null;
          this.duration=null;
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  fetchallvideos() {
    this.myhttp.get("http://localhost:3000/api/getallvideos", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
          }
          else {
            this.flag = true;
            this.allvideos = resp;

          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

  onpathdel(pathid) {
    var userresp: boolean = confirm("Are you sure to delete?");
    if (userresp == true) {
      this.myhttp.delete("http://localhost:3000/api/delpath?pid=" + pathid, { responseType: "json" }).subscribe(
        {
          next: (resp) => {
            if (resp["deletedCount"] == 1) {
              alert("Course Videos deleted successfully");
              this.fetchallvideos();
            }
          },
          error: (err) => {
            this.msg = err;
          }
        }
      )
    }
  }
  
}


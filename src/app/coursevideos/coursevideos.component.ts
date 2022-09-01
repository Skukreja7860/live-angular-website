import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coursevideos',
  templateUrl: './coursevideos.component.html',
  styleUrls: ['./coursevideos.component.css']
})
export class CoursevideosComponent implements OnInit {

  name: string;
  email: string;
  comment: string;
  msg: string;
  result: string;
  courselearn;
  coursedes;
  coursesyl;
  allcourse: any[];
  pid;
  videopath;
allvideos:any[];
  constructor(private myhttp: HttpClient, private myrouter: ActivatedRoute, private route: Router) {
  }



  ngOnInit(): void {
   this.fetchallvideos();
  }
  fetchallvideos() {
    this.myhttp.get("http://localhost:3000/api/getallvideos?coursename="+"Mean Stack", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
           
          }
          else {
            
            this.allvideos = resp;
            console.log(this.allvideos);
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
 startcourse()
 {
   this.route.navigateByUrl("/cvdetails")
 }
  fetchvideopath() {
    this.myhttp.get("http://localhost:3000/api/getallvideos?coursename=" + "Mean Stack", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {

this.videopath=resp[0].coursepath;
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
}



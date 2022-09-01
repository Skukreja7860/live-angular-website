import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {
  tutordata:any[];
  constructor(private myhttp:HttpClient,private myrouter:Router) { this.fetchtutordetails();}

  ngOnInit(): void {
  }
 fetchtutordetails()
 {
   this.myhttp.get("http://localhost:3000/api/getelementarydata", { responseType: "json" }).subscribe(
     {
       next: (resp: any[]) => {
         if (resp.length == 0) {

         }
         else {
           this.tutordata = resp;
          
       }},
       error: (err) => {
         alert(err);
       }
     }
   )
 
 }
 
}

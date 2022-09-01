import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  gender:string;
  pname:string;
  contact:string;
  email:string;
  country:string;
  meeting:string;
  date1:string;
  date2:string;
  date3:string;
  msg:string;
  tutorid:string;
  tutordetails:any[];
  tutorname:string;
  tutorsubject:string;
  constructor(private myrouter:Router,private myhttp:HttpClient,private router:ActivatedRoute) { 
    this.router.queryParams.subscribe(
      {
        next: (resp) => {
          this.tutorid= resp["tid"];
         this.fetchtutordetails();
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  fetchtutordetails() {
    this.myhttp.get("http://localhost:3000/api/getdetailsoftutor?tid=" + this.tutorid, { responseType: "json" }).subscribe(
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
  ngOnInit(): void {
  }
  onbook(){
   var  mydata={
     tutorname:this.tutordetails[0].name,
     tutorsubject:this.tutordetails[0].subject,
      name:this.pname,
      email:this.email,
      contact:this.contact,
      gender:this.gender,
      country:this.country,
      meeting:this.meeting,
      date1:this.date1,
    date2:this.date2,
    date3:this.date3}
    
    
     this.myhttp.post("http://localhost:3000/api/book", mydata, { responseType: "text" }).subscribe(
       {
         next: (resp) => {
         this.msg=resp;
          alert(this.msg);  
           this.myrouter.navigateByUrl("/thanku")
           
         },
         error: (err) => {
           this.msg = err;
         }
       }
     )

    
  }
}

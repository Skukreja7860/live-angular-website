import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  name:string;
  email:string;
  rate:string;
  suggestion:string;
result:string;
  constructor(private myhttp:HttpClient,private myroute:Router) { }

  ngOnInit(): void {
  }

  onclick(form)
  {
    if(this.rate!=null){
    if (form.valid == true) {
      var mydata = { name: this.name, email: this.email, rate: this.rate,suggestion:this.suggestion }
      this.myhttp.post("http://localhost:3000/api/feedback", mydata, { responseType: "text" }).subscribe(
        {
          next: (resp) => {
            this.result = resp;
            alert(this.result);
            this.myroute.navigateByUrl("/homepage");
          },
          error: (err) => { this.result = err; }
        })
    }
    else {
      alert("Please enter details");
    }
  }

else{
  alert("please rate our website");
  
}
  }
}

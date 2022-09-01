import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-startnow',
  templateUrl: './startnow.component.html',
  styleUrls: ['./startnow.component.css']
})
export class StartnowComponent implements OnInit {

  name:string;
  email:string;
  phone:string;
  
  
  cardno: string;
  rate:number=0;
  poption: string = "";
  hname: string;
  coname: string = "";
  exp: string;
  cvv: string;
  msg: string;
  flag: boolean;
  flag2: boolean;
  country: string = "";
  state: string = "";
  tutorid:string;
  tutordetails:any[];
  totalamt:number=0;
  hours:number;
  months:number;
amt:number;
  constructor(private myhttp: HttpClient, private myrouter: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.tutorid = resp["tid"];
          this.fetchtutordetails();
        },
        error: (err) => {
          this.msg = err;
        }
      })
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




  onpayment() {
    this.amt=this.rate*this.hours*30;
    this.totalamt=this.amt*this.months;
    alert("Rs."+this.totalamt);
    var userresp: boolean = confirm("Are you sure to make payment?");
    if (userresp == true) {
      if (this.poption == "Pay with Netbanking") { }
    else {
      var mydata = {name:this.name,email:this.email,totalamt:this.totalamt,phone:this.phone, country:this.country, state: this.state, rate: this.rate,hours:this.hours,months:this.months,potion:this.poption, cardno: this.cardno, hname: this.hname, coname: this.coname, expiry: this.exp, cvv: this.cvv,tutorName:this.tutordetails[0].name,tutorid:this.tutorid,subject:this.tutordetails[0].subject };
     }
      this.myhttp.post("http://localhost:3000/api/enrollstudents", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          if (resp == "done") {
           this.route.navigateByUrl("/thanku");
          }
          else {
            this.msg = "Error while making payment, try again";
          }
        },
        error: (err) => {
          this.msg = err;
          console.log(err);
        }
      }
    )
    }}



  onpmode() {
    if (this.poption == "Pay with Netbanking") {
      this.flag2 = true;
      this.flag=false;
    }
    else if (this.poption == "Credit Card / Debit Card") {
      this.flag = true;
      this.flag2=false;
    }
    else {
      this.flag2 = false;
      this.flag = false;
    }

  }

}


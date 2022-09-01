import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  saddr: string;
  cardno: string;
  poption: string = "";
  hname: string;
  coname: string = "";
  exp: string;
  cvv: string;
  msg: string;
  flag: boolean;
  flag2:boolean;
  country:string="";
  state:string="";
  constructor(private myhttp: HttpClient, private myrouter: Router) { }

  ngOnInit(): void {
  }
  onpayment() {
    
        var mydata = { country:"India",state:this.state, pmode: this.poption, cardno: this.cardno, hname: this.hname, coname: this.coname, expiry: this.exp, cvv: this.cvv, username: sessionStorage.getItem("uname"), billamt: sessionStorage.getItem("billamt"), status: "Paid, Waiting for confirmation" };

    this.myhttp.post("http://localhost:3000/api/saveorder", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          if (resp == "done") {
            this.myrouter.navigateByUrl("/ordersummary");
          }
          else {
            this.msg = "Error while making payment, try again";
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )

  }
  onpmode() {
    if (this.poption == "Pay with Netbanking") {
      this.flag2 = true;
      this.flag=false;
    }
    else if (this.poption == "Credit Card / Debit Card") {
      this.flag = true;
      this.flag2=false;
    }
    else{
      this.flag2=false;
      this.flag=false;
    }
   
  }

}

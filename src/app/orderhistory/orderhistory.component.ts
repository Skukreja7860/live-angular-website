import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
  flag:boolean;
  orderlist: any[];
  msg: string;
  enrolllist:any[];
  msg2:string;
  flag2:boolean;
  constructor(private myhttp: HttpClient,private router:Router) {
    this.fetchorders();
    this.fetchenroll();
  }

  ngOnInit(): void {
  }
  fetchorders() {
    this.myhttp.get("http://localhost:3000/api/getorderdetails?username=" + sessionStorage.getItem("uname"), { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.msg = "No orders found";
          }
          else {
            this.flag=true;
            this.orderlist = resp;
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }


  fetchenroll() {
    this.myhttp.get("http://localhost:3000/api/freeenroll?username=" + sessionStorage.getItem("uname"), { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.msg2= "No orders found";
          }
          else {
            
            this.flag2=true;
            this.enrolllist = resp;
            
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  statusdone(status)
  {
    if(status=="Done")
    this.router.navigateByUrl("/coursevideos");
  }


  enrolldone(status) {
    if (status == "Done")
      this.router.navigateByUrl("/coursevideos");
  }
}

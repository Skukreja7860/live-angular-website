import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  orderlist: any[];
  msg: string;
  msg2:string;
  enrolllist:any[];
  constructor(private myhttp: HttpClient) {
    this.fetchorders();
    this.fetchenroll();
  }

  ngOnInit(): void {
  }
  fetchorders() {
    this.myhttp.get("http://localhost:3000/api/getallorders", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.msg = "No orders found";
          }
          else {
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
            this.msg2 = "No orders found";
          }
          else {

            
            this.enrolllist = resp;

          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
}


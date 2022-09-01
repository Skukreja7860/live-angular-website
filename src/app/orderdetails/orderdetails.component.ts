import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  orderdet: any[];
  msg: string;
  orderid: string;
  flag:boolean;
  constructor(private myhttp: HttpClient, private myrouter: ActivatedRoute) {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.orderid = resp["oid"];
          this.fetchordersdet();
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }

  ngOnInit(): void {
  }
  fetchordersdet() {
    this.myhttp.get("http://localhost:3000/api/fetchorderdetails?orderid=" + this.orderid, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.msg = "No details found";
          }
          else {
            this.flag=true;
            this.orderdet = resp;
           
            
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
}


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent implements OnInit {
msg:string;
 newstatus:string;
  status:string="";
 orderid:string;

  constructor(private myhttp: HttpClient, private myrouter: ActivatedRoute,private myrouting:Router) {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.orderid = resp["oid"];
         
          this.fetchorders();
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
  ngOnInit(): void {
  }
onupdate() {
  alert(this.status);
    var mydata={orderid:this.orderid,status:this.status};
    this.myhttp.put("http://localhost:3000/api/updatestatus", mydata,{responseType:"json"}).subscribe(
      {
        next: (resp) => {
          if (resp["nModified"] == 1) {
            this.msg = " Updated Successfully";
            this.myrouting.navigateByUrl("/orderlist");
          }
          else {
            this.msg = " Not updated";
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  fetchorders() {
    this.myhttp.get("http://localhost:3000/api/getallordersbyid?id"+this.orderid, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.msg = "No orders found";
          }
          else {
            this.status = resp[0].status;
           }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }

}

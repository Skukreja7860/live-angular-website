import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestatus2',
  templateUrl: './updatestatus2.component.html',
  styleUrls: ['./updatestatus2.component.css']
})
export class Updatestatus2Component implements OnInit {

  msg: string;
  newstatus: string;
  status: string ;
  courseid: string;

  constructor(private myhttp: HttpClient, private myrouter: ActivatedRoute, private myrouting: Router) {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          
          this.courseid=resp["cid"];
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
    var mydata = { id: this.courseid, status: this.status };
    this.myhttp.put("http://localhost:3000/api/updatestatus2", mydata, { responseType: "json" }).subscribe(
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
    this.myhttp.get("http://localhost:3000/api/getfreeenrolldatabyid?id" + this.courseid, { responseType: "json" }).subscribe(
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

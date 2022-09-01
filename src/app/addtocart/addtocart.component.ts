import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  cartdata: any[];
  msg: string;
  flag: boolean;
  gtotal: number = 0;
  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.fetchcart();
  }

  fetchcart() {
    this.myhttp.get("http://localhost:3000/api/getcart?email=" + sessionStorage.getItem("uname"), { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
            this.msg = "No courses added in cart";
          }
          else {
            this.flag = true;
            this.cartdata = resp;

            for (var i = 0; i < this.cartdata.length; i++) {
              
              this.gtotal +=Number( this.cartdata[i].courserate.match(/\d+/));
            }
            sessionStorage.setItem("billamt", this.gtotal.toString());
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  oncatdel(catid) {
    var userresp: boolean = confirm("Are you sure to delete?");
    if (userresp == true) {
      this.myhttp.delete("http://localhost:3000/api/delcart?cid=" + catid, { responseType: "json" }).subscribe(
        {
          next: (resp) => {
            if (resp["deletedCount"] == 1) {
              alert("Course in cart deleted successfully");
              this.fetchcart();
            }
          },
          error: (err) => {
            this.msg = err;
          }
        }
      )
    }
  }
}

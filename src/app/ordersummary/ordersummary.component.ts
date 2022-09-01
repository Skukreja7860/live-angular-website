import { HttpClient } from '@angular/common/http';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {
  msg: string;
  orderdetails: any[];
  cartitems: any[];
  orderproducts:any[]=[];
  constructor(private myhttp: HttpClient,private router:Router) {

    this.fetchorderdetails();
    
  }
  fetchorderdetails() {
    this.myhttp.get("http://localhost:3000/api/getorderdetails?username=" + sessionStorage.getItem("uname"), { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          this.orderdetails = resp;
          console.log(this.orderdetails);
          this.fetchcart();
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  

  fetchcart() {
    this.myhttp.get("http://localhost:3000/api/getcart?email=" + sessionStorage.getItem("uname"), { responseType: "json" }).subscribe(
      {
        next: (response: any[]) => {
          if (response.length > 0) {
            this.cartitems = response;
            
           this.orderitems();
          }
          else {
            this.msg = "No records found";
          }
        },
        error: (error) => {
          this.msg = error;
        }
      }

    )
  }
  orderitems() {
    for (let x =0; x < this.cartitems.length; x++) {
      let vals ={ orderid: this.orderdetails[0]._id, courseid: this.cartitems[x]["courseid"], coursename: this.cartitems[x]["coursename"], courserate: this.cartitems[x]["courserate"],coursepic: this.cartitems[x]["coursepic"], username: sessionStorage.getItem("uname") }
       this.orderproducts.push(vals);
       
    }
    this.myhttp.post("http://localhost:3000/api/orderitems", this.orderproducts, { responseType: "text" }).subscribe(
      (response) => {
        this.cartdel();
       
      },
      (error) => {
        this.msg = error;
      }
    )
  }


  
  cartdel() {
    this.myhttp.delete("http://localhost:3000/api/emptycart?un=" + sessionStorage.getItem("uname"), { responseType: "text" }).subscribe(
      (response) => {
console.log(response);
      },
      (error) => {
        this.msg = error;
      }
    )
  }
  ngOnInit(): void {
  }
checkstatus(){
 this.router.navigateByUrl("/orderhistory")
}
}

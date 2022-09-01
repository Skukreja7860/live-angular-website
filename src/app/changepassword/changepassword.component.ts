import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  currpass:string;
  newpass:string;
  cnewpass:string;
  msg:string;
  constructor(private myhttp:HttpClient,private myroute:Router) { }

  ngOnInit(): void {
  }

  onpasschange()
  {
    if (this.newpass == this.cnewpass) {
      var mydata = {email: sessionStorage.getItem("uname"), cpass: this.currpass, newp: this.newpass };
      this.myhttp.put("http://localhost:3000/api/changepass", mydata, { responseType: "json" }).subscribe(
        {
          next:(resp)=>{
            if (resp["nModified"] == 1){
             alert( "Password changed successfully");
              setTimeout("alert('Please login again to continue')",1000);
              this.myroute.navigateByUrl("/logout");
             
              
            

              
            }
            else{
              this.msg = "Current Password Incorrect";
            }
          },
          error: (err) => {
            this.msg = err;
          }
        }
      )
    }
    else {
      this.msg = "New Password's doesn't match";
    }
  }
}

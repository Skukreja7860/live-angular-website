import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {
  email:string;
  msg:string;
  name:string;
  flag:boolean;
  phone:string;
  constructor(private myhttp:HttpClient) { }

  ngOnInit(): void {
  }
  onsearch(myform){
    if(myform.valid==true){
      this.myhttp.get("http://localhost:3000/api/searchuser?email="+this.email,{ responseType: "json" }).subscribe(
        {
          next:(resp:any[])=>{
            if(resp.length==0)
            {
              this.msg="Search Not Found";
              this.flag=false;
            }
            else{
              this.msg=null;
              this.flag=true;
              this.name=resp[0].uname;
              this.phone=resp[0].phone;
            }},
          error:(err)=>
          {
            this.msg=err;
          }
        }
      )}}}


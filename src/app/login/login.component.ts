import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { updateLanguageServiceSourceFile } from 'typescript';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  email:string;
  terms:boolean;
  pass:string;
  cpass:string;
  person:string;
  msg:string;
  tab:string;
  phone:string;
  emailid:string;
  password:string;
  constructor( private myhttp:HttpClient,private myroute:Router) { }

  ngOnInit(): void {
  }
onsignup(myform)
{
  if(myform.valid==true){
    if(this.terms==true){
    var mydata={person:this.person,uname:this.uname,email:this.email,pass:this.pass,phone:this.phone}
    this.myhttp.post("http://localhost:3000/api/signup", mydata, {responseType:"text"}).subscribe(
      {next:(resp)=>
      {this.msg=resp;
      
       this.myroute.navigateByUrl("/homepage");
        alert(this.msg);
    },
      error:(err)=>
      {this.msg=err;}
      })}}
  else{
    alert("Please enter valid details ");
  }
}
onnext()
{
  if(this.person==null)
   alert("please choose any one option");
  else
  {
    this.tab="tab-3";
   
  }}
  onlogin()
  {
    this.myhttp.get("http://localhost:3000/api/login?email="+this.emailid+"&pass="+this.password,{responseType:"json"}).subscribe(
      {
        next:(resp:any[])=>
        {
          if(resp.length==0)
            {alert("Invalid username and password");}
           else
          {
            sessionStorage.setItem("pname", resp[0].uname);
            sessionStorage.setItem("uname", resp[0].email);
            sessionStorage.setItem("utype", resp[0].person);
            sessionStorage.setItem("phoneno",resp[0].phone); 
            this.myroute.navigateByUrl("/homepage");
           
          
        
        }},
      
        error:(err)=>{
          alert(err);
        }
      
    }
    )
    }
}

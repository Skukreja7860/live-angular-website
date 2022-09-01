import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tutoredit',
  templateUrl: './tutoredit.component.html',
  styleUrls: ['./tutoredit.component.css']
})
export class TutoreditComponent implements OnInit {
  name:string;
  gender:string;
  address:string;
 level:string;
 subject:string;
  qualification:string;
  college:string;
  country:string;
  state:string;
  dob:string;
  bio:string;
  skills:string;
  experience:string;
  email:string;
  profile:File;
  msg:string;
  one2one:string;
  group8:string;
  group12:string;
  
  phone:string;
  constructor(private myrouter: Router, private myhttp: HttpClient) {
    this.myrouter.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    }
    )
  }

  ngOnInit(): void {
    console.log("Header NG Oninit");
    if (sessionStorage.getItem("pname") == null) {

      this.name = "Guest";
    }
    else {
      this.email = sessionStorage.getItem("uname");
      this.name = sessionStorage.getItem("pname");
      this.phone= sessionStorage.getItem("phoneno");
    }

  }

  fileselected(evt)
  {
    this.profile = evt.target.files[0];
  }
  onsave(){
    var data=new FormData();
    if(this.profile!=null){
    data.append("name",this.name);
    data.append("email", this.email);
    data.append("gender", this.gender);
    data.append("qualification", this.qualification);
    data.append("contact", this.phone);
    data.append("clg", this.college);
    data.append("dob", this.dob);
    data.append("address", this.address);
    data.append("country", this.country);
    data.append("state", this.state);
    data.append("about", this.bio);
    data.append("skills", this.skills);
    data.append("experience", this.experience);
    data.append("userpic",this.profile);
    data.append("subject",this.subject);
  data.append("level",this.level)
  data.append("one2one",this.one2one);
  data.append("group8",this.group8);
  data.append("group12",this.group12);}
    else{
      data.append("name", this.name);
      data.append("email", this.email);
      data.append("gender", this.gender);
      data.append("qualification", this.qualification);
      data.append("contact", this.phone);
      data.append("clg", this.college);
      data.append("dob", this.dob);
      data.append("address", this.address);
      data.append("country", this.country);
      data.append("state", this.state);
      data.append("about", this.bio);
      data.append("skills", this.skills);
      data.append("experience", this.experience);
      data.append("subject", this.subject);
      data.append("level",this.level);
      data.append("one2one", this.one2one);
      data.append("group8", this.group8);
      data.append("group12", this.group12);
    
    }
    this.myhttp.post("http://localhost:3000/api/tutoredit",data,{responseType:"text"}).subscribe(
      {
        next:(resp)=>
        {
          this.msg=resp;
          alert(this.msg);
          this.myrouter.navigateByUrl("/tutordata");
        },
        error:(err)=>
        {
          this.msg=err;
        }
      }
    )
  }
  oncancel(){
    this.myrouter.navigateByUrl("/tutordata");
  }

}

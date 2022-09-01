import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tutorupdate',
  templateUrl: './tutorupdate.component.html',
  styleUrls: ['./tutorupdate.component.css']
})
export class TutorupdateComponent implements OnInit {
  email:string;
  name:string;
  emailid:string;
  bio:string;
  dob:string;
  address:string;
  qualification:string;
  country:string;
  state:string;
  skills:string;
  experience:string;
  pic:File;
  college:string;
  contact:string;
  gender:string;
  msg:string;
  profile:string;
  subject:string;
  level:string;
  one2one:string;
  group8:string;
  group12:string;
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
    if (sessionStorage.getItem("uname") == null) {

      
    }
    else {
      this.email = sessionStorage.getItem("uname");
     this.fetchtutordetails();
    }

  }
  fileselected(evt)
  {
    this.pic = evt.target.files[0];
  }
  fetchtutordetails() {
    this.myhttp.get("http://localhost:3000/api/gettutordetails?email=" + this.email, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            
          }
          else {
            this.name = resp[0].name;
            this.experience = resp[0].experience;
            this.skills=resp[0].skills;
            this.bio = resp[0].bio;
            this.dob = resp[0].dob;
            this.state = resp[0].state;
            this.country = resp[0].country;
            this.college = resp[0].college;
            this.qualification = resp[0].qualification;
            this.emailid = resp[0].email;
            this.address = resp[0].address;
            this.contact = resp[0].contact;
            this.gender = resp[0].gender;
            this.profile=resp[0].picture;
            this.subject=resp[0].subject;
            this.level=resp[0].level;
            this.one2one=resp[0].one2one;
            this.group8=resp[0].group8;
            this.group12=resp[0].group12;
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
onupdate()
{
 
  var data = new FormData();
  if (this.pic != null) {
    data.append("name", this.name);
    data.append("email", this.emailid);
    data.append("gender", this.gender);
    data.append("qualification", this.qualification);
    data.append("contact", this.contact);
    data.append("clg", this.college);
    data.append("dob", this.dob);
    data.append("address", this.address);
    data.append("country", this.country);
    data.append("state", this.state);
    data.append("about", this.bio);
    data.append("skills", this.skills);
    data.append("experience", this.experience);
    data.append("userpic", this.pic);
    data.append("subject",this.subject);
    data.append("level",this.level);
    data.append("one2one", this.one2one);
    data.append("group8", this.group8);
    data.append("group12", this.group12);
  }
  else {
    data.append("name", this.name);
    data.append("email", this.emailid);
    data.append("gender", this.gender);
    data.append("qualification", this.qualification);
    data.append("contact", this.contact);
    data.append("clg", this.college);
    data.append("dob", this.dob);
    data.append("address", this.address);
    data.append("country", this.country);
    data.append("state", this.state);
    data.append("about", this.bio);
    data.append("skills", this.skills);
    data.append("experience", this.experience);
    data.append("oldpic",this.profile);
    data.append("subject",this.subject);
    data.append("level", this.level);
    data.append("one2one", this.one2one);
    data.append("group8", this.group8);
    data.append("group12", this.group12);
  }
  this.myhttp.put("http://localhost:3000/api/tutorupdate", data, { responseType: "json" }).subscribe(
    {
      next: (resp) => {
        if (resp["nModified"] == 1) {
          this.msg = "Profile Updated Successfully";
          alert(this.msg);
          this.myrouter.navigateByUrl("/tutordata");
        }
        else {
          this.msg = "Profile not updated Successfully";
          alert(this.msg);
        }
      },
      error: (err) => {
        this.msg = err;
      }
    }
  )
}
oncancel()
{
  this.myrouter.navigateByUrl("/tutordata");

}
}

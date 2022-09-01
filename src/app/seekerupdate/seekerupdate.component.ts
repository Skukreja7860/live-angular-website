import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-seekerupdate',
  templateUrl: './seekerupdate.component.html',
  styleUrls: ['./seekerupdate.component.css']
})
export class SeekerupdateComponent implements OnInit {

  email: string;
  name: string;
  emailid: string;
  bio: string;
  dob: string;
  address: string;
  qualification: string;
  country: string;
  state: string;
  pic: File;
  college: string;
  contact: string;
  gender: string;
  msg: string;
  profile: string;
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
      this.fetchseekerdetails();
    }

  }
  fileselected(evt) {
    this.pic = evt.target.files[0];
  }
  fetchseekerdetails() {
    this.myhttp.get("http://localhost:3000/api/getseekerdetails?email=" + this.email, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {
            this.name = resp[0].name;
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
            this.profile = resp[0].picture;
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
  onupdate() {

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
      data.append("userpic", this.pic);
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
      data.append("oldpic", this.profile);
    }
    this.myhttp.put("http://localhost:3000/api/seekerupdate", data, { responseType: "json" }).subscribe(
      {
        next: (resp) => {
          if (resp["nModified"] == 1) {
            this.msg = "Profile Updated Successfully";
            alert(this.msg);
            this.myrouter.navigateByUrl("/seekerdata");
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
  oncancel() {
    this.myrouter.navigateByUrl("/seekerdata");

  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {
  coursedatarate:string;
  coursedataname: string;
  msg: string;
  coursedatapic: File;
  coursedataid: string;
  picname: string;
  coursedataduration:string;
  coursedatains:string;
  coursedatacertificate:string;
  coursedatalang:string;
  constructor(private myrouter: ActivatedRoute, private myhttp: HttpClient, private myroute: Router) {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.coursedataid = resp["cdid"];
          this.fetchcoursedatadetails();
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

  ngOnInit(): void {
  }
  oncoursedataupdate() {
    var mydata = new FormData();
    if (this.coursedatapic != null) {
      mydata.append("cdpic", this.coursedatapic); //new picture file
      mydata.append("cdname", this.coursedataname);//either old name or new name
      mydata.append("cdid", this.coursedataid);
      mydata.append("cdrate",this.coursedatarate);
      mydata.append("cdcertificate", this.coursedatacertificate);
      mydata.append("cdlang", this.coursedatalang);
      mydata.append("cdduration", this.coursedataduration);
      mydata.append("cdins", this.coursedatains);
    }
    else {
      mydata.append("cdname", this.coursedataname);//either old name or new name
      mydata.append("oldpicname", this.picname);
      mydata.append("cdid", this.coursedataid);
      mydata.append("cdrate", this.coursedatarate);
      mydata.append("cdcertificate", this.coursedatacertificate);
      mydata.append("cdlang", this.coursedatalang);
      mydata.append("cdduration", this.coursedataduration);
      mydata.append("cdins", this.coursedatains);
    }
    this.myhttp.put("http://localhost:3000/api/updatecoursedata", mydata, { responseType: "json" }).subscribe(
      {
        next: (resp) => {
          if (resp["nModified"] == 1) {
            this.msg = "Category Updated Successfully";
            alert(this.msg);
            this.myroute.navigateByUrl("/coursedata")
          }
          else {
            this.msg = "Category not updated Successfully";
            alert(this.msg);
            this.myroute.navigateByUrl("/coursedata")
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  fileselected(evt) {
    this.coursedatapic = evt.target.files[0];
  }
  fetchcoursedatadetails() {
    this.myhttp.get("http://localhost:3000/api/getcoursedatadetailsbyid?cdid=" + this.coursedataid, { responseType: "json" }).subscribe
      (
        {
          next: (resp: any[]) => {
            this.coursedataname = resp[0].coursedataname;
            this.picname = resp[0].coursedatapic;
            this.coursedatarate=resp[0].coursedatarate;
            this.coursedatacertificate = resp[0].coursedatacertificate;
            this.coursedatains = resp[0].coursedatains;
            this.coursedataduration = resp[0].coursedataduration;
            this.coursedatalang = resp[0].coursedatalang;
          },
          error: (err) => {
            alert(err);
          }
        }
      )
  }
}


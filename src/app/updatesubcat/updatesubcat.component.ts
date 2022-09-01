import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatesubcat',
  templateUrl: './updatesubcat.component.html',
  styleUrls: ['./updatesubcat.component.css']
})
export class UpdatesubcatComponent implements OnInit {
  subcatname: string;
  msg: string;
  subcatpic: File;
  subcatid: string;
  picname: string;
  constructor(private myrouter: ActivatedRoute, private myhttp: HttpClient, private myroute: Router) {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.subcatid = resp["scid"];
          this.fetchsubcatdetails();
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

  ngOnInit(): void {
  }
  onsubcatupdate() {
    var mydata = new FormData();
    if (this.subcatpic != null) {
      mydata.append("scpic", this.subcatpic); //new picture file
      mydata.append("scname", this.subcatname);//either old name or new name
      mydata.append("scatid", this.subcatid);
    }
    else {
      mydata.append("scname", this.subcatname);//either old name or new name
      mydata.append("oldpicname", this.picname);
      mydata.append("scatid", this.subcatid);
    }
    this.myhttp.put("http://localhost:3000/api/updatesubcat", mydata, { responseType: "json" }).subscribe(
      {
        next: (resp) => {
          if (resp["nModified"] == 1) {
            this.msg = "Sub Category Updated Successfully";
            alert(this.msg);
            this.myroute.navigateByUrl("/managesubcat")
          }
          else {
            this.msg = " Sub Category not updated Successfully";
            alert(this.msg);
            this.myroute.navigateByUrl("/managesubcat")
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  fileselected(evt) {
    this.subcatpic = evt.target.files[0];
  }
  fetchsubcatdetails() {
    this.myhttp.get("http://localhost:3000/api/getsubcatdetailsbyid?scid=" + this.subcatid, { responseType: "json" }).subscribe
      (
        {
          next: (resp: any[]) => {
            this.subcatname = resp[0].subcatname;
            this.picname = resp[0].subcatpic;
          },
          error: (err) => {
            alert(err);
          }
        }
      )
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecat',
  templateUrl: './updatecat.component.html',
  styleUrls: ['./updatecat.component.css']
})
export class UpdatecatComponent implements OnInit {
  catname: string;
  msg: string;
  catpic: File;
  catid: string;
  picname: string;
  constructor(private myrouter: ActivatedRoute, private myhttp: HttpClient,private myroute:Router) {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.catid = resp["cid"];
          this.fetchcatdetails();
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

  ngOnInit(): void {
  }
  oncatupdate() {
    var mydata = new FormData();
    if (this.catpic != null) {
      mydata.append("cpic", this.catpic); //new picture file
      mydata.append("cname", this.catname);//either old name or new name
      mydata.append("catid", this.catid);
    }
    else {
      mydata.append("cname", this.catname);//either old name or new name
      mydata.append("oldpicname", this.picname);
      mydata.append("catid", this.catid);
    }
    this.myhttp.put("http://localhost:3000/api/updatecat", mydata, { responseType: "json" }).subscribe(
      {
        next: (resp) => {
          if (resp["nModified"] == 1) {
            this.msg = "Category Updated Successfully";
            alert(this.msg);
            this.myroute.navigateByUrl("/managecat")
          }
          else {
            this.msg = "Category not updated Successfully";
            alert(this.msg);
            this.myroute.navigateByUrl("/managecat")
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  fileselected(evt) {
    this.catpic = evt.target.files[0];
  }
  fetchcatdetails() {
    this.myhttp.get("http://localhost:3000/api/getcatdetailsbyid?cid=" + this.catid, { responseType: "json" }).subscribe
      (
        {
          next: (resp: any[]) => {
            this.catname = resp[0].categoryname;
            this.picname = resp[0].categorypic;
          },
          error: (err) => {
            alert(err);
          }
        }
      )
  }
}

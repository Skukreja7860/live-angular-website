import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecoursecat',
  templateUrl: './updatecoursecat.component.html',
  styleUrls: ['./updatecoursecat.component.css']
})
export class UpdatecoursecatComponent implements OnInit {

coursecatname: string;
  msg: string;
  coursecatpic: File;
  catid: string;
  picname: string;
  constructor(private myrouter: ActivatedRoute, private myhttp: HttpClient, private myroute: Router) {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.catid = resp["cid"];
          this.fetchcoursecatdetails();
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

  ngOnInit(): void {
  }
  oncoursecatupdate() {
    var mydata = new FormData();
    if (this.coursecatpic != null) {
      mydata.append("cpic", this.coursecatpic); //new picture file
      mydata.append("cname", this.coursecatname);//either old name or new name
      mydata.append("catid", this.catid);
    }
    else {
      mydata.append("cname", this.coursecatname);//either old name or new name
      mydata.append("oldpicname", this.picname);
      mydata.append("catid", this.catid);
    }
    this.myhttp.put("http://localhost:3000/api/updatecoursecat", mydata, { responseType: "json" }).subscribe(
      {
        next: (resp) => {
          if (resp["nModified"] == 1) {
            this.msg = "Course Category Updated Successfully";
            alert(this.msg);
            this.myroute.navigateByUrl("/coursecategory")
          }
          else {
            this.msg = "Category not updated Successfully";
            alert(this.msg);
            this.myroute.navigateByUrl("/coursecategory")
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  fileselected(evt) {
    this.coursecatpic = evt.target.files[0];
  }
  fetchcoursecatdetails() {
    this.myhttp.get("http://localhost:3000/api/getcoursecatdetailsbyid?cid=" + this.catid, { responseType: "json" }).subscribe
      (
        {
          next: (resp: any[]) => {
            this.coursecatname = resp[0].coursecategoryname;
            this.picname = resp[0].coursecategorypic;
          },
          error: (err) => {
            alert(err);
          }
        }
      )
  }
}


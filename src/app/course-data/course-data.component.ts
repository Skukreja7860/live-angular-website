import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrls: ['./course-data.component.css']
})
export class CourseDataComponent implements OnInit {
  category: string = "";
  coursedataname: string;
  coursedatapic: File;
  msg: string;
  allcoursecat: any[];
  coursedata: any[];
  flag: boolean;
  coursedataduration: string;
  coursedatains: string;
  coursedatacertificate: string;
  coursedatalang: string;
  coursedatarate:string;
  constructor(private myhttp: HttpClient) {
    this.fetchallcoursedata();
  }
  ngOnInit(): void {
    this.fetchallcoursecat();

  }


  oncoursedataadd() {
    var mydata = new FormData();
    if (this.coursedatapic != null) {
      mydata.append("cid", this.category);
      mydata.append("cdpic", this.coursedatapic);
      mydata.append("cdname", this.coursedataname);
      mydata.append("cdrate", this.coursedatarate);
      mydata.append("cdcertificate", this.coursedatacertificate);
      mydata.append("cdlang", this.coursedatalang);
      mydata.append("cdduration", this.coursedataduration);
      mydata.append("cdins", this.coursedatains);
    }
    else {
      mydata.append("cid", this.category);
      mydata.append("cdname", this.coursedataname);
      mydata.append("cdrate", this.coursedatarate);
      mydata.append("cdcertificate", this.coursedatacertificate);
      mydata.append("cdlang", this.coursedatalang);
      mydata.append("cdduration", this.coursedataduration);
      mydata.append("cdins", this.coursedatains);
    }
    this.myhttp.post("http://localhost:3000/api/addcoursedata", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          this.msg = resp;
          this.fetchallcoursedata();





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
  fetchallcoursecat() {

    this.myhttp.get("http://localhost:3000/api/getallcoursecat", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          this.allcoursecat = resp;

        },
        error: (err) => {

        }
      }
    )
  }
  fetchallcoursedata() {
    this.myhttp.get("http://localhost:3000/api/getallcoursedata?cid=" + this.category, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
          }
          else {
            this.flag = true;
            this.coursedata = resp;

          }
        },
        error: (err) => {

        }
      }
    )
  }
  oncoursedatadel(id) {
    var userresp: boolean = confirm("Are you sure to delete?");
    if (userresp == true) {
      this.myhttp.delete("http://localhost:3000/api/delcoursedata?cdid=" + id, { responseType: "json" }).subscribe(
        {
          next: (resp) => {
            if (resp["deletedCount"] == 1) {
              alert("Category deleted successfully");
              this.fetchallcoursedata();
            }
          },
          error: (err) => {
            this.msg = err;
          }
        }
      )
    }
  }
}

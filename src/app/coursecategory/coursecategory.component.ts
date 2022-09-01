import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursecategory',
  templateUrl: './coursecategory.component.html',
  styleUrls: ['./coursecategory.component.css']
})
export class CoursecategoryComponent implements OnInit {

 
  coursecatname: string;
  msg: string;
  coursecatpic: File;
  flag: boolean;
  allcoursecat: any[];
  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.fetchallcoursecat();
  }

  oncoursecatadd() {
    var mydata = new FormData();
    if (this.coursecatpic != null) {
      mydata.append("cpic", this.coursecatpic);
      mydata.append("cname", this.coursecatname);
    }
    else {
      mydata.append("cname", this.coursecatname);
    }
    this.myhttp.post("http://localhost:3000/api/addcoursecat", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          this.msg = resp;
          this.fetchallcoursecat();
          this.coursecatname = null;
          this.coursecatpic = null;
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }

  fileselected(evt) {
    this.coursecatpic = evt.target.files[0];
    // var fsize=(this.catpic.size)/1024;
    // if(fsize>200)
    // {
    //   alert("File is more than 200 KB");
    // }
  }
  fetchallcoursecat() {
    this.myhttp.get("http://localhost:3000/api/getallcoursecat", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
          }
          else {
            this.flag = true;
            this.allcoursecat = resp;

          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

  oncoursecatdel(catid) {
    var userresp: boolean = confirm("Are you sure to delete?");
    if (userresp == true) {
      this.myhttp.delete("http://localhost:3000/api/delcoursecat?cid=" + catid, { responseType: "json" }).subscribe(
        {
          next: (resp) => {
            if (resp["deletedCount"] == 1) {
              alert("Category deleted successfully");
              this.fetchallcoursecat();
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
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadcontent',
  templateUrl: './uploadcontent.component.html',
  styleUrls: ['./uploadcontent.component.css']
})
export class UploadcontentComponent implements OnInit {

  filename: string;
  msg: string;
  filedata: File;
  flag: boolean;
  allfiles:any[];
  tutordata:any[];
  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
     this.fetchtutordetails();
  }
  fetchtutordetails() {
    this.myhttp.get("http://localhost:3000/api/gettutordetails?email=" + sessionStorage.getItem("uname"), { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {
            this.tutordata = resp;
           this.fetchallfile();
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

  onfileadd() {
    var mydata = new FormData();
    if (this.filedata != null) {
      mydata.append("tutorid",this.tutordata[0]._id);
      mydata.append("tutorname",this.tutordata[0].name);
      mydata.append("tutorsubject",this.tutordata[0].subject);
      mydata.append("tutorpic",this.tutordata[0].picture);
      mydata.append("tutorqualification",this.tutordata[0].qualification);
      mydata.append("filedata", this.filedata);
      mydata.append("filename", this.filename);
    }
    else {
      mydata.append("filename", this.filename);
    }
    this.myhttp.post("http://localhost:3000/api/addfile", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          this.msg = resp;
          this.fetchallfile();
          this.filename = null;
          this.filedata = null;
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }

  fileselected(evt) {
    this.filedata= evt.target.files[0];
    // var fsize=(this.catpic.size)/1024;
    // if(fsize>200)
    // {
    //   alert("File is more than 200 KB");
    // }
  }
  fetchallfile() {
    this.myhttp.get("http://localhost:3000/api/getallfile?id="+this.tutordata[0]._id, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
          }
          else {
            this.flag = true;
            this.allfiles = resp;

          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

  onfiledel(id) {
    var userresp: boolean = confirm("Are you sure to delete?");
    if (userresp == true) {
      this.myhttp.delete("http://localhost:3000/api/delfile?fileid=" + id, { responseType: "json" }).subscribe(
        {
          next: (resp) => {
            if (resp["deletedCount"] == 1) {
              alert("Category deleted successfully");
              this.fetchallfile();
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
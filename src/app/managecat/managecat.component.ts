import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managecat',
  templateUrl: './managecat.component.html',
  styleUrls: ['./managecat.component.css']
})
export class ManagecatComponent implements OnInit {
  catname: string;
  msg: string;
  catpic: File;
  flag: boolean;
  allcat: any[];
  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.fetchallcat();
  }

  oncatadd() {
    var mydata = new FormData();
    if (this.catpic != null) {
      mydata.append("cpic", this.catpic);
      mydata.append("cname", this.catname);
    }
    else {
      mydata.append("cname", this.catname);
    }
    this.myhttp.post("http://localhost:3000/api/addcat", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          this.msg = resp;
          this.fetchallcat();
          this.catname=null;
          this.catpic=null;
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }

  fileselected(evt) {
    this.catpic = evt.target.files[0];
    // var fsize=(this.catpic.size)/1024;
    // if(fsize>200)
    // {
    //   alert("File is more than 200 KB");
    // }
  }
  fetchallcat() {
    this.myhttp.get("http://localhost:3000/api/getallcat", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
          }
          else {
            this.flag = true;
            this.allcat = resp;
           
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

  oncatdel(catid) {
    var userresp: boolean = confirm("Are you sure to delete?");
    if (userresp == true) {
      this.myhttp.delete("http://localhost:3000/api/delcat?cid=" + catid, { responseType: "json" }).subscribe(
        {
          next: (resp) => {
            if (resp["deletedCount"] == 1) {
              alert("Category deleted successfully");
              this.fetchallcat();
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
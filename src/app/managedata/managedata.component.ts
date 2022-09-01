import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managedata',
  templateUrl: './managedata.component.html',
  styleUrls: ['./managedata.component.css']
})
export class ManagedataComponent implements OnInit {
  category: string = "";
  subcategory: string = "";
  dataname: string;
 flag:boolean;
alldata:any[];
  description: string;
  datapic: File;
  msg: string;
  allcat: any[];
  subcatdata: any[];
  constructor(private myhttp: HttpClient) { }
  ngOnInit(): void {
    this.fetchallcat();
  }
  fileselected(evt) {
    this.datapic = evt.target.files[0];
  }
  fetchallcat() {
    this.myhttp.get("http://localhost:3000/api/getallcat", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          this.allcat = resp;
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
  fetchsubcat() {
    this.myhttp.get("http://localhost:3000/api/getsubcatbycatid?catid=" + this.category, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          this.subcatdata = resp;
          this.fetchalldata();
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
  ondataadd() {
    var mydata = new FormData();
    mydata.append("cid", this.category);
    mydata.append("scid", this.subcategory);
    mydata.append("dname", this.dataname);
    mydata.append("description", this.description);
    if (this.datapic != null) {
      mydata.append("ppic", this.datapic);
    }

    this.myhttp.post("http://localhost:3000/api/adddata", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          this.msg = resp;
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
  fetchalldata() {
    this.myhttp.get("http://localhost:3000/api/getalldata?scid=" + this.subcategory, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
          }
          else {
            this.flag = true;
            this.alldata = resp;

          }
        },
        error: (err) => {

        }
      }
    )
  }
  ondatadel(id) {
    var userresp: boolean = confirm("Are you sure to delete?");
    if (userresp == true) {
      this.myhttp.delete("http://localhost:3000/api/deldata?did=" + id, { responseType: "json" }).subscribe(
        {
          next: (resp) => {
            if (resp["deletedCount"] == 1) {
              alert("Data deleted successfully");
              this.fetchalldata();
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





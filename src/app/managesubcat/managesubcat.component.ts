import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managesubcat',
  templateUrl: './managesubcat.component.html',
  styleUrls: ['./managesubcat.component.css']
})
export class ManagesubcatComponent implements OnInit {

  category:string = "";
  subcatname: string;
  subcatpic: File;
  msg: string;
  allcat: any[];
  subcat:any[];
  flag:boolean;
  constructor(private myhttp: HttpClient) { 
this.fetchallsubcat();}
  ngOnInit(): void {
    this.fetchallcat();
   
  }
 

  onsubcatadd() {
    var mydata = new FormData();
    if (this.subcatpic != null) {
      mydata.append("cid", this.category);
      mydata.append("scpic", this.subcatpic);
      mydata.append("scname", this.subcatname);
    }
    else {
      mydata.append("cid", this.category);
      mydata.append("scname", this.subcatname);
    }
    this.myhttp.post("http://localhost:3000/api/addsubcat", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          this.msg = resp;
          this.fetchallsubcat();
          
        

          
          
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
  fetchallcat() {
    
    this.myhttp.get("http://localhost:3000/api/getallcat", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          this.allcat = resp;
         
        },
        error: (err) => {

        }
      }
    )
  }
  fetchallsubcat()
  {
    this.myhttp.get("http://localhost:3000/api/getallsubcat?cid=" + this.category,{responseType:"json"}).subscribe(
      {next:(resp:any[])=>{
      if(resp.length == 0) {
        this.flag = false;
      }
      else {
        this.flag = true;
        this.subcat = resp;

      }},
      error:(err)=>
      {

      }}
    )
  }
  onsubcatdel(id) {
    var userresp: boolean = confirm("Are you sure to delete?");
    if (userresp == true) {
      this.myhttp.delete("http://localhost:3000/api/delsubcat?scid=" + id, { responseType: "json" }).subscribe(
        {
          next: (resp) => {
            if (resp["deletedCount"] == 1) {
              alert("Category deleted successfully");
              this.fetchallsubcat();
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-smaterialdata',
  templateUrl: './smaterialdata.component.html',
  styleUrls: ['./smaterialdata.component.css']
})
export class SmaterialdataComponent implements OnInit {

  flag: boolean;
  msg: string;
  subcatdata: any[];
  catid: string;

  constructor(private myhttp: HttpClient, private myrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.myrouter.queryParams.subscribe(
      {
        next: (resp) => {
          this.catid = resp["catid"];
          this.fetchsubcat();
        },
        error: (err) => {
          this.msg = err;
        }
      })
  }
  fetchsubcat() {
    this.myhttp.get("http://localhost:3000/api/getsubcatbycatid?catid=" + this.catid, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.flag = false;
            this.msg = "No Sub Categories Found";
          }
          else {
            this.flag = true;
            this.subcatdata = resp;
            
           
          }

        },
        error: (err) => {
          alert(err);
        }
      }
    )
    }

  
  
  }




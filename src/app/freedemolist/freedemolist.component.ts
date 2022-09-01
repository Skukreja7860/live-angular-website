import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freedemolist',
  templateUrl: './freedemolist.component.html',
  styleUrls: ['./freedemolist.component.css']
})
export class FreedemolistComponent implements OnInit {
flag:boolean;
  allbookings: any[];
  msg:String;
  constructor(private myhttp: HttpClient) { this.fetchallbookings(); }

  ngOnInit(): void {
  }
  fetchallbookings() {

    this.myhttp.get("http://localhost:3000/api/getallbookingsbyname?tname="+sessionStorage.getItem("pname"), { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.msg="no demo list found";
          }
          else {
            this.flag=true;
            this.allbookings = resp;
            this.msg=null;

          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

}

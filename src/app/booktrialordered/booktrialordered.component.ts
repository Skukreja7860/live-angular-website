import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booktrialordered',
  templateUrl: './booktrialordered.component.html',
  styleUrls: ['./booktrialordered.component.css']
})
export class BooktrialorderedComponent implements OnInit {
allbookings:any[];
  constructor(private myhttp:HttpClient) {this.fetchallbookings(); }

  ngOnInit(): void {
  }
fetchallbookings(){
  
    this.myhttp.get("http://localhost:3000/api/getallbookings", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {
            this.allbookings = resp;

          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

}

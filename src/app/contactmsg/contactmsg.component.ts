import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactmsg',
  templateUrl: './contactmsg.component.html',
  styleUrls: ['./contactmsg.component.css']
})
export class ContactmsgComponent implements OnInit {

  msg: string;
  allmembs: string[];
  constructor(private myhttp:HttpClient) { }

  ngOnInit(): void {
    this.fetchallmessages();
  }
  fetchallmessages() {
    this.myhttp.get("http://localhost:3000/api/contactmsg", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            this.msg = "No Members Found";

          }
          else {
            this.allmembs = resp;
          }
        },
        error: (err) => {
          this.msg = err;
        }
      }
    )
  }
}

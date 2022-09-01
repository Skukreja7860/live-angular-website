import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allmembers',
  templateUrl: './allmembers.component.html',
  styleUrls: ['./allmembers.component.css']
})
export class AllmembersComponent implements OnInit {
  msg:string;
  allmembs:string[];
  constructor(private myhttp:HttpClient) { }

  ngOnInit(): void {this.fetchallmembers();
  }
  fetchallmembers(){
  this.myhttp.get("http://localhost:3000/api/allmembers", { responseType: "json" }).subscribe(
    {
      next: (resp: any[]) => {
        if (resp.length == 0) {
          this.msg = "No Members Found";
    
        }
        else {
        this.allmembs=resp;
        }
      },
      error: (err) => {
        this.msg = err;
      }
    }
  )}}



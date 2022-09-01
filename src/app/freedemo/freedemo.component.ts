import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freedemo',
  templateUrl: './freedemo.component.html',
  styleUrls: ['./freedemo.component.css']
})
export class FreedemoComponent implements OnInit {

  msg: string;
  allmembs: string[];
  constructor(private myhttp: HttpClient,private myrouter:Router) { }

  ngOnInit(): void {
    this.fetchalltutormembers();
  }
  fetchalltutormembers() {
    this.myhttp.get("http://localhost:3000/api/alltutormembers", { responseType: "json" }).subscribe(
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
  onclick(id)
  {
    this.myrouter.navigate(["/book"], { queryParams: { tid:id } });
  }
}

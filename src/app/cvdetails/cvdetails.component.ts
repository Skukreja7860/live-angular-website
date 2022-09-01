import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cvdetails',
  templateUrl: './cvdetails.component.html',
  styleUrls: ['./cvdetails.component.css']
})
export class CvdetailsComponent implements OnInit {
  allvideos:any[];
  videopath;
  url:string;
  heading:string;
  constructor(private myhttp:HttpClient,private sanitizer:DomSanitizer,private router:Router) { this.fetchallvideos();}

  ngOnInit(): void {
  }
  fetchallvideos() {
    this.myhttp.get("http://localhost:3000/api/getallvideos?coursename=" + "Mean Stack", { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {

            this.allvideos = resp;
            console.log(this.allvideos);
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }
  fetchid(id)
  {
    this.myhttp.get("http://localhost:3000/api/getvideopath?headingid=" + id, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {

          }
          else {

            this.videopath = resp[0].coursepath;
          
            this.heading=resp[0].headingname;
            
            
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
    }
    oncomplete(){
      this.router.navigateByUrl("/complete");
    }
    getEmbedUrl()
    {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.videopath+'/?list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ');
    }
  }
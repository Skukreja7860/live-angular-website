import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  msg:string;
  name:string;
  email:string;
  result:string;
  constructor(private myhttp:HttpClient) { }

  ngOnInit(): void {
  }
  onclick(contactform) {
    if (contactform.valid == true) {
      var mydata = { name:this.name,email:this.email,msg:this.msg }
      this.myhttp.post("http://localhost:3000/api/contact", mydata, { responseType: "text" }).subscribe(
        {
          next: (resp) => {
            this.result = resp;
            alert(this.result);
        },
          error:(err)=>{ this.result = err; }
        })
    }
    else {
      alert("Please enter details");
    }
  }
}

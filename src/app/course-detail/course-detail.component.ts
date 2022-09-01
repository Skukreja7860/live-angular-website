import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
name:string;
email:string;
comment:string;
msg:string;
result:string;
courselearn;
coursedes;
coursesyl;
allcourse:any[];
pid;
flag2:boolean;
flag:boolean;
allreviews:any[];
  constructor(private myhttp:HttpClient,private myrouter:ActivatedRoute,private route:Router) {
   }

  
  
    ngOnInit(): void {
      this.myrouter.queryParams.subscribe(
        {
          next: (resp) => {
            this.pid = resp["courseid"];
            this.fetchallcourse();
            
          },
          error: (err) => {
            this.msg = err;
          }
        })
    }
//     coursecontent(){
     
     

//       if(this.allcourse[0].coursedatarate!="Free")
//       {
//         this.flag=true;
//       }
//      else if(this.allcourse[0].coursedatarate=="Free")
//      {
//        this.flag2=true;
//      }
// else{
//   this.flag=false;
//   this.flag2=false;
// }
//     }

  fetchallcourse() {

    this.myhttp.get("http://localhost:3000/api/getallcoursedatabyid?courseid="+this.pid, { responseType: "json" }).subscribe(
      {
        next: (resp: any[]) => {
          if (resp.length == 0) {
            
            this.msg = "No Categories Found";
          }
          else {
            
            this.allcourse = resp;
            
            if (this.allcourse[0].coursedataname == "Mean Stack") {
              this.coursedes = "The MEAN stack is a software stack—that is, a set of the technology layers that make up a modern application—that's built entirely in JavaScript. MEAN represents the arrival of JavaScript as a “full-stack development” language, running everything in an application from front end to back end.";
              this.courselearn={
                cl1:"Code a MEAN Project with an Online IDE",
                cl2:"Understand what the MEAN stack is and when to use it",
                cl3:"Develop MEAN REST API's with Node and Express",
                cl4:"Program and configure MongoDB in a MEAN project",
                cl5:"Develop rich, functional UI's with Angular2 in a MEAN project",
                cl6:"Work efficiently with amazing MEAN dev tools"
              };
              // this.coursesyl={
              //   cs1:"MEAN Stack Front To Back [Part 1] - Project Introduction",
              //   cs2:"MEAN Stack Front To Back [Part 2] - Express Setup & Routes",
              //   cs3:"MEAN Stack Front To Back [Part 3] - User Model & Register",
              //   cs4:"MEAN Stack Front To Back [Part 4] - API Authentication and Token",
              //   cs5:"MEAN Stack Front To Back [Part 5] - Angular 2 Components & Routes",
              //   cs6:"MEAN Stack Front To Back [Part 6] - Register Component, Validation & Flash Messages",
              //   cs7:"MEAN Stack Front To Back [Part 7] - Auth Service & User Registration",
              //   cs8:"MEAN Stack Front To Back [Part 8] - Login & Logout",
              //   cs9:"MEAN Stack Front To Back [Part 9] - Protected Requests & Auth Guard",
              //   cs10:"MEAN Stack Front To Back [Part 10] - App Deployment to Heroku",
              // }
            }
            else if (this.allcourse[0].coursedataname == "Data Science Course") {
              this.coursedes = "Data science can be defined as a blend of mathematics, business acumen, tools, algorithms and machine learning techniques, all of which help us in finding out the hidden insights or patterns from raw data which can be of major use in the formation of big business decisions.Data Science is an amalgamation of Statistics, Tools and Business knowledge. So, it becomes imperative for a Data Scientist to have good knowledge and understanding of these.";
              this.courselearn = {
                cl1: "The course provides the entire toolbox you need to become a data scientist",
                cl2: "Impress interviewers by showing an understanding of the data science field",
                cl3: "Learn how to pre-process data",
                cl4: "Carry out cluster and factor analysis",
                cl5: "Unfold the power of deep neural networks",
                cl6:"Perform linear and logistic regressions in Python"
              };
            }
            else if (this.allcourse[0].coursedataname == "CAD/CAM Course") {
              this.coursedes = "Computer-aided manufacturing (CAM) is an application technology that uses computer software and machinery to facilitate and automate manufacturing processes. CAM is the successor of computer-aided engineering (CAE) and is often used along with computer-aided design (CAD).";
              this.courselearn = {
                cl1: "Learn basic commands",
                cl2: "Learn model preparation ( Direct editing 3d model )",
                cl3: "Learn 2D Programming ( Milling )",
                cl4: "Learn 5th Axis Programming ( Milling )",
                cl5: "Learn lathe ( turning ) Programming",
                cl6: "After this course student will be able to do designing and Programming"
              };
            }
            else if (this.allcourse[0].coursedataname == "Elementary Vedic Maths Course") {
              this.coursedes = "Vedic mathematics has origin from the fourth veda called “Atharva Veda”. Vedic mathematics is a system of mathematics which consists a list of basic 16 sutras. Vedic mathematics was introduced by “Hindu Scholar” of mathematics in the early age of 20th century. The calculating strategies provided by Vedic mathematics are very creative and useful which can be applied in a number of ways to calculate various methods in arithmetic and Algebra.";
              this.courselearn = {
                cl1: "Techniques to become 10 to 15 times faster in calculations",
                cl2: "Perform better in everyday calculations and exams",
                cl3: "Increase your Speed as well as Accuracy",
                cl4: "Have Fun with Math! Get rid of your Math Phobia",
                cl5: "Become a Human Calculator yourself!",
                cl6: "Develop your left and the right side of the brain by increasing the visualization and concentration abilities."
              };
            }

            if (this.allcourse[0].coursedatarate != "Free") {
              this.flag = true;
            }
            else if (this.allcourse[0].coursedatarate == "Free") {
              this.flag2 = true;
            }
            else {
              this.flag = false;
              this.flag2 = false;
            }
            
            this.msg = null;
          }
        },
        error: (err) => {
          alert(err);
        }
      }
    )
  }

  oncartadd() {
    if (sessionStorage.getItem("uname") != null) {
  
      var cartdata = { picname: this.allcourse[0].coursedatapic, coursename: this.allcourse[0].coursedataname, rate: this.allcourse[0].coursedatarate, pid: this.pid, username: sessionStorage.getItem("uname") }

      this.myhttp.post("http://localhost:3000/api/addtocart", cartdata, { responseType: "text" }).subscribe(
        {
          next: (resp) => {
            alert(resp);
            this.route.navigateByUrl("/addtocart");
          },
          error: (err) => {
            this.msg = err;
            console.log(this.msg);
          }
        }
      )
    }
    else {
      alert("please login to enroll for this course");
      this.route.navigateByUrl("/login");
    }
  }
  onenroll(){
    var mydata = { courseid: this.pid, coursepic:this.allcourse[0].coursedatapic,coursename: this.allcourse[0].coursedataname, name: sessionStorage.getItem("pname"), email: sessionStorage.getItem("uname"), phone: sessionStorage.getItem("phoneno"),status:"Waiting"}
    this.myhttp.post("http://localhost:3000/api/freeenroll", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          this.result = resp;
          alert(this.result);
        },
        error: (err) => {
          this.result = err;
          console.log(err);
        }
      });}

check(){
  this.myhttp.get("http://localhost:3000/api/reviewcheck?courseid="+this.pid, { responseType: "json" }).subscribe(
    {
      next: (resp: any[]) => {
        if (resp.length == 0) {
          this.msg = "No Reviews Found";

        }
        else {
          this.allreviews = resp;
        }
      },
      error: (err) => {
        this.msg = err;
      }
    }
  )
}

  

  
  review(ureview)
  { if(ureview.valid==true){
    var mydata = {courseid:this.pid,coursename:this.allcourse[0].coursedataname,name: this.name, email: this.email, comment:this.comment }
    this.myhttp.post("http://localhost:3000/api/review", mydata, { responseType: "text" }).subscribe(
      {
        next: (resp) => {
          this.result = resp;
          alert(this.result);
        },
        error: (err) => { this.result = err;
        console.log(err); }
      });
  }}
}
  


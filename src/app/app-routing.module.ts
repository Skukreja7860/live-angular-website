import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { AllmembersComponent } from './allmembers/allmembers.component';
import { BecometutorComponent } from './becometutor/becometutor.component';
import { BookComponent } from './book/book.component';
import { BooktrialorderedComponent } from './booktrialordered/booktrialordered.component';
import { BoostmantraComponent } from './boostmantra/boostmantra.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompleteComponent } from './complete/complete.component';
import { ContactComponent } from './contact/contact.component';
import { ContactmsgComponent } from './contactmsg/contactmsg.component';
import { CourseDataComponent } from './course-data/course-data.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursecategoryComponent } from './coursecategory/coursecategory.component';
import { CoursevideosComponent } from './coursevideos/coursevideos.component';

import { CvdetailsComponent } from './cvdetails/cvdetails.component';

import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackmsgComponent } from './feedbackmsg/feedbackmsg.component';
import { FreecoursesComponent } from './freecourses/freecourses.component';
import { FreedemoComponent } from './freedemo/freedemo.component';
import { FreedemolistComponent } from './freedemolist/freedemolist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LearnerdataComponent } from './learnerdata/learnerdata.component';
import { LearnerdetailsComponent } from './learnerdetails/learnerdetails.component';
import { LearnereditComponent } from './learneredit/learneredit.component';
import { LearnerupdateComponent } from './learnerupdate/learnerupdate.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagecatComponent } from './managecat/managecat.component';
import { ManagecoursevideosComponent } from './managecoursevideos/managecoursevideos.component';
import { ManagedataComponent } from './managedata/managedata.component';
import { ManagesubcatComponent } from './managesubcat/managesubcat.component';
import { OnlinecourseComponent } from './onlinecourse/onlinecourse.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { PaidcoursesComponent } from './paidcourses/paidcourses.component';
import { ReviewmsgComponent } from './reviewmsg/reviewmsg.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { SeekerdataComponent } from './seekerdata/seekerdata.component';
import { SeekerdetailsComponent } from './seekerdetails/seekerdetails.component';
import { SeekereditComponent } from './seekeredit/seekeredit.component';
import { SeekerupdateComponent } from './seekerupdate/seekerupdate.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { SmaterialdataComponent } from './smaterialdata/smaterialdata.component';
import { StartnowComponent } from './startnow/startnow.component';
import { StudentbenefitsComponent } from './studentbenefits/studentbenefits.component';
import { StudentsComponent } from './students/students.component';

import { StudymaterialComponent } from './studymaterial/studymaterial.component';
import { SubcategorypaidComponent } from './subcategorypaid/subcategorypaid.component';
import { TeacherdetlComponent } from './teacherdetl/teacherdetl.component';
import { ThankuComponent } from './thanku/thanku.component';
import { TutorbenefitsComponent } from './tutorbenefits/tutorbenefits.component';
import { TutordataComponent } from './tutordata/tutordata.component';
import { TutordetailsComponent } from './tutordetails/tutordetails.component';
import { TutoreditComponent } from './tutoredit/tutoredit.component';
import { TutorsComponent } from './tutors/tutors.component';
import { Tutors1Component } from './tutors1/tutors1.component';
import { Tutors2Component } from './tutors2/tutors2.component';
import { TutorupdateComponent } from './tutorupdate/tutorupdate.component';
import { UpdatecatComponent } from './updatecat/updatecat.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { UpdatecoursecatComponent } from './updatecoursecat/updatecoursecat.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { Updatestatus2Component } from './updatestatus2/updatestatus2.component';
import { UpdatesubcatComponent } from './updatesubcat/updatesubcat.component';
import { UploadcontentComponent } from './uploadcontent/uploadcontent.component';
const routes: Routes = [
  {
    path:"homepage",
    component:HomepageComponent
  },
  {
    path: "feedback",
    component:FeedbackComponent
  },
  {
    path: "feedbackmsg",
    component: FeedbackmsgComponent
  },
  {
    path: "paid",
    component: PaidcoursesComponent
  },
  {
    path: "tutors",
    component: TutorsComponent
  },

  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "studymaterial",
    component: StudymaterialComponent
  },
  {
    path: "",
    pathMatch:"full",
    redirectTo:"homepage"
  },
  {
    path:"login",
    component:LoginComponent
  },
  
  {
    path:"allmembers",
    component:AllmembersComponent,
    
  },
  {
    path:"courseDetail",
    component:CourseDetailComponent
  },
  {
    path:'searchuser',
    component:SearchuserComponent,
        
  },
  {
    path: 'logout',
    component: LogoutComponent,

  },
  {
    path: 'changepass',
    component: ChangepasswordComponent,

  },
  {
    path:'free',
    component:FreecoursesComponent
  },
  {
    path: 'teacherdetail',
    component: TeacherdetlComponent,

  },
  {
    path: 'contactmsg',
    component: ContactmsgComponent,

  },
   {
   path: 'managecat',
  component:ManagecatComponent
  },
  {
    path: 'managedata',
    component: ManagedataComponent
  },
  {
    path: 'managesubcat',
    component: ManagesubcatComponent
  },
  {
    path: 'updatecat',
    component: UpdatecatComponent
  },
  {
    path: 'updatesubcat',
    component: UpdatesubcatComponent
  },
  {
    path: 'tutoredit',
    component: TutoreditComponent

  },
  {
    path: 'smaterialdata',
    component: SmaterialdataComponent
  },
  {
    path: 'tutorupdate',
    component: TutorupdateComponent,

  },
  {
    path: 'tutordata',
    component: TutordataComponent,

  },
  {
    path: 'learneredit',
    component:LearnereditComponent

  },
  {
    path: 'learnerupdate',
    component: LearnerupdateComponent

  },
  {
    path: 'learnerdata',
    component: LearnerdataComponent

  },
  {
    path: 'seekeredit',
    component: SeekereditComponent

  },
  {
    path: 'seekerupdate',
    component: SeekerupdateComponent

  },
  {
    path: 'seekerdata',
    component: SeekerdataComponent

  },
  {
    path: 'seekerdetails',
    component:SeekerdetailsComponent

  },
  {
    path: 'learnerdetails',
    component:LearnerdetailsComponent

  },
  {
    path: 'tutordetails',
    component: TutordetailsComponent

  },
  {
    path: 'freedemo',
    component: FreedemoComponent

  },
  {
    path:"book",
    component:BookComponent
  },
  {
    path: "coursedata",
    component: CourseDataComponent
  },
  {
    path:"reviewmsg",
    component:ReviewmsgComponent
  },
  
  {
    path: "updatecourse",
    component:UpdatecourseComponent
  },
  {
    path:"addtocart",
    component:AddtocartComponent
  },
  {
    path: "coursecategory",
    component: CoursecategoryComponent
  },
  {
    path:"updatecoursecat",
    component:UpdatecoursecatComponent
  },
  {
    path: "subcategorypaid",
    component:SubcategorypaidComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "ordersummary",
    component: OrdersummaryComponent
  },
  {
    path: "orderhistory",
    component: OrderhistoryComponent
  },
  {
    path: "orderlist",
    component: OrderlistComponent
  },
  {
    path: "updatestatus",
    component:UpdatestatusComponent
  },
  {
    path: "coursevideos",
    component:CoursevideosComponent
  },
  {
    path: "searchresults",
    component:SearchresultsComponent
  },
  {
    path: "orderdetails",
    component: OrderdetailsComponent
  },{
    path: "cvdetails",
    component:CvdetailsComponent
  
  },
  {
    path: "becometutor",
    component: BecometutorComponent

  },
  {
    path: "uploadcontent",
    component: UploadcontentComponent

  },
  {
    path: "showdata",
    component:ShowdataComponent

  },
  {
    path: "tutors1",
    component: Tutors1Component
  },
  {
    path: "tutors2",
    component: Tutors2Component

  },
  {
    path: "startnow",
    component: StartnowComponent

  },
  {
    path: "thanku",
    component: ThankuComponent

  },
  {
    path: "students",
    component:StudentsComponent

  },
  {
    path: "studentbenefits",
    component: StudentbenefitsComponent
  },
  {
    path: "tutorbenefits",
    component: TutorbenefitsComponent
  },
  {
    path: "boostmantra",
    component: BoostmantraComponent
  },
  {
    path: "onlinecourses",
    component: OnlinecourseComponent
  },
  {
    path: "managecoursevideos",
    component: ManagecoursevideosComponent
  },
  {
    path: "updatestatus2",
    component: Updatestatus2Component
  },
  {
    path: "complete",
    component: CompleteComponent
  },
  {
    path: "booktrialordered",
    component: BooktrialorderedComponent
  },
  {
    path: "freedemolist",
    component: FreedemolistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TutorsComponent } from './tutors/tutors.component';
import { StudymaterialComponent } from './studymaterial/studymaterial.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { AllmembersComponent } from './allmembers/allmembers.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PaidcoursesComponent } from './paidcourses/paidcourses.component';
import { FreecoursesComponent } from './freecourses/freecourses.component';
import { TutorheaderComponent } from './tutorheader/tutorheader.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { SeekerheaderComponent } from './seekerheader/seekerheader.component';
import { TeacherdetlComponent } from './teacherdetl/teacherdetl.component';
import { ContactmsgComponent } from './contactmsg/contactmsg.component';
import { LearnerheaderComponent } from './learnerheader/learnerheader.component';
import { ManagecatComponent } from './managecat/managecat.component';
import { ManagesubcatComponent } from './managesubcat/managesubcat.component';
import { ManagedataComponent } from './managedata/managedata.component';
import { UpdatecatComponent } from './updatecat/updatecat.component';
import { UpdatesubcatComponent } from './updatesubcat/updatesubcat.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackmsgComponent } from './feedbackmsg/feedbackmsg.component';
import { TutoreditComponent } from './tutoredit/tutoredit.component';
import { TutordataComponent } from './tutordata/tutordata.component';
import { TutorupdateComponent } from './tutorupdate/tutorupdate.component';
import { LearnerdataComponent } from './learnerdata/learnerdata.component';
import { LearnereditComponent } from './learneredit/learneredit.component';
import { LearnerupdateComponent } from './learnerupdate/learnerupdate.component';
import { SeekereditComponent } from './seekeredit/seekeredit.component';
import { SeekerdataComponent } from './seekerdata/seekerdata.component';
import { SeekerupdateComponent } from './seekerupdate/seekerupdate.component';
import { TutordetailsComponent } from './tutordetails/tutordetails.component';
import { LearnerdetailsComponent } from './learnerdetails/learnerdetails.component';
import { SeekerdetailsComponent } from './seekerdetails/seekerdetails.component';
import { FreedemoComponent } from './freedemo/freedemo.component';
import { BookComponent } from './book/book.component';
import { SmaterialdataComponent } from './smaterialdata/smaterialdata.component';

import { CourseDataComponent } from './course-data/course-data.component';
import { ReviewmsgComponent } from './reviewmsg/reviewmsg.component';

import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CoursecategoryComponent } from './coursecategory/coursecategory.component';
import { UpdatecoursecatComponent } from './updatecoursecat/updatecoursecat.component';
import { SubcategorypaidComponent } from './subcategorypaid/subcategorypaid.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { CoursevideosComponent } from './coursevideos/coursevideos.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';

import { CvdetailsComponent } from './cvdetails/cvdetails.component';
import { BecometutorComponent } from './becometutor/becometutor.component';
import { UploadcontentComponent } from './uploadcontent/uploadcontent.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { Tutors1Component } from './tutors1/tutors1.component';
import { Tutors2Component } from './tutors2/tutors2.component';
import { StartnowComponent } from './startnow/startnow.component';
import { ThankuComponent } from './thanku/thanku.component';
import { StudentsComponent } from './students/students.component';
import { StudentbenefitsComponent } from './studentbenefits/studentbenefits.component';
import { TutorbenefitsComponent } from './tutorbenefits/tutorbenefits.component';
import { BoostmantraComponent } from './boostmantra/boostmantra.component';
import { OnlinecourseComponent } from './onlinecourse/onlinecourse.component';
import { ManagecoursevideosComponent } from './managecoursevideos/managecoursevideos.component';
import { SafePipe } from './safe.pipe';
import { Updatestatus2Component } from './updatestatus2/updatestatus2.component';
import { CompleteComponent } from './complete/complete.component';
import { BooktrialorderedComponent } from './booktrialordered/booktrialordered.component';
import { FreedemolistComponent } from './freedemolist/freedemolist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TutorsComponent,
    StudymaterialComponent,
    ContactComponent,
    LoginComponent,
    SearchuserComponent,
    AllmembersComponent,
    CourseDetailComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    ChangepasswordComponent,
    PaidcoursesComponent,
    FreecoursesComponent,
    TutorheaderComponent,
    AdminheaderComponent,
    SeekerheaderComponent,
    TeacherdetlComponent,
    ContactmsgComponent,
    LearnerheaderComponent,
    ManagecatComponent,
    ManagesubcatComponent,
    ManagedataComponent,
    UpdatecatComponent,
    UpdatesubcatComponent,
    FeedbackComponent,
    FeedbackmsgComponent,
    TutoreditComponent,
    TutordataComponent,
    TutorupdateComponent,
    LearnerdataComponent,
    LearnereditComponent,
    LearnerupdateComponent,
    SeekereditComponent,
    SeekerdataComponent,
    SeekerupdateComponent,
    TutordetailsComponent,
    LearnerdetailsComponent,
    SeekerdetailsComponent,
    FreedemoComponent,
    BookComponent,
    SmaterialdataComponent,
    CourseDataComponent,
    ReviewmsgComponent,
    
    UpdatecourseComponent,
    
    AddtocartComponent,
    
    CoursecategoryComponent,
    
    UpdatecoursecatComponent,
    
    SubcategorypaidComponent,
    
    CheckoutComponent,
    
    OrdersummaryComponent,
    
    OrderhistoryComponent,
    
    OrderlistComponent,
    
    UpdatestatusComponent,
    
    CoursevideosComponent,
    
    SearchresultsComponent,
    
    OrderdetailsComponent,
    
    
    
    CvdetailsComponent,
    
    
    
    BecometutorComponent,
    
    
    
    UploadcontentComponent,
    
    
    
    ShowdataComponent,
    
    
    
    Tutors1Component,
    
    
    
    Tutors2Component,
    
    
    
    StartnowComponent,
    
    
    
    ThankuComponent,
    
    StudentsComponent,
    
    StudentbenefitsComponent,
    
    TutorbenefitsComponent,
    
    BoostmantraComponent,
    
    OnlinecourseComponent,
    
    ManagecoursevideosComponent,
    
    SafePipe,
    
    Updatestatus2Component,
    
    CompleteComponent,
    
    BooktrialorderedComponent,
    
    FreedemolistComponent,
    
    
    
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

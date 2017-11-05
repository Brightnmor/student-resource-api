import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { SrDetailComponent } from './sr-detail.component';
import { SrListComponent } from './sr-list.component';
import { AdminComponent } from './admin.component';
import { AdminSrComponent } from './admin-sr.component';
import { AdminStudentComponent } from './admin-student.component';
import { AdminEditSrComponent } from './admin-edit-sr.component';
import { AdminEditStudentComponent } from './admin-edit-student.component';
import { LoginPageComponent } from './login-page.component';
import { StudentService } from './student.service';
import { StudentResourceService } from './student-resource.service';

@NgModule({
  imports:[ 
  BrowserModule, 
  HttpModule,
  FormsModule,
  RouterModule.forRoot([
{
	path:'srlist',
	component: SrListComponent
},
{
	path:'login',
	component: LoginPageComponent
},

{
	path:'admin/studentresource',
	component: AdminSrComponent
},
{
	path:'admin/studentresource/edit/:id',
	component: AdminEditSrComponent
},
{
	path:'admin/student/edit/:id',
	component: AdminEditStudentComponent
},
{
	path:'admin/student',
	component: AdminStudentComponent
},
{
	path: '',
	redirectTo: '/srlist',
	pathMatch: 'full'
},
{
	path: 'admin',
	redirectTo: '/admin/studentresource',
	pathMatch: 'full'
},
{
	path:'srdetail/:id',
	component: SrDetailComponent
}
])
 ],
  declarations: [ AppComponent, SrDetailComponent, SrListComponent, AdminComponent, AdminSrComponent, AdminStudentComponent, AdminEditSrComponent,AdminEditStudentComponent, LoginPageComponent],
  providers: [StudentService, StudentResourceService],
  bootstrap:    [ AppComponent ]  
})
export class AppModule { }

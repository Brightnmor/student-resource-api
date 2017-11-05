import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Student } from './student';
import { StudentService } from './student.service';


@Component({
  selector: 'edit-student',
  styles: [`	
  	nav{
  	font-size:20px;
  	}
  `],
  template:`<h2>edit student</h2>
  <input [(ngModel)]="s.name" placeholder="name">
  <input [(ngModel)]="s.level" placeholder="level">
     <input [(ngModel)]="s.department" placeholder="department">
  <button (click)="edit()">Save</button>
  `,
})
export class AdminEditStudentComponent implements OnInit{ 

 s: Student;
errorMessage: string;
constructor(
private studentService: StudentService,
private route: ActivatedRoute,
private location: Location) {}



ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => 
    this.studentService.getStu(+params.get('id')))
    .subscribe(s => this.s = s);

}
 


 edit(){
this.studentService
            .updateStudent('https://student-resource-api.firebaseapp.com/admin/student/edit/'+this.s.id, this.s)
            .subscribe(
                result => console.log(result),
                error => this.errorMessage = <any>error
        );  
}


}

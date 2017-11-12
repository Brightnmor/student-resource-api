import { Component,Input, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'admin-student',
  styles: [`	
  	nav{
  	font-size:20px;
  	}
    .student{
    display: flex;
    margin: 10px;
    width:40%;
  
    }
    .name{
     background-color: #7986CB;
    padding: 10px;
    }
    .level{
     background-color: #9FA8DA;
     padding: 10px;
    }
    .dept{
     background-color: #C5CAE9;
     padding: 10px;
    }
    .delete{
    background-color: black;
    color: #ffffff;
      padding: 5px;
      cursor: pointer;
    }
    a{
    text-decoration: none;
    }
  `],
  template:`<h1>admin student</h1>
 
   <input [(ngModel)]="nameValue" placeholder="name">
    <input [(ngModel)]="levelValue" placeholder="level">
    <input [(ngModel)]="departmentValue" placeholder="department">
    <button (click)="addStudent()">Add</button>
  
	  <div *ngFor="let s of student" class="student">
    <a *ngIf="s.name" [routerLink]="['/admin/student/edit', s.id]">
	  	<div class="name">{{s.name}}</div>
     
	  	<div class="level">{{s.level}}</div>
	  	<div class="dept">{{s.department}}</div> 
    </a>
	  		<span class="delete" *ngIf="s.name" (click)="delete(s.id)">&times;</span>
	 </div>
 
`,
})
export class AdminStudentComponent implements OnInit{ 
 nameValue = "";
 levelValue = "";
 departmentValue = "";

student: Student[];



constructor(private studentService: StudentService) {}


addStu: Student;


 getStudent(): void{
  this.studentService.getStudent()
        .subscribe(s => this.student = s);
 }

 ngOnInit(): void{
  
 	this.getStudent();
 }

 addStudent(): void {
	this.studentService.addStudent({
id: null,
 name: this.nameValue,
  level: this.levelValue,
  department: this.departmentValue
 });
}

delete(s: number): void {
this.studentService
            .deleteStu('https://student-resource-api.firebaseapp.com/admin/student/delete/'+s)
            .subscribe( );  
}

}

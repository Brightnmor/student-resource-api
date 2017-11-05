import { Component,Input, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'admin-student',
  styles: [`	
  	nav{
  	font-size:20px;
  	}
  `],
  template:`<h1>admin student</h1>
 
   <input [(ngModel)]="nameValue" placeholder="name">
    <input [(ngModel)]="levelValue" placeholder="level">
    <input [(ngModel)]="departmentValue" placeholder="department">
    <button (click)="addStudent()">Add</button>
  <ul class="sr">
  <li *ngFor="let s of student">
	  
	  	<h3>{{s.name}}</h3>
     
	  	<h3>{{s.level}}</h3>
	  	<h3>{{s.department}}</h3> 
       <a *ngIf="s.id" [routerLink]="['/admin/student/edit', s.id]">
       edit </a>
	  		<button *ngIf="s.id" (click)="delete(s.id)">delete</button>
	 
  </li>
</ul>
`,
})
export class AdminStudentComponent implements OnInit{ 
private nameValue = "";
private levelValue = "";
private departmentValue = "";

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

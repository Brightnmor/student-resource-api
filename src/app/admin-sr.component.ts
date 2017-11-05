import { Component, Input, OnInit } from '@angular/core';
import { StudentResource } from './studentresource';
import { StudentResourceService } from './student-resource.service';


@Component({
  selector: 'admin-sr',
  styles: [`	
  	nav{
  	font-size:20px;
  	},

  `],
  template:`
  <h1>Student Resource</h1>
  <h3>Add resource</h3>
  <div>
   <input [(ngModel)]="titleValue" placeholder="title">
   <textarea [(ngModel)]="bodyValue" placeholder="body"></textarea>
    <button (click)="addResource()">save</button>
  </div>
<ul class="sr">
  <li *ngFor="let sr of studentresource">
	  <a *ngIf="sr.id" [routerLink]="['/srdetail', sr.id]">
	  	<h3>{{sr.title}}</h3>
	   </a>
	  	<p>{{sr.body}}</p> 
	  	<a *ngIf="sr.id" [routerLink]="['/admin/studentresource/edit', sr.id]">edit</a>
	  	<button *ngIf="sr.id" (click)="delete(sr.id)">delete</button>
	 
  </li>
</ul>
`  
})
export class AdminSrComponent implements OnInit{
 private titleValue = "";
  private bodyValue = "";

studentresource: StudentResource[];

constructor(private studentResourceService: StudentResourceService) {}

 addSr:  StudentResource;

 getStudentResource(): void{
 	 this.studentResourceService.getStudentResource()
        .subscribe(sr => this.studentresource = sr);
 }

 ngOnInit(): void{
  
 	this.getStudentResource();
 }

 delete(sr: number): void{
this.studentResourceService
            .deleteServiceWithId('https://student-resource-api.firebaseapp.com/admin/studentresource/delete/'+sr)
            .subscribe();  
    }



addResource(): void {
this.studentResourceService.addStudentResource({
 id: null,
 title: this.titleValue,
  body: this.bodyValue
 });
}
}

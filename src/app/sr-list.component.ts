import { Component, OnInit } from '@angular/core';
import { StudentResource } from './studentresource';
import { StudentResourceService } from './student-resource.service';


@Component({
	selector:'sr-list',
	styleUrls: ['./sr-list.component.css'],
	templateUrl:'./sr-list.component.html'
})

export class SrListComponent implements OnInit{

studentresource: StudentResource[] ;

constructor(private studentResourceService: StudentResourceService) {}

 getStudentResource(): void {
    this.studentResourceService.getStudentResource() .subscribe(sr => this.studentresource = sr);


  }

 ngOnInit(): void{
 	this.getStudentResource();
 }

}
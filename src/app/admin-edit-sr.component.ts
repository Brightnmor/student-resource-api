import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { StudentResource } from './studentresource';
import { StudentResourceService } from './student-resource.service';


@Component({
  selector: 'edit-sr',
  styles: [`	
  	nav{
  	font-size:20px;
  	}
  `],
  template:`<h2>edit sr</h2>
  <input [ngModel]="sr?.title" (ngModelChange)="sr.title = $event" />
  <input [ngModel]="sr?.body" (ngModelChange)="sr.body = $event" />
  
  <button (click)="edit()">Save</button>
  <div>{{sr?.key}}</div>
  `,
})
export class AdminEditSrComponent implements OnInit{ 

 @Input() sr: StudentResource;

 
constructor(
private studentResourceService: StudentResourceService,
private route: ActivatedRoute,
private location: Location) {}

errorMessage: string;


ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => 
    this.studentResourceService.getSr(+params.get('id')))
    .subscribe(sr => this.sr = sr);

}
 


 edit(){
this.studentResourceService
            .updateService('https://student-resource-api.firebaseapp.com/admin/studentresource/edit/'+this.sr.id, this.sr)
            .subscribe(
                result => console.log(result),
                error => this.errorMessage = <any>error
        );  
}


}

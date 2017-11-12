import { Component, Input, OnInit } from '@angular/core';
import { StudentResource } from './studentresource';
import { StudentResourceService } from './student-resource.service';


@Component({
  selector: 'admin-sr',
  styles: [`	
  	nav{
  	font-size:20px;
  	}
    .title{
  background-color: #E1BEE7;
  padding: 10px;
  padding-top: 70px;
  color: #000000;
}
.float-button{
    position: fixed;
    z-index: 1;
    bottom: 0;
    right:0;
    border-radius: 50%;
    margin: 10px;
    padding: 20px;
    border: 0;
    font-size: 20px;
}
#dialog{
    display: none;
    background-color: #BA68C8;
    position: fixed;
    left: 35%;
    top: 27%;
    z-index: 1;
    color: #ffffff;
    padding: 20px;


}
.contain{
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.cardDialog{
  width: 25%;
  /*background-color: #E0E0E0;*/
  min-height: 150px;
    margin: 24px;
    padding: 16px;
    color: #757575;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);

}
#closeDialog{
    float: right;
    cursor: pointer;
},

  `],
  template:`
  <div class="title">
  <h3>Add resource</h3>
  </div>
  <div id="dialog" class="cardDialog">
    <div><span id="closeDialog" (click)="closeDialog()">&times;</span></div>
    <div>
        <h3 class="dialogTitle">Add Student Resource</h3>
    </div>
    <div >
        <label for="title">Title:<br>
            <input [(ngModel)]="titleValue" placeholder="title">
        </label><br>
        <label for="body">Body:<br>
            <textarea [(ngModel)]="bodyValue" placeholder="body" rows="7" cols="30"></textarea>
        </label><br>
         <button (click)="addResource()">save</button>
    </div>
</div>


 <div *ngFor="let sr of studentresource" class="contain">
     
        <div *ngIf="sr.body" class="card">
       <a  [routerLink]="['/srdetail', sr.id]">
          <h3 class="circle">{{sr.title}}</h3>
         </a>
        <p>{{sr.body}}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
          <a *ngIf="sr.body" [routerLink]="['/admin/studentresource/edit', sr.id]">edit</a>
      <button *ngIf="sr.body" (click)="delete(sr.id)">delete</button>
     
        </div>
 </div>

<button class="float-button" id="add" (click)="openDialog()">+</button>
`  
})
export class AdminSrComponent implements OnInit{
  titleValue = "";
 bodyValue = "";

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
              this.getStudentResource();
    }



addResource(): void {
this.studentResourceService.addStudentResource({
 id: null,
 title: this.titleValue,
  body: this.bodyValue
 }, );

}

closeDialog() {
   document.getElementById("dialog").style.display = "none";
}

openDialog(){
    document.getElementById("dialog").style.display = "block";
}


}

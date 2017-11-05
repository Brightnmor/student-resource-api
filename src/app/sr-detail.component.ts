import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { StudentResourceService } from './student-resource.service';
import { StudentResource } from './studentresource';


@Component({
	selector:'sr-detail',
	styleUrls: ['./sr-detail.component.css'],
	templateUrl:'./sr-detail.component.html'
})

export class SrDetailComponent implements OnInit {
sr: {} = StudentResource;

constructor(
private studentResourceService: StudentResourceService,
private route: ActivatedRoute,
private location: Location) {}

ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => 
    this.studentResourceService.getSr(+params.get('id')))
    .subscribe(sr => this.sr = sr);
}


goBack(): void {
  this.location.back();
}

}
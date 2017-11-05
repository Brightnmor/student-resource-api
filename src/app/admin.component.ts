import { Component } from '@angular/core';


@Component({
	selector:'my-admin',
	template:`<h1>admin!</h1>
	<nav>
		<a routerLink="/admin/studentresource">Student Resources</a>
		<a routerLink="/admin/student">Student</a>
	</nav>

	<router-outlet></router-outlet>
	`
})

export class AdminComponent {

}

import { Student } from './student';
import { STUDENTS } from './mock-student';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } 
from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()

export class StudentService {
headers: Headers;
options: RequestOptions;

 constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    }


	 getStudent():Observable<any>{
 	 	return this.http.get('https://student-resource-api.firebaseapp.com/admin/student.json')
			.map(response => <Student[]>response.json());
 }

 /* get student by id */
getStu(id: number){
	return this.http.get('https://student-resource-api.firebaseapp.com/admin/student/'+id)
			.map(response => <Student>response.json());
}


addStudent(newStu: Student){
	this.http.post('https://student-resource-api.firebaseapp.com/admin/student.json',JSON.stringify( {
		  id: null,
        name: newStu.name,
        level: newStu.level,
        department: newStu.department
	    }), {headers: this.headers})
	      .subscribe(
	        res => {
	          console.log(res);
	        },
	        err => {
	          console.log("Error occured");
	        }
	      );
	} 
	updateStudent(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
        .put(url, body, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }   

	deleteStu(url: string): Observable<any> {
    return this.http
        .delete(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    
    
  }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    } 


}


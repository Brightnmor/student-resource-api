"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var student_service_1 = require("./student.service");
var AdminStudentComponent = (function () {
    function AdminStudentComponent(studentService) {
        this.studentService = studentService;
        this.nameValue = "";
        this.levelValue = "";
        this.departmentValue = "";
    }
    AdminStudentComponent.prototype.getStudent = function () {
        var _this = this;
        this.studentService.getStudent()
            .subscribe(function (s) { return _this.student = s; });
    };
    AdminStudentComponent.prototype.ngOnInit = function () {
        this.getStudent();
    };
    AdminStudentComponent.prototype.addStudent = function () {
        this.studentService.addStudent({
            id: null,
            name: this.nameValue,
            level: this.levelValue,
            department: this.departmentValue
        });
    };
    AdminStudentComponent.prototype.delete = function (s) {
        this.studentService
            .deleteStu('https://student-resource-api.firebaseapp.com/admin/student/delete/' + s)
            .subscribe();
    };
    return AdminStudentComponent;
}());
AdminStudentComponent = __decorate([
    core_1.Component({
        selector: 'admin-student',
        styles: ["\t\n  \tnav{\n  \tfont-size:20px;\n  \t}\n  "],
        template: "<h1>admin student</h1>\n \n   <input [(ngModel)]=\"nameValue\" placeholder=\"name\">\n    <input [(ngModel)]=\"levelValue\" placeholder=\"level\">\n    <input [(ngModel)]=\"departmentValue\" placeholder=\"department\">\n    <button (click)=\"addStudent()\">Add</button>\n  <ul class=\"sr\">\n  <li *ngFor=\"let s of student\">\n\t  \n\t  \t<h3>{{s.name}}</h3>\n     \n\t  \t<h3>{{s.level}}</h3>\n\t  \t<h3>{{s.department}}</h3> \n       <a *ngIf=\"s.id\" [routerLink]=\"['/admin/student/edit', s.id]\">\n       edit </a>\n\t  \t\t<button *ngIf=\"s.id\" (click)=\"delete(s.id)\">delete</button>\n\t \n  </li>\n</ul>\n",
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], AdminStudentComponent);
exports.AdminStudentComponent = AdminStudentComponent;
//# sourceMappingURL=admin-student.component.js.map
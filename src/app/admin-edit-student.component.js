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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var student_service_1 = require("./student.service");
var AdminEditStudentComponent = (function () {
    function AdminEditStudentComponent(studentService, route, location) {
        this.studentService = studentService;
        this.route = route;
        this.location = location;
    }
    AdminEditStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.studentService.getStu(+params.get('id'));
        })
            .subscribe(function (s) { return _this.s = s; });
    };
    AdminEditStudentComponent.prototype.edit = function () {
        var _this = this;
        this.studentService
            .updateStudent('https://student-resource-api.firebaseapp.com/admin/student/edit/' + this.s.id, this.s)
            .subscribe(function (result) { return console.log(result); }, function (error) { return _this.errorMessage = error; });
    };
    return AdminEditStudentComponent;
}());
AdminEditStudentComponent = __decorate([
    core_1.Component({
        selector: 'edit-student',
        styles: ["\t\n  \tnav{\n  \tfont-size:20px;\n  \t}\n  "],
        template: "<h2>edit student</h2>\n  <input [(ngModel)]=\"s.name\" placeholder=\"name\">\n  <input [(ngModel)]=\"s.level\" placeholder=\"level\">\n     <input [(ngModel)]=\"s.department\" placeholder=\"department\">\n  <button (click)=\"edit()\">Save</button>\n  ",
    }),
    __metadata("design:paramtypes", [student_service_1.StudentService,
        router_1.ActivatedRoute,
        common_1.Location])
], AdminEditStudentComponent);
exports.AdminEditStudentComponent = AdminEditStudentComponent;
//# sourceMappingURL=admin-edit-student.component.js.map
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
var student_resource_service_1 = require("./student-resource.service");
var AdminSrComponent = (function () {
    function AdminSrComponent(studentResourceService) {
        this.studentResourceService = studentResourceService;
        this.titleValue = "";
        this.bodyValue = "";
    }
    AdminSrComponent.prototype.getStudentResource = function () {
        var _this = this;
        this.studentResourceService.getStudentResource()
            .subscribe(function (sr) { return _this.studentresource = sr; });
    };
    AdminSrComponent.prototype.ngOnInit = function () {
        this.getStudentResource();
    };
    AdminSrComponent.prototype.delete = function (sr) {
        this.studentResourceService
            .deleteServiceWithId('https://student-resource-api.firebaseapp.com/admin/studentresource/delete/' + sr)
            .subscribe();
    };
    AdminSrComponent.prototype.addResource = function () {
        this.studentResourceService.addStudentResource({
            id: null,
            title: this.titleValue,
            body: this.bodyValue
        });
    };
    return AdminSrComponent;
}());
AdminSrComponent = __decorate([
    core_1.Component({
        selector: 'admin-sr',
        styles: ["\t\n  \tnav{\n  \tfont-size:20px;\n  \t},\n\n  "],
        template: "\n  <h1>Student Resource</h1>\n  <h3>Add resource</h3>\n  <div>\n   <input [(ngModel)]=\"titleValue\" placeholder=\"title\">\n   <textarea [(ngModel)]=\"bodyValue\" placeholder=\"body\"></textarea>\n    <button (click)=\"addResource()\">save</button>\n  </div>\n<ul class=\"sr\">\n  <li *ngFor=\"let sr of studentresource\">\n\t  <a *ngIf=\"sr.id\" [routerLink]=\"['/srdetail', sr.id]\">\n\t  \t<h3>{{sr.title}}</h3>\n\t   </a>\n\t  \t<p>{{sr.body}}</p> \n\t  \t<a *ngIf=\"sr.id\" [routerLink]=\"['/admin/studentresource/edit', sr.id]\">edit</a>\n\t  \t<button *ngIf=\"sr.id\" (click)=\"delete(sr.id)\">delete</button>\n\t \n  </li>\n</ul>\n"
    }),
    __metadata("design:paramtypes", [student_resource_service_1.StudentResourceService])
], AdminSrComponent);
exports.AdminSrComponent = AdminSrComponent;
//# sourceMappingURL=admin-sr.component.js.map
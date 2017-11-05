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
var SrListComponent = (function () {
    function SrListComponent(studentResourceService) {
        this.studentResourceService = studentResourceService;
    }
    SrListComponent.prototype.getStudentResource = function () {
        var _this = this;
        this.studentResourceService.getStudentResource().subscribe(function (sr) { return _this.studentresource = sr; });
    };
    SrListComponent.prototype.ngOnInit = function () {
        this.getStudentResource();
    };
    return SrListComponent;
}());
SrListComponent = __decorate([
    core_1.Component({
        selector: 'sr-list',
        styleUrls: ['./sr-list.component.css'],
        templateUrl: './sr-list.component.html'
    }),
    __metadata("design:paramtypes", [student_resource_service_1.StudentResourceService])
], SrListComponent);
exports.SrListComponent = SrListComponent;
//# sourceMappingURL=sr-list.component.js.map
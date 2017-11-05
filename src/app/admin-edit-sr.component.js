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
var student_resource_service_1 = require("./student-resource.service");
var AdminEditSrComponent = (function () {
    function AdminEditSrComponent(studentResourceService, route, location) {
        this.studentResourceService = studentResourceService;
        this.route = route;
        this.location = location;
    }
    AdminEditSrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.studentResourceService.getSr(+params.get('id'));
        })
            .subscribe(function (sr) { return _this.sr = sr; });
    };
    AdminEditSrComponent.prototype.edit = function () {
        var _this = this;
        this.studentResourceService
            .updateService('https://student-resource-api.firebaseapp.com/admin/studentresource/edit/' + this.sr.id, this.sr)
            .subscribe(function (result) { return console.log(result); }, function (error) { return _this.errorMessage = error; });
    };
    return AdminEditSrComponent;
}());
AdminEditSrComponent = __decorate([
    core_1.Component({
        selector: 'edit-sr',
        styles: ["\t\n  \tnav{\n  \tfont-size:20px;\n  \t}\n  "],
        template: "<h2>edit sr</h2>\n  <input value=\"sr.title\" placeholder=\"title\">\n    <input value=\"sr.body\" placeholder=\"body\">\n  <button (click)=\"edit()\">Save</button>\n  ",
    }),
    __metadata("design:paramtypes", [student_resource_service_1.StudentResourceService,
        router_1.ActivatedRoute,
        common_1.Location])
], AdminEditSrComponent);
exports.AdminEditSrComponent = AdminEditSrComponent;
//# sourceMappingURL=admin-edit-sr.component.js.map
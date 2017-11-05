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
var studentresource_1 = require("./studentresource");
var SrDetailComponent = (function () {
    function SrDetailComponent(studentResourceService, route, location) {
        this.studentResourceService = studentResourceService;
        this.route = route;
        this.location = location;
        this.sr = studentresource_1.StudentResource;
    }
    SrDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.studentResourceService.getSr(+params.get('id'));
        })
            .subscribe(function (sr) { return _this.sr = sr; });
    };
    SrDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return SrDetailComponent;
}());
SrDetailComponent = __decorate([
    core_1.Component({
        selector: 'sr-detail',
        styleUrls: ['./sr-detail.component.css'],
        templateUrl: './sr-detail.component.html'
    }),
    __metadata("design:paramtypes", [student_resource_service_1.StudentResourceService,
        router_1.ActivatedRoute,
        common_1.Location])
], SrDetailComponent);
exports.SrDetailComponent = SrDetailComponent;
//# sourceMappingURL=sr-detail.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AdminComponent = (function () {
    function AdminComponent() {
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        selector: 'my-admin',
        template: "<h1>admin!</h1>\n\t<nav>\n\t\t<a routerLink=\"/admin/studentresource\">Student Resources</a>\n\t\t<a routerLink=\"/admin/student\">Student</a>\n\t</nav>\n\n\t<router-outlet></router-outlet>\n\t"
    })
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map
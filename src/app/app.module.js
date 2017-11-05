"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var sr_detail_component_1 = require("./sr-detail.component");
var sr_list_component_1 = require("./sr-list.component");
var admin_component_1 = require("./admin.component");
var admin_sr_component_1 = require("./admin-sr.component");
var admin_student_component_1 = require("./admin-student.component");
var admin_edit_sr_component_1 = require("./admin-edit-sr.component");
var admin_edit_student_component_1 = require("./admin-edit-student.component");
var login_page_component_1 = require("./login-page.component");
var student_service_1 = require("./student.service");
var student_resource_service_1 = require("./student-resource.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'srlist',
                    component: sr_list_component_1.SrListComponent
                },
                {
                    path: 'login',
                    component: login_page_component_1.LoginPageComponent
                },
                {
                    path: 'admin/studentresource',
                    component: admin_sr_component_1.AdminSrComponent
                },
                {
                    path: 'admin/studentresource/edit/:id',
                    component: admin_edit_sr_component_1.AdminEditSrComponent
                },
                {
                    path: 'admin/student/edit/:id',
                    component: admin_edit_student_component_1.AdminEditStudentComponent
                },
                {
                    path: 'admin/student',
                    component: admin_student_component_1.AdminStudentComponent
                },
                {
                    path: '',
                    redirectTo: '/srlist',
                    pathMatch: 'full'
                },
                {
                    path: 'admin',
                    redirectTo: '/admin/studentresource',
                    pathMatch: 'full'
                },
                {
                    path: 'srdetail/:id',
                    component: sr_detail_component_1.SrDetailComponent
                }
            ])
        ],
        declarations: [app_component_1.AppComponent, sr_detail_component_1.SrDetailComponent, sr_list_component_1.SrListComponent, admin_component_1.AdminComponent, admin_sr_component_1.AdminSrComponent, admin_student_component_1.AdminStudentComponent, admin_edit_sr_component_1.AdminEditSrComponent, admin_edit_student_component_1.AdminEditStudentComponent, login_page_component_1.LoginPageComponent],
        providers: [student_service_1.StudentService, student_resource_service_1.StudentResourceService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
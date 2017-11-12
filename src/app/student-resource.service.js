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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
// Observable class extensions
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/do");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var StudentResourceService = (function () {
    function StudentResourceService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    StudentResourceService.prototype.getStudentResource = function () {
        return this.http.get('https://student-resource-api.firebaseapp.com/studentresource.json')
            .map(function (response) { return response.json(); });
    };
    /* get student resource by id */
    StudentResourceService.prototype.getSr = function (id) {
        return this.http.get('https://student-resource-api.firebaseapp.com/studentresource/' + id + '.json')
            .map(function (response) { return response.json(); });
    };
    /* add student resource */
    StudentResourceService.prototype.addStudentResource = function (newSr) {
        this.http.post('https://student-resource-api.firebaseapp.com/admin/studentresource.json', JSON.stringify({
            id: newSr.id,
            title: newSr.title,
            body: newSr.body
        }), { headers: this.headers })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
    };
    /* edit student resource */
    StudentResourceService.prototype.updateService = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .put(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /* delete student resource */
    StudentResourceService.prototype.deleteServiceWithId = function (url) {
        return this.http
            .delete(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    StudentResourceService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    StudentResourceService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return StudentResourceService;
}());
StudentResourceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], StudentResourceService);
exports.StudentResourceService = StudentResourceService;
var _a;
//# sourceMappingURL=student-resource.service.js.map
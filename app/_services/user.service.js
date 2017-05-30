System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', '../_services/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, index_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http, authenticationService) {
                    this.http = http;
                    this.authenticationService = authenticationService;
                }
                UserService.prototype.getUsers = function () {
                    // add authorization header with jwt token
                    var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
                    var options = new http_1.RequestOptions({ headers: headers });
                    // get users from api
                    return this.http.get('/api/users', options)
                        .map(function (response) { return response.json(); });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, index_1.AuthenticationService])
                ], UserService);
                return UserService;
                var _a;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map
System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService(http) {
                    this.http = http;
                    // set token if saved in local storage
                    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    this.token = currentUser && currentUser.token;
                }
                AuthenticationService.prototype.login = function (username, password) {
                    var _this = this;
                    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
                        .map(function (response) {
                        // login successful if there's a jwt token in the response
                        var token = response.json() && response.json().token;
                        if (token) {
                            // set token property
                            _this.token = token;
                            // store username and jwt token in local storage to keep user logged in between page refreshes
                            localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                            // return true to indicate successful login
                            return true;
                        }
                        else {
                            // return false to indicate failed login
                            return false;
                        }
                    });
                };
                AuthenticationService.prototype.logout = function () {
                    // clear token remove user from local storage to log user out
                    this.token = null;
                    localStorage.removeItem('currentUser');
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], AuthenticationService);
                return AuthenticationService;
                var _a;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map
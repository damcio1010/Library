System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', './_helpers/fake-backend', '@angular/http/testing', './app.component', './app.routing', './_guards/index', './_services/index', './login/index', './home/index'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, fake_backend_1, testing_1, http_2, app_component_1, app_routing_1, index_1, index_2, index_3, index_4;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (fake_backend_1_1) {
                fake_backend_1 = fake_backend_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            http_1.HttpModule,
                            app_routing_1.routing
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            index_3.LoginComponent,
                            index_4.HomeComponent
                        ],
                        providers: [
                            index_1.AuthGuard,
                            index_2.AuthenticationService,
                            index_2.UserService,
                            // providers used to create fake backend
                            fake_backend_1.fakeBackendProvider,
                            testing_1.MockBackend,
                            http_2.BaseRequestOptions
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map
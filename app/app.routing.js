System.register(['@angular/router', './login/index', './home/index', './_guards/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, index_1, index_2, index_3;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }],
        execute: function() {
            appRoutes = [
                { path: 'login', component: index_1.LoginComponent },
                { path: '', component: index_2.HomeComponent, canActivate: [index_3.AuthGuard] },
                // otherwise redirect to home
                { path: '**', redirectTo: '' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map
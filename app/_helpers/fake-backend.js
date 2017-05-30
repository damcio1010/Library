System.register(['@angular/http', '@angular/http/testing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, testing_1;
    var fakeBackendProvider;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            }],
        execute: function() {
            exports_1("fakeBackendProvider", fakeBackendProvider = {
                // use fake backend in place of Http service for backend-less development
                provide: http_1.Http,
                useFactory: function (backend, options) {
                    // configure fake backend
                    backend.connections.subscribe(function (connection) {
                        var testUser = { username: 'damian.kleczek', password: '000000', firstName: 'Damian', lastName: 'Kłeczek' };
                        // wrap in timeout to simulate server api call
                        setTimeout(function () {
                            // fake authenticate api end point
                            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === http_1.RequestMethod.Post) {
                                // get parameters from post request
                                var params = JSON.parse(connection.request.getBody());
                                // check user credentials and return fake jwt token if valid
                                if (params.username === testUser.username && params.password === testUser.password) {
                                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: { token: 'fake-jwt-token' } })));
                                }
                                else {
                                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200 })));
                                }
                            }
                            // fake users api end point
                            if (connection.request.url.endsWith('/api/users') && connection.request.method === http_1.RequestMethod.Get) {
                                // check for fake auth token in header and return test users if valid, this security is implemented server side
                                // in a real application
                                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: [testUser] })));
                                }
                                else {
                                    // return 401 not authorised if token is null or invalid
                                    connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                                }
                            }
                        }, 500);
                    });
                    return new http_1.Http(backend, options);
                },
                deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
            });
        }
    }
});
//# sourceMappingURL=fake-backend.js.map
var ngApimock = require('ng-apimock')();
var connect = require('connect');
var http = require('http');

ngApimock.run({
  "baseUrl": "http://localhost:3000", // If not informed browser.baseUrl will be used
  "src": "mocks/mock-scenarios",
  "outputDir": "mocks/mock-configuration-app/",
  "done": function() {
    ngApimock.watch("mocks/mock-scenarios");
  }
});

var app = connect();
app.use(require('ng-apimock/lib/utils').ngApimockRequest);
app.use('/mocking', require('serve-static')('mocks/mock-configuration-app'));

http.createServer(app).listen(3000);

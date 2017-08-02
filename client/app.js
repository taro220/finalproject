var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'partials/home.html',
    })
    .when('/buy/:id?', {
      templateUrl: 'partials/buy.html'
    })
    .when('/sell/:id?', {
      templateUrl: 'partials/sell.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

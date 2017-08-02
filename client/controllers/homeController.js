myApp.controller('homeController', ['$scope', '$routeParams', '$location', 'cgiFactory', function($scope, rParams, $location, cgiFactory){

  $scope.callCgi = () => {
    cgiFactory.callCgi($scope.cgi_param, function(data){
      console.log(data);
    });

  }

  var grabData = () => {
    cgiFactory.grabData(function(data){
      console.log(data);
    })
  }

  grabData();



}])

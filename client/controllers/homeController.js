myApp.controller('homeController', ['$scope', '$routeParams', '$location', function($scope, rParams, $location){

  $scope.callCgi = function (){
    console.log($scope.cgi_param);


  }



}])

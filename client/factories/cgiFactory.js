myApp.factory('cgiFactory', function($http){
  var factory = {};
  var cgi_url = "http://localhost:8000/cgi-bin/cgilab.cgi";
  factory.callCgi = function(cgi_data, callback){
    jQuery.get(`${cgi_url}?${cgi_data}`).then(function (data){
      callback(data);
    })
  }

  factory.grabData => (callback) {
    jQuery.get(`${cgi_url}?get_data`).then(function (data){
      callback(data);
    })
  }
  return factory;
});

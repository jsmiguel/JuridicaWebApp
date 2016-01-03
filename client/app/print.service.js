'use strict';

(function(){
    
  angular.module('juridicaWebApp')
  .factory('Print', function ($http) {
    return function(controller, id) {
        return $http.get(API_URL + '/' + controller + '/print/' + id, { responseType: 'arraybuffer' });
      }
    });
    
}());
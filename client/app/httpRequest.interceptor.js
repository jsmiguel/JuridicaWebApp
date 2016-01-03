'use strict';

(function(){
    
  angular.module('juridicaWebApp')
  .factory('httpRequestInterceptor', function ($rootScope) {
    
    return {
   		request: function($config) {

   			$rootScope.materialPreloader = true;
   			
		    if( $rootScope.token )
		    {
		     $config.headers['Authorization'] = 'UFG ' + $rootScope.token;
		    }
		  return $config;
	  	},
	  	'response': function(response) {
          	$rootScope.materialPreloader = false;

          	return response;
        },
	};

  });
    
}());


var birthday = new Date("8/1/1985");
var today = new Date();
var years = today.getFullYear() - birthday.getFullYear();

// Reset birthday to the current year.
birthday.setFullYear(today.getFullYear());

// If the user's birthday has not occurred yet this year, subtract 1.
if (today < birthday)
{
    years--;
}
document.write("You are " + years + " years old.");
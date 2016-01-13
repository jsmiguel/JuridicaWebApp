(function() {
	angular.module('juridicaWebApp')
		.factory('Utilities', function(){
			var adminRoles = [1, 2];
			return {
				isAuthorizedUser: function (rolId) {
			      return _.contains(adminRoles, rolId);
			    }
				
			};
		});
})();
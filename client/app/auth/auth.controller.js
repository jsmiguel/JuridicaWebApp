'use strict';

(function(){
    
  angular.module('juridicaWebApp')
  .controller('AuthCtrl', function ($scope, $rootScope, $mdToast, $location, $window, Cuenta) {

    $rootScope.logOut();

    $scope.logIn = function ($event) {
      $event.preventDefault();
  		if (!$.isEmptyObject($scope.credentials)) {

        // Autentificación de cuenta
        Cuenta.login($scope.credentials,
        function(token) {
          // success

          if (!token.user.esActivo){
            $mdToast.show(
              $mdToast.simple()
                .content('Error al iniciar sesión')
                .position('right')
                .hideDelay(3000)
            );

            Cuenta
              .logout({
                id: token.id
              })
              .$promise
              .then(function(response) {
                $location.path('/login');
              });

          } else {
            var next = $location.nextAfterLogin || '/';

            // Set the stringified user data into local storage         

            $rootScope.account = token.user;
            $rootScope.token = token.id;
            $rootScope.authenticated = true;

            localStorage.setItem('account', JSON.stringify(token.user));
            //localStorage.setItem('token',token.id);
            //$window.sessionStorage["account"] = JSON.stringify(token.user);
            //$window.sessionStorage["token"] = token.id;

            $location.nextAfterLogin = null;
            $location.path(next);
          }

        }, function(res) {
          // error
          $mdToast.show(
              $mdToast.simple()
                .content('Error al iniciar sesión')
                .position('right')
                .hideDelay(3000)
            );
        });

        /*Auth.logIn($scope.credentials)
          .success(function(res) {

            var account = JSON.stringify(res.cuenta);
            var token = JSON.stringify(res.token);

            // Set the stringified user data into local storage
            localStorage.setItem('account', account);

            // Set the stringified user data into local storage
            //localStorage.setItem('token', token);
            
            $window.sessionStorage["token"] = token;
            $window.sessionStorage["authenticated"] = true;

            //localStorage.setItem('authenticated ', true);

            // The user's authenticated state
            $rootScope.authenticated = true;

            $rootScope.currentAccount = JSON.parse(localStorage.getItem('account') || '[]');

            //$rootScope.token = res.token;
            //$rootScope.token = JSON.parse(localStorage.getItem('token') || '[]');  
            $rootScope.token = JSON.parse($window.sessionStorage["token"] || '[]');        

            $mdToast.show(
              $mdToast.simple()
                .content('Bienvenido!')
                .position('right')
                .hideDelay(3000)
            );

            $location.path('/');

          })
          .error(function(error) {
            $mdToast.show(
              $mdToast.simple()
                .content('Error al iniciar sesión')
                .position('right')
                .hideDelay(3000)
            );
          });*/
  		}
  	}
  })
    
}());
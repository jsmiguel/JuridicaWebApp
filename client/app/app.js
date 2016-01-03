'use strict';

(function () {

  angular.module('juridicaWebApp', ['ngMaterial','ui.router','juridicaServices','oc.lazyLoad'])

  //.constant('API_URL', 'http://api.jsmiguel.com')
  //.constant('API_URL', 'http://localhost:1337')

  .config(function ($urlRouterProvider, $locationProvider, $mdThemingProvider, $logProvider) {
      // Enable log
      $logProvider.debugEnabled(true);

      $urlRouterProvider.otherwise('/');

      // use the HTML5 History API
      $locationProvider.html5Mode(true);

      $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('grey');

    })
    .run(function ($rootScope, $state, $location, $window, Cuenta) {

      function init() {
        
        $rootScope.authenticated = $window.sessionStorage["authenticated"] || false;
        $rootScope.token = $window.sessionStorage["token"] || '';
        $rootScope.account = $window.sessionStorage["account"] || '';
        //$rootScope.authenticated = JSON.parse($window.sessionStorage["authenticated"]) == "true" ? true : false;
        //$rootScope.token = JSON.parse(localStorage.getItem('token') || '[]'); 
        //$rootScope.token = JSON.parse($window.sessionStorage["token"] || '[]'); 
      }

      init();

      $rootScope.logOut = function () {
        Cuenta
          .logout({
            id: $rootScope.token
          })
          .$promise
          .then(function(response) {
            $location.path('/login');
          });

        // Remove the authenticated user from local storage
        localStorage.clear();
        $window.sessionStorage.clear();

        // Flip authenticated to false so that we no longer
        // show UI elements dependant on the user being logged in

        $rootScope.authenticated = false;

        // Remove the current user info from rootscope
        $rootScope.account = null;
        $rootScope.token = null;

        //Redirect to login form
        $location.path('/login');
        //$state.go('login')

      }
      //$rootScope.token = JSON.parse($window.sessionStorage["token"] || '[]');

      /*$rootScope.$on('$stateChangeStart', function (event, next, current) {
        // if route requires auth and user is not logged in
        if (!$rootScope.authenticated) {
          // redirect back to login
          $location.path('/login');
          //$state.go('login')
        }
      });*/

      $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){

          $rootScope.previusState = fromState.name;

          if (!$rootScope.authenticated) {
            // redirect back to login
            $location.path('/login');
            //$state.go('login')
          }
      });

    });

})();
'use strict';

(function () {

  angular.module('juridicaWebApp', ['ngMaterial','ui.router','juridicaServices','oc.lazyLoad'])

  .config(function ($urlRouterProvider, $locationProvider, $mdThemingProvider, $logProvider, LoopBackResourceProvider) {

      LoopBackResourceProvider.setUrlBase('/api');

      // Enable log
      $logProvider.debugEnabled(true);

      $urlRouterProvider.otherwise('/');

      // use the HTML5 History API
      //$locationProvider.html5Mode(true);

      $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('red');

    })
    .run(function ($rootScope, $state, $log, $location, $window, Cuenta, LoopBackAuth, Utilities) {

      function init() {        
        $rootScope.authenticated = Cuenta.isAuthenticated();

        if (localStorage.getItem('account')) {
          $rootScope.account = JSON.parse(localStorage.getItem('account'));
          $rootScope.isAdmin = Utilities.isAuthorizedUser($rootScope.account.rolId);
        }
        
        /*if ($window.sessionStorage["account"]) {
          $rootScope.account = JSON.parse($window.sessionStorage["account"]);
        }*/

        //$rootScope.account = JSON.parse($window.sessionStorage["account"]) || '';
        //$rootScope.authenticated = JSON.parse($window.sessionStorage["authenticated"]) == "true" ? true : false;
        //$rootScope.token = JSON.parse(localStorage.getItem('token') || '[]'); 
        //$rootScope.token = JSON.parse($window.sessionStorage["token"] || '[]'); 
      }

      init();

      $rootScope.logOut = function () {
        if (LoopBackAuth.accessTokenId) {
          Cuenta
          .logout({
            id: LoopBackAuth.accessTokenId
          })
          .$promise
          .then(function(response) {
            $location.path('/login');
          });
        }
        // Remove the authenticated user from local storage
        localStorage.clear();
        //$window.sessionStorage.clear();

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

          if (fromParams.id) {
            $rootScope.previusState = fromState.name+'({id: '+fromParams.id+'})';
          } else{
            $rootScope.previusState = fromState.name;
          };

          //$log.debug('State', $rootScope.previusState);


          if (!$rootScope.authenticated) {
            // redirect back to login
            $location.path('/login');
            //$state.go('login')
          }
      });

    });

})();
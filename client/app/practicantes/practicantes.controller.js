'use strict';

angular.module('juridicaWebApp')
  .filter('offset', function() {
    return function(input, start) {
      start = parseInt(start, 10);
      return input.slice(start);
    };
  })
  .controller('PracticantesCtrl', function ($scope, $rootScope, Practicante) {
        $scope.itemsPerPage = 8;
        $scope.currentPage = 0;
        $scope.practicantes = [];

        Practicante
          .find()
          .$promise
          .then(function(data) {
            $scope.practicantes = data;
          });

        $scope.prevPage = function() {
          if ($scope.currentPage > 0) {
            $scope.currentPage--;
          }
        };

        $scope.prevPageDisabled = function() {
          return $scope.currentPage === 0 ? "disabled" : "";
        };

        $scope.pageCount = function() {
          return Math.ceil($scope.estadoFamiliar.length/$scope.itemsPerPage)-1;
        };

        $scope.nextPage = function() {
          if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
          }
        };

        $scope.nextPageDisabled = function() {
          return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
        };

        $scope.setPage = function(n) {
          $scope.currentPage = n;
        };

        $scope.range = function() {
          var rangeSize = 4;
          var ret = [];
          var start;

          start = $scope.currentPage;
          if ( start > $scope.pageCount()-rangeSize ) {
            start = $scope.pageCount()-rangeSize+1;
          }

          for (var i=start+1; i<start+rangeSize; i++) {
            ret.push(i);
          }
          return ret;
        };

        $scope.sort = function(keyname){
          $scope.sortKey = keyname;   //set the sortKey to the param passed
          $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        };
        $scope.showForm = function($event) {
          var parentEl = angular.element(document.body);
          $mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            templateUrl:'app/practicantes/form.html',
            controller: DialogController
          });
          function DialogController($scope, $rootScope, $mdDialog, $mdToast,$location, Practicante) {
            $scope.cerrar = function() {
              $mdDialog.hide();
            };
            $scope.cancelar = function() {
              $mdDialog.cancel();
            };
            $scope.guardarPracticante = function() {
              if (!$.isEmptyObject($scope.formData)) {

                // call the create function from our service (returns a promise object)
                Practicante.crear($scope.formData)
                  .success(function() {
                    $mdToast.show(
                      $mdToast.simple()
                        .content('Creado satisfactoriamente!')
                        .position('right')
                        .hideDelay(3000)
                    );
                  })
                  .error(function(error) {
                    $mdToast.show(
                      $mdToast.simple()
                        .content('Error al gurdar el practicante: ' + error.message)
                        .position('right')
                        .hideDelay(3000)
                    );
                  });
                $location.path('/practicantes/');
              }
              $mdDialog.cancel();
            }
          }
        }
  })
  .controller('NuevoPracticanteCtrl', function ($scope, $rootScope, $mdToast, $location, TipoDocumento, EstadoCivil, Pais, Practicante) {
    
    $scope.estadoCivil = [];
    $scope.tiposDocumento = [];
    $scope.paises = [];

    TipoDocumento
      .find()
      .$promise
      .then(function(data) {
        $scope.tiposDocumento = data;
      });

    EstadoCivil
      .find()
      .$promise
      .then(function(data) {
        $scope.estadoCivil = data;
      });

    Pais
      .find()
      .$promise
      .then(function(data) {
        $scope.paises = data;
      });

    $scope.crearPracticante = function() {
      if (!$.isEmptyObject($scope.formData)) {

        // call the create function from our service (returns a promise object)
        Practicante.crear($scope.formData)
          .success(function() {
            $mdToast.show(
              $mdToast.simple()
                .content('Creado satisfactoriamente!')
                .position('right')
                .hideDelay(3000)
            );
          })
          .error(function(error) {
            $mdToast.show(
              $mdToast.simple()
                .content('Error al guardar el practicante: ' + error.message)
                .position('right')
                .hideDelay(3000)
            );
          });

        $location.path('/practicantes/');
      }
    }


  })
;

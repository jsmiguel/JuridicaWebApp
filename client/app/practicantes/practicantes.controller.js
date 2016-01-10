'use strict';
(function(){

function calculateAge (birthday) {
  var birthday = new Date(birthday);
  var today = new Date();
  var years = today.getFullYear() - birthday.getFullYear();

  // Reset birthday to the current year.
  birthday.setFullYear(today.getFullYear());

  // If the user's birthday has not occurred yet this year, subtract 1.
  if (today < birthday)
  {
      years--;
  }

  return years+' años';
}

angular.module('juridicaWebApp')
  .filter('offset', function() {
    return function(input, start) {
      start = parseInt(start, 10);
      return input.slice(start);
    };
  })
  .controller('PracticantesCtrl', function ($log, $scope, $rootScope, Practicante, EstadoCivil) {
        var vm = this;
        vm.sortKey = '';
        vm.reverse = '';
        vm.practicantes = [];

        Practicante
          .find({
            filter: {
              include: ['estadoCivil', 'pais']
            }
          })
          .$promise
          .then(function(practicantes) {
            vm.practicantes = practicantes;
            $log.debug(vm.practicantes);
          });

        vm.sort = function(keyname){
          vm.sortKey = keyname;   //set the sortKey to the param passed
          vm.reverse = !vm.reverse; //if true make it false and vice versa
        };
  })
  .controller('NuevoPracticanteCtrl', function ($log, $scope, $rootScope, $mdToast, $location, EstadoCivil, Pais, Practicante) {
    
    $scope.estadoCivil = [];
    $scope.paises = [];

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

        $log.debug($scope.formData);
        
        $scope.formData.creado = new Date();

        Practicante
          .create($scope.formData,
            function(response) {
              // success
              $mdToast.show(
              $mdToast.simple()
                .content('Creado satisfactoriamente!')
                .position('right')
                .hideDelay(3000)
            );
            $location.path('/practicantes');
            }, function(err) {
              // error
              $mdToast.show(
              $mdToast.simple()
                  .content('Error al guardar el practicante: ' + err.message)
                  .position('right')
                  .hideDelay(3000)
              );
            });
      }
    }


  })
  .controller('DetallePracticanteCtrl', function ($log, $mdToast, $stateParams, $location, EstadoCivil, Practicante) {
    var vm = this;
    vm.estadoCivil = [];
    vm.practicante = {};
    vm.editable = false;
    vm.edad = '';

    EstadoCivil
      .find()
      .$promise
      .then(function(estadoCivil) {
        vm.estadoCivil = estadoCivil;
      });

    Practicante.findById({
        id: $stateParams.id
      })
      .$promise
      .then(function (practicante) {
        // success
        vm.practicante = practicante;
        vm.edad = calculateAge(practicante.fechaNac);
        $log.debug(vm.edad);
      }, function (err) {
        // error
        $log.error(err);
      });

      vm.updatePracticante = function () {
      vm.practicante.actualizado = new Date();
      vm.practicante.$save();
      vm.editable = false;
      $mdToast.show(
        $mdToast.simple()
          .content('Datos actualizados')
          .position('right')
          .hideDelay(3000)
      );
    }
  });

}());
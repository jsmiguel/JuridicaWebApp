'use strict';

(function () {

  angular.module('juridicaWebApp')
  .controller('AdminCtrl', function ($scope, $location, $mdDialog, Colaborador, TipoDocumento, Servicio, Cuenta) {
    var vm = this;

    $scope.asesores = [];
    $scope.coordinadores = [];
    $scope.cuentas = [];
    $scope.tiposDocumento = [];
    $scope.servicios = [];


    TipoDocumento
      .find()
      .$promise
      .then(function(data) {
        $scope.tiposDocumento = data;
      });

    Servicio
        .find()
        .$promise
        .then(function(data) {
          $scope.servicios = data;
        });
    
    Cuenta
      .find({
          filter: {   
            where: { 
              rolId: 2 
            },   
            include: ['colaborador']
          }
        })
      .$promise
      .then(function(data) {
        $scope.coordinadores = data;
      });

    Cuenta
      .find({
          filter: {   
            where: { 
              rolId: 3
            },   
            include: ['colaborador']
          }
        })
      .$promise
      .then(function(data) {
        $scope.asesores = data;
      });

    vm.changeStatusAccount = function (account) {
        account.esActivo = account.esActivo ? false : true;

        Cuenta.prototype$updateAttributes(
        { id: account.id }, 
        { esActivo: account.esActivo });
    }

    vm.changeStatus = function(model){
        model.esActivo = model.esActivo ? false : true;
        model.$save();   
    }

    vm.addColaborador = function($event, colaborador) {
      $event.preventDefault();
      var parentEl = angular.element(document.body);

      $mdDialog.show({
        parent: parentEl,
        targetEvent: $event,
        templateUrl:'./app/admin/colaboradorForm.html',
        controller: ColaboradorFormController,
        controllerAs: 'formCtrl',
        clickOutsideToClose: true
      });

      function ColaboradorFormController($scope, $mdDialog, $mdToast, $log, $state, $stateParams, Colaborador, Cuenta, Rol) {
        var vm = this;
         vm.colaborador = colaborador;
         vm.rolId = '';

        Rol.findOne({
          filter: { 
            where: { 
              nombre: colaborador 
            } 
          } 
        },
        function(rol) {
          /* success */ 
          vm.rolId = rol.id;
          $log.debug(vm.rolId);
        },
        function(error) {
           /* error */ 
           $log.debug(error);
        });

        vm.cerrar = function() {
          $mdDialog.hide();
          return false;
        };
        vm.cancelar = function() {
          $mdDialog.cancel();
          return false;
        };
        vm.procesar = function($event) {
          $event.preventDefault();
          if (!$.isEmptyObject(vm.formData)) {
            //$log.debug(vm.formData);
            // call the create function from our service (returns a promise object)
            vm.formData.cuenta.rolId = vm.rolId;
            vm.formData.cuenta.created = new Date();
            vm.formData.cuenta.esActivo = true;
            
            Cuenta.create(vm.formData.cuenta,
              function(cuenta) {
                
                $log.debug(cuenta);
                vm.formData.colaborador.cuentaId = cuenta.id;

                Colaborador.create(vm.formData.colaborador,
                  function(colaborador) {
                    $log.debug(colaborador);
                    // success
                    $mdToast.show(
                      $mdToast.simple()
                      .content('Creado satisfactoriamente!')
                      .position('right')
                      .hideDelay(3000));
                    $state.transitionTo($state.current, $stateParams, {
                        reload: true,
                        inherit: false,
                        notify: true
                    });
                  },
                  function(error) {
                    $log.debug(error);
                  });
                
                $mdDialog.cancel();
                
              }, function(err) {                      
                $log.debug(err);
                // error
                $mdToast.show(
                $mdToast.simple()
                    .content('Error al guardar Colaborador')
                    .position('right')
                    .hideDelay(3000)
                );
              });
          }
          return false;
        }
      }
    }

  });
})();
'use strict';

(function(){
    
  angular.module('juridicaWebApp')
  .controller('ExpedientesCtrl', function ($location, Expediente) {
    var vm = this;
  	vm.expedientes = [];

  	Expediente
        .find({
          filter: {      
            include: [{asesor: 'colaborador'}, 'practicante', {solicitud: 'servicio'}]
          }
        })
        .$promise
        .then(function(expedientes) {
          vm.expedientes = expedientes;
        }, function (err) {
          // body...
        });
   
  })
  .controller('DetalleExpedienteCtrl', function ($stateParams, $mdToast, $mdDialog, Expediente) {
    var vm = this;
    vm.expediente = {};

    Expediente
        .findById({ 
          id: $stateParams.id,
          filter: {      
            include: [{asesor: 'colaborador'}, 'practicante','area', {solicitud: ['servicio', 'usuario']}]
          }
        })
        .$promise
        .then(function(expediente) {
          vm.expediente = expediente;
        }, function (err) {
          // body...
        });

    vm.showForm = function ($event, expedienteId) {

        var parentEl = angular.element(document.body);

        $mdDialog.show({
          parent: parentEl,
          targetEvent: $event,
          templateUrl:'./app/expedientes/closeForm.html',
          controller: CloseFormController,
          controllerAs: 'formCtrl',
          clickOutsideToClose: false
        });
        function CloseFormController($location, $mdDialog, $mdToast, $log, $state, $stateParams, Expediente) {
          var vm = this;
          vm.observaciones = '';

          vm.cerrar = function() {
            $mdDialog.hide();
            return false;
          };
          vm.cancelar = function() {
            $mdDialog.cancel();
            return false;
          };

          vm.procesar = function ($event) {
            $event.preventDefault();
            if (vm.observaciones.length > 0) {
              
              Expediente.prototype$updateAttributes(
                { id: expedienteId }, 
                { 
                  esActivo: false,
                  observaciones: vm.observaciones,
                  fechaCierre: new Date()
                });

              $mdToast.show(
                $mdToast.simple()
                .content('Expediente cerrado!')
                .position('right')
                .hideDelay(3000));

              $mdDialog.cancel();

              $state.transitionTo($state.current, $stateParams, {
                  reload: true,
                  inherit: false,
                  notify: true
              });
            }
          }

        }
      }  
  });
    
}());
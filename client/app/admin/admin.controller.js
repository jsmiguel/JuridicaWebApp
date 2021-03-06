'use strict';

(function () {

  angular.module('juridicaWebApp')
  .controller('AdminCtrl', function ($scope, $location, $mdDialog, Colaborador, TipoDocumento, Servicio, Motivo, Cuenta) {
    var vm = this;

    $scope.asesores = [];
    $scope.coordinadores = [];
    $scope.cuentas = [];
    $scope.tiposDocumento = [];
    $scope.servicios = [];
    $scope.motivos = [];


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

    Motivo
        .find()
        .$promise
        .then(function(data) {
          $scope.motivos = data;
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
        templateUrl:'./app/admin/templates/colaboradorForm.html',
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
          return;
        };
        vm.cancelar = function() {
          $mdDialog.cancel();
          return;
        };
        vm.procesar = function() {
          if (!$.isEmptyObject(vm.formData)) {
            //$log.debug(vm.formData);
            // call the create function from our service (returns a promise object)
            Cuenta
            .find({
                filter: {   
                  where: { 
                    username: vm.formData.cuenta.username
                  }
                }
              })
            .$promise
            .then(function(respose) {
              //success

              if (respose.length>0) {

                $mdToast.show(
                  $mdToast.simple()
                  .content('El carnet ingresado, ya existe!')
                  .position('right')
                  .hideDelay(3000));

                return;
              };

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
              
            }, function (err) {
              // error

            });

            
          }
          return false;
        }        
      }
    }

    vm.addDocumento = function ($event) {
      $event.preventDefault();
      var parentEl = angular.element(document.body);

      $mdDialog.show({
        parent: parentEl,
        targetEvent: $event,
        templateUrl:'./app/admin/templates/catalogForm.html',
        controller: DocumentoFormController,
        controllerAs: 'formCtrl',
        clickOutsideToClose: true
      });

      function DocumentoFormController ($mdDialog, $mdToast, $log, $state, $stateParams, TipoDocumento) {
        var vm = this;
        vm.catalog = 'Tipo de Documento';
        vm.nombre = '';

        vm.cerrar = function() {
          $mdDialog.hide();
          return;
        };
        vm.cancelar = function() {
          $mdDialog.cancel();
          return;
        };
        vm.procesar = function() {
          if (vm.nombre) {
            TipoDocumento.create({
              nombre: vm.nombre,
              esActivo: true
            })
            .$promise
            .then(function (respose) {
              // Success
              $mdToast.show(
                $mdToast.simple()
                .content('Creado satisfactoriamente!')
                .position('right')
                .hideDelay(3000));

              vm.cerrar();

              $state.transitionTo($state.current, $stateParams, {
                  reload: true,
                  inherit: false,
                  notify: true
              });
            }, function (err) {
              // Error
              $mdToast.show(
              $mdToast.simple()
                  .content('Error al guardar Documento')
                  .position('right')
                  .hideDelay(3000)
              );
            });
          }
        }
      }
    }

    vm.addServicio = function ($event) {
      $event.preventDefault();
      var parentEl = angular.element(document.body);

      $mdDialog.show({
        parent: parentEl,
        targetEvent: $event,
        templateUrl:'./app/admin/templates/catalogForm.html',
        controller: ServicioFormController,
        controllerAs: 'formCtrl',
        clickOutsideToClose: true
      });

      function ServicioFormController ($mdDialog, $mdToast, $log, $state, $stateParams, Servicio) {
        var vm = this;
        vm.catalog = 'Servicio';
        vm.nombre = '';

        vm.cerrar = function() {
          $mdDialog.hide();
          return;
        };
        vm.cancelar = function() {
          $mdDialog.cancel();
          return;
        };
        vm.procesar = function() {
          if (vm.nombre) {
            Servicio.create({
              nombre: vm.nombre,
              esActivo: true
            })
            .$promise
            .then(function (respose) {
              // Success
              $mdToast.show(
                $mdToast.simple()
                .content('Creado satisfactoriamente!')
                .position('right')
                .hideDelay(3000));

              vm.cerrar();

              $state.transitionTo($state.current, $stateParams, {
                  reload: true,
                  inherit: false,
                  notify: true
              });
            }, function (err) {
              // Error
              $mdToast.show(
              $mdToast.simple()
                  .content('Error al guardar Servicio')
                  .position('right')
                  .hideDelay(3000)
              );
            });
          }
        }
      }
    }

    vm.addMotivo = function ($event) {
      $event.preventDefault();
      var parentEl = angular.element(document.body);

      $mdDialog.show({
        parent: parentEl,
        targetEvent: $event,
        templateUrl:'./app/admin/templates/catalogForm.html',
        controller: MotivoFormController,
        controllerAs: 'formCtrl',
        clickOutsideToClose: true
      });

      function MotivoFormController ($mdDialog, $mdToast, $log, $state, $stateParams, Motivo) {
        var vm = this;
        vm.catalog = 'Motivo';
        vm.nombre = '';

        vm.cerrar = function() {
          $mdDialog.hide();
          return;
        };
        vm.cancelar = function() {
          $mdDialog.cancel();
          return;
        };
        vm.procesar = function() {
          if (vm.nombre) {
            Motivo.create({
              nombre: vm.nombre,
              esActivo: true
            })
            .$promise
            .then(function (respose) {
              // Success
              $mdToast.show(
                $mdToast.simple()
                .content('Creado satisfactoriamente!')
                .position('right')
                .hideDelay(3000));

              vm.cerrar();

              $state.transitionTo($state.current, $stateParams, {
                  reload: true,
                  inherit: false,
                  notify: true
              });
            }, function (err) {
              // Error
              $mdToast.show(
              $mdToast.simple()
                  .content('Error al guardar Motivo')
                  .position('right')
                  .hideDelay(3000)
              );
            });
          }
        }
      }
    }

  });
})();
'use strict';

(function(){

  function generateNumber (prefix, count) {
    var date = new Date();
    var month = (date.getMonth() + 1).toString();
    var year = date.getFullYear();
    var counter = (parseInt(count) + 1).toString();
    var number = prefix+'-'+ (month.length<2 ? '0'+month : month) + '-' + year +'-'
              + (counter.length==2 ? '0'+counter : (counter.length==1 ? '00'+counter : counter));

    return number;
  }

  angular.module('juridicaWebApp')
  .controller('SolicitudesCtrl', function ($scope, $location, Solicitud) {
    var vm = this;
    vm.solicitudes = [];
    
    Solicitud
      .find({
        filter: {      
          include: [{usuario: 'tipoDocumento'}, 'servicio']
        }
      })
      .$promise
      .then(function(data) {
        vm.solicitudes = data;
      });

  })
  .controller('DetalleSolicitudCtrl', function ($mdDialog, $mdToast, $stateParams, $location, $log, Solicitud, Expediente) {
    var vm = this;
    vm.solicitud = {};
    vm.usuario = {};
    vm.servicio = '';
    vm.motivo = '';
    vm.editable = false;

    Solicitud
      .findById({ 
        id: $stateParams.id,
        filter: {      
          include: ['usuario','servicio', 'motivo']
        }
      })
      .$promise
      .then(function(response) {
        vm.solicitud = response;
        vm.usuario = response.usuario;
        vm.servicio = response.servicio.nombre;
      });

      vm.updateUsuario = function () {
        vm.solicitud.actualizado = new Date();
        vm.solicitud.$save();
        vm.editable = false;
        $mdToast.show(
          $mdToast.simple()
            .content('Datos actualizados')
            .position('right')
            .hideDelay(3000)
        );
      }

      vm.showForm = function ($event, solicitudId) {

        var parentEl = angular.element(document.body);

        $mdDialog.show({
          parent: parentEl,
          targetEvent: $event,
          templateUrl:'./app/solicitudes/rechazoForm.html',
          controller: RechazoFormController,
          controllerAs: 'formCtrl',
          clickOutsideToClose: false
        });
        function RechazoFormController($location, $mdDialog, $mdToast, $log, $state, $stateParams, Solicitud, Motivo) {
          var vm = this;
          vm.motivos = [];

          vm.cerrar = function() {
            $mdDialog.hide();
            return false;
          };
          vm.cancelar = function() {
            $mdDialog.cancel();
            return false;
          };

          Motivo.find()
            .$promise
            .then(function (motivos) {
              // success
              vm.motivos = motivos;
            }, function (err) {
              // error
              $log.error(err);
            });

          vm.procesar = function ($event) {
            $event.preventDefault();
            if (!$.isEmptyObject(vm.formData)) {
              Solicitud.prototype$updateAttributes(
                { id: solicitudId }, 
                { 
                  esAprobado: false, 
                  motivoId: vm.formData.motivoId,
                  fechaCierre: new Date()
                });

              $mdToast.show(
                $mdToast.simple()
                .content('Procesado satisfactoriamente!')
                .position('right')
                .hideDelay(3000));

              vm.cerrar();

              $state.transitionTo($state.current, $stateParams, {
                  reload: true,
                  inherit: false,
                  notify: true
              });
            }
          }

        }
      }

      vm.crearExpediente = function($event,solicitudId) {
        $event.preventDefault();
        var parentEl = angular.element(document.body);

        $mdDialog.show({
          parent: parentEl,
          targetEvent: $event,
          templateUrl:'./app/solicitudes/expedienteForm.html',
          controller: ExpedienteFormController,
          controllerAs: 'formCtrl',
          clickOutsideToClose: false
        });

        function ExpedienteFormController($location, $mdDialog, $mdToast, $log, $state, $stateParams, Cuenta, Practicante, Area, Expediente) {
          var vm = this;
          vm.asesores = {};
          vm.practicantes = {};
          vm.areas = {};
          vm.expediente = {};
          vm.number = '';

          //$log.debug(solicitudId);

          Expediente.count({},
          function(expediente) {
            /* success */ 
            //$log.debug(expediente);
            
            vm.number = generateNumber('EXP',expediente.count);
            $log.debug(vm.number);
          },
          function(error) {
             /* error */ 
             $log.error(error);
          });

          Cuenta.find({
            filter: { 
              where: { 
                rolId: 3,
                esActivo: true
              },   
              include: ['colaborador'] 
              } 
          },
          function(cuentas) {
            /* success */ 
            vm.asesores = cuentas;
          },
          function(error) {
             /* error */ 
             $log.error(error);
          });

          Practicante.find({},
          function(practicantes) {
            /* success */ 
            vm.practicantes = practicantes;
          },
          function(error) {
             /* error */ 
             $log.error(error);
          });

          Area.find({
            filter: { 
              where: { 
                esActivo: true
              }
            } 
          },
          function(areas) {
            /* success */ 
            vm.areas = areas;
          },
          function(error) {
             /* error */ 
             $log.error(error);
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
              //$log.debug(vm.formData.asesor);

              //Expediente object
              vm.expediente.numero = vm.number;
              vm.expediente.practicanteId = vm.formData.practicante.id
              vm.expediente.asesorId = vm.formData.asesor.id;
              vm.expediente.areaId = parseInt(vm.formData.area);
              vm.expediente.solicitudId = solicitudId;
              vm.expediente.creado = new Date();
              vm.expediente.esActivo = true;

              vm.expediente.coordinadorId = Cuenta.getCurrentId(); //Current app user
              
              Expediente.create(vm.expediente)
                .$promise
                .then(function (expediente) {
                  // success
                  $log.debug(expediente);

                  Solicitud.prototype$updateAttributes(
                    { id: expediente.solicitudId }, 
                    { 
                      esAprobado: true,
                      fechaCierre: new Date()
                    });

                  $mdToast.show(
                    $mdToast.simple()
                    .content('Creado satisfactoriamente!')
                    .position('right')
                    .hideDelay(3000));
                  
                  $mdDialog.cancel();

                  //$location.path('/expedientes');
                  $state.go('detalleExpediente', { 'id': expediente.id })

                }, function (err) {
                  // error
                  $log.error(err);
                  $mdToast.show(
                    $mdToast.simple()
                      .content('Error al crear Expediente')
                      .position('right')
                      .hideDelay(3000)
                  );
                });
            }
            return false;
          }
        }
      }

  })
  .controller('NuevaSolicitudCtrl', function ($scope, $log, $stateParams, $mdToast, $location, Usuario, Solicitud, Servicio) {
      var vm = this;
      vm.usuario = {};
      vm.servicios = {};
      vm.formData = {};
      vm.number = '';

      Solicitud.count({},
      function(solicitud) {
        /* success */ 
        //$log.debug(solicitud);
        
        vm.number = generateNumber('SO',solicitud.count);
        $log.debug(vm.number);
      },
      function(error) {
         /* error */ 
         $log.error(error);
      });

      Usuario
      .findById({ 
        id: $stateParams.id,
        filter: { 
          limit: 10 ,       
          include: ['tipoDocumento']
        }
      })
      .$promise
      .then(function(data) {
        vm.usuario = data;
      });

      Servicio
        .find()
        .$promise
        .then(function(data) {
          vm.servicios = data;
        });

      vm.agregarSolicitud = function (usuarioId) {
      if (!$.isEmptyObject(vm.formData)) {

        vm.formData.numero = vm.number;
        vm.formData.usuarioId = usuarioId;
        vm.formData.creado = new Date();
        // call the create function from our service (returns a promise object)
        Solicitud
          .create(vm.formData,
            function(response) {
              // success
              $mdToast.show(
              $mdToast.simple()
                .content('Creado satisfactoriamente!')
                .position('right')
                .hideDelay(3000)
            );
            $location.path('/solicitudes');
            }, function(err) {
              console.log(err);
              // error
              $mdToast.show(
              $mdToast.simple()
                  .content('Error al crear la solicitud')
                  .position('right')
                  .hideDelay(3000)
              );
            });
        }
      }


  });

}());
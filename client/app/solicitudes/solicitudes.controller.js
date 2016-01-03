'use strict';

(function(){

  angular.module('juridicaWebApp')
  .controller('SolicitudesCtrl', function ($scope, $location, Solicitud) {

  	$scope.solicitudes = [];
    
    Solicitud
      .find({
        filter: {      
          include: [{usuario: 'tipoDocumento'}, 'servicio']
        }
      })
      .$promise
      .then(function(data) {
        $scope.solicitudes = data;
      });

  })
  .controller('DetalleSolicitudCtrl', function ($scope, $stateParams, $location, Solicitud) {
    
    Solicitud
      .findOne({ 
        id: $stateParams.id,
        filter: {      
          include: ['usuario','servicio']
        }
      })
      .$promise
      .then(function(response) {
        $scope.solicitud = response;
      });
  })
  .controller('NuevaSolicitudCtrl', function ($scope, $stateParams, $mdToast, $location, Usuario, Solicitud, Servicio) {
      $scope.usuario = [];
      $scope.servicios = [];

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
        $scope.usuario = data;
      });

      Servicio
        .find()
        .$promise
        .then(function(data) {
          $scope.servicios = data;
        });

      $scope.agregarSolicitud = function (usuarioID) {
      if (!$.isEmptyObject($scope.formData)) {

        $scope.formData.usuarioId = usuarioID;
        $scope.formData.fecha = new Date();
        // call the create function from our service (returns a promise object)
        Solicitud
          .create($scope.formData,
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
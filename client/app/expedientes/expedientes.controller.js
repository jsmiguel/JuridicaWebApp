'use strict';

(function(){
    
  angular.module('juridicaWebApp')
  .controller('ExpedientesCtrl', function ($scope, $location, Expediente) {
  	$scope.expedientes = [];

  	Expediente
        .find()
        .$promise
        .then(function(response) {
          $scope.expedientes = response;
        });

    $scope.detalleExpediente = function (expedienteID) {
      $location.path('/expedientes/detalle/' + expedienteID);
    }
   
  })
  .controller('DetalleExpedienteCtrl', function ($scope, $routeParams, $mdToast, Expedientes, Solicitudes, Print, API_URL) {
  	/*$scope.API_URL = API_URL;
  	$scope.expediente = [];

  	Expedientedetalle($routeParams.id)
	  .success(function(expediente {
	    $scope.expediente= expediente

	    Solicitudes.detalle(expedientesolicitud.id)
		  .success(function(solicitud) {
		    $scope.expedientesolicitud = solicitud;
		  });

      $scope.print = function (controller,id) {
      Print(controller,id)
        .success(function(data) {
          $mdToast.show(
              $mdToast.simple()
                .content('PDF Generado')
                .position('right')
                .hideDelay(3000)
            );
          var file = new Blob([data], {type: 'application/pdf'});
          var fileURL = URL.createObjectURL(file);
          window.open(fileURL);
          //window.location = fileURL;
          
        });
      }

	  });*/
   
  })
  .controller('NuevoExpedientetrl', function ($scope, $routeParams, $mdToast, $location, Solicitudes, Practicantes, Expediente) {
  	$/*scope.solicitud = [];
  	$scope.practicantes = [];
        
    Practicantes.listar()
      .success(function(data) {
        $scope.practicantes = data;
      });

	  Solicitudes.detalle($routeParams.id)
  	  .success(function(data) {
  	    $scope.solicitud = data;
  	  });

    $scope.agregarExpediente= function (solicitudID) {

    	$scope.formData = [];

		//f (!$.isEmptyObject($scope.formData)) {

			// call the create function from our service (returns a promise object)
		      Expediente.crear({ 
		      		solicitud: solicitudID,
		      		practicante: $scope.ctrl.practicante.id
		      	})
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
		              .content('Error al guardar la solicitud')
		              .position('right')
		              .hideDelay(3000)
		          );
		        });
		    
		    $location.path('/expedientes/');
	}*/
    
  });
    
}());
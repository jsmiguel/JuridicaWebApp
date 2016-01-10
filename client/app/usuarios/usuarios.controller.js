'use strict';

(function () {

  angular.module('juridicaWebApp')
  .controller('UsuariosCtrl', function ($scope, $location, Usuario) {
    $scope.usuario = [];
    
    Usuario
      .find({
          filter: {        
            include: ['tipoDocumento']
          }
        })
      .$promise
      .then(function(response) {
        $scope.usuarios = response;
      });

  })
  .controller('NuevoUsuarioCtrl', function ($scope, $mdToast, $location, TipoDocumento, EstadoCivil, Pais, Usuario) {
    
    $scope.tiposDocumento = [];
    $scope.estadoCivil = [];
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


    $scope.agregarUsuario = function () {
      if (!$.isEmptyObject($scope.formData)) {
        
        $scope.formData.creado = new Date();

        Usuario
          .create($scope.formData,
            function(response) {
              console.log(response);
              // success
              $mdToast.show(
              $mdToast.simple()
                .content('Creado satisfactoriamente!')
                .position('right')
                .hideDelay(3000)
            );
            $location.path('/usuarios');
            }, function(err) {
              console.log(err);
              // error
              $mdToast.show(
              $mdToast.simple()
                  .content('Error al guardar el usuario: ' + err.message)
                  .position('right')
                  .hideDelay(3000)
              );
            });
      }
    }
  })
  .controller('DetalleUsuarioCtrl', function ($scope, $log, $location, $stateParams, $mdToast, Usuario, Print) {
    var vm = this;
    vm.usuario = [];
    vm.editable = false;
    vm.tipoDocumento = '';

    Usuario
      .findById({ 
        id: $stateParams.id,
        filter: {        
            include: ['tipoDocumento']
          }
      })
      .$promise
      .then(function(usuario) {
        vm.usuario = usuario;
        vm.tipoDocumento = usuario.tipoDocumento.nombre;
      });

    vm.updateUsuario = function () {
      vm.usuario.actualizado = new Date();
      vm.usuario.$save();
      vm.editable = false;
      $mdToast.show(
        $mdToast.simple()
          .content('Datos actualizados')
          .position('right')
          .hideDelay(3000)
      );
    }

    $scope.print = function (controller,usuarioID) {
      Print(controller,usuarioID)
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
          //$window.location = fileURL;
          
        });
    }

  });
})();
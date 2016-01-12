'use strict';

(function () {

  angular.module('juridicaWebApp')

    .config( function ($ocLazyLoadProvider) {
      $ocLazyLoadProvider.config({
                loadedModules: ['juridicaWebApp'], modules: [
                    {
                      name: 'login',
                      files: [
                        './app/auth/auth.controller.js'
                      ],
                      cache: false
                    },
                    {
                      name: 'practicantes',
                      files: [
                        './app/practicantes/practicantes.controller.js'
                      ],
                      cache: false
                    },
                    {
                      name: 'usuarios',
                      files: [
                        './app/usuarios/usuarios.controller.js'
                      ],
                      cache: false
                    },
                    {
                      name: 'detalleUsuario',
                      files: [
                        './app/usuarios/usuarios.controller.js',
                        './app/print.service.js'
                      ],
                      cache: false
                    },
                    {
                      name: 'solicitudes',
                      files: [
                        './app/solicitudes/solicitudes.controller.js',
                      ],
                      cache: false
                    },
                    {
                      name: 'nuevaSolicitud',
                      files: [
                        './app/solicitudes/solicitudes.controller.js'
                      ],
                      cache: false
                    },
                    {
                      name: 'detalleSolicitud',
                      files: [
                        './app/solicitudes/solicitudes.controller.js',
                        './app/expedientes/expedientes.controller.js'
                      ],
                      cache: false
                    },
                    {
                      name: 'expedientes',
                      files: [
                        './app/expedientes/expedientes.controller.js',
                        './app/practicantes/practicantes.controller.js'
                      ],
                      cache: false
                    },
                    {
                      name: 'nuevoExpediente',
                      files: [
                        './app/expedientes/expedientes.controller.js'
                      ],
                      cache: false
                    },
                    {
                      name: 'detalleExpediente',
                      files: [
                        './app/practicantes/practicantes.controller.js'
                      ],
                      cache: false
                    },
                    {
                      name: 'admin',
                      files: [
                        './app/admin/admin.controller.js'
                      ],
                      cache: false
                    }
                ]
        });
    });

})();
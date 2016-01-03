'use strict';

(function (){
	angular.module('juridicaWebApp')
	  .config(function ($stateProvider) {
	    $stateProvider

	    	//Main Route
	    	.state('inicio', {
	    		url: '/',
		        templateUrl: './templates/main.html'
		    })

		    //Auth Routes
	    	.state('login', {
	    		url: '/login',
	        	templateUrl: './app/auth/login.html',
	        	controller: 'AuthCtrl',
	        	resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('login');
                                }]
	        	}
	      	})

	      	//Practicantes Routes
	      	.state('practicantes', {
	      		url: '/practicantes',
        		templateUrl: './app/practicantes/practicantes.html',
        		controller: 'PracticantesCtrl',
        		resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('practicantes');
                                }]
	        	}
		    })
		    .state('nuevoPracticante', {
		    	url: '/practicantes/form',
		        templateUrl: './app/practicantes/agregar.practicante.html',
		        controller: 'NuevoPracticanteCtrl'
		    })

		    //Usuarios Routes
		    .state('usuarios', {
		    	url: '/usuarios',
		    	templateUrl: './app/usuarios/usuarios.html',
		        controller: 'UsuariosCtrl',
		        resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('usuarios');
                                }]
	        	}
		    })
		    .state('nuevoUsuario', {
		    	url: '/usuarios/form',
		        templateUrl: './app/usuarios/agregar.usuario.html',
		        controller: 'NuevoUsuarioCtrl'
		    })
		    .state('detalleUsuario', {
		    	url: '/usuarios/:id',
		        templateUrl: './app/usuarios/detalle.usuario.html',
		        controller: 'DetalleUsuarioCtrl',
		        resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('detalleUsuario');
                                }]
	        	}
		    })

		    //Solicitudes routes
		    .state('solicitudes', {
		    	url: '/solicitudes',
		        templateUrl: './app/solicitudes/solicitudes.html',
		        controller: 'SolicitudesCtrl',
		        resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('solicitudes');
                                }]
	        	}
		    })
		    .state('detalleSolicitud', {
		    	url: '/solicitudes/detalle/:id',
		        templateUrl: './app/solicitudes/detalle.solicitud.html',
		        controller: 'DetalleSolicitudCtrl'
		    })
		    .state('nuevaSolicitud', {
		    	url: '/solicitudes/form/:id',
		        templateUrl: './app/solicitudes/agregar.solicitud.html',
		        controller: 'NuevaSolicitudCtrl',
		        resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('nuevaSolicitud');
                                }]
	        	}
		    })

		    //Expedientes Routes
		    .state('expedientes', {
		    	url: '/expedientes',
		        templateUrl: './app/expedientes/expedientes.html',
		        controller: 'ExpedientesCtrl',
		        resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('expedientes');
                                }]
	        	}
		    })
		    .state('detalleExpediente', {
		    	url: '/expedientes/detalle/:id',
		        templateUrl: './app/expedientes/detalle.expediente.html',
		        controller: 'DetalleExpedienteCtrl',
		        resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('detalleExpediente');
                                }]
	        	}
		    })
		    .state('nuevoExpediente', {
		    	url: '/expedientes/form/:id',
		        templateUrl: './app/expedientes/agregar.expediente.html',
		        controller: 'NuevoExpedienteCtrl',
		        resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('nuevoExpediente');
                                }]
	        	}
		    })
		    .state('admin', {
		    	url: '/admin',
		        templateUrl: './app/admin/admin.html',
		        controller: 'AdminCtrl',
		        controllerAs: 'vm',
		        resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('admin');
                                }]
	        	}
		    });
	  });
}());
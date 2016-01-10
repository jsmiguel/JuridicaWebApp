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
        		controllerAs: 'vm',
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

		    .state('detallePracticante', {
		    	url: '/practicantes/detalle/:id',
		        templateUrl: './app/practicantes/detalle.practicante.html',
		        controller: 'DetallePracticanteCtrl',
		        controllerAs: 'vm'
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
		        controllerAs: 'vm',
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
		        controllerAs: 'vm',
		        resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('solicitudes');
                                }]
	        	}
		    })
		    .state('detalleSolicitud', {
		    	url: '/solicitudes/detalle/:id',
		        templateUrl: './app/solicitudes/detalle.solicitud.html',
		        controller: 'DetalleSolicitudCtrl',
		        controllerAs: 'vm'
		    })
		    .state('nuevaSolicitud', {
		    	url: '/solicitudes/form/:id',
		        templateUrl: './app/solicitudes/agregar.solicitud.html',
		        controller: 'NuevaSolicitudCtrl',
		        controllerAs: 'vm',
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
		        controllerAs: 'vm',
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
		        controllerAs: 'vm',
		        resolve : {
	        		loadModule: ['$ocLazyLoad', function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('detalleExpediente');
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
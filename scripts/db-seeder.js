var async = require("async");
var app = require('../server/server');

//JSON Files
var areas = require("./data/areas.json");
var servicios = require("./data/servicios.json");
var tipoDocumento = require("./data/tipoDocumento.json");
var estadosCivil = require("./data/estadoCivil.json")
var motivos = require("./data/motivos.json");
var paises = require("./data/paises.json");

//Modelos
var Areas = app.models.Area;
var Motivo = app.models.Motivo;
var Servicio = app.models.Servicio;
var TipoDocumento = app.models.TipoDocumento;
var EstadoCivil = app.models.EstadoCivil;
var Pais = app.models.Pais;

function seedDB() {
	var self = this;
    self.beginProcess();
}

seedDB.prototype.beginProcess = function() {
    //Seed data into DB
	async.waterfall([
	  function(callback){
	  	Areas.create(areas, function(err, result) {
			if (err) {
				console.log('Falló al insertar datos - Áreas: ', err)
			} else {
				//Print result
   				console.log('Áreas insertadas:', result.length);
			};
			  
			callback(null)
		});
	  },
	  function(callback){
	  	Motivo.create(motivos, function(err, result) {
			if (err) {
				console.log('Falló al insertar datos - Motivos: ', err)
			} else {
				//Print result
   				console.log('Motivos insertados:', result.length);
			};
			  
			callback(null)
		});
	  },
	  function(callback){
	  	Servicio.create(servicios, function(err, result) {
			if (err) {
				console.log('Falló al insertar datos - Servicios: ', err)
			} else {
				//Print result
   				console.log('Servicios insertados:', result.length);
			};
			  
			callback(null)
		});
	  },
	  function(callback){
	    TipoDocumento.create(tipoDocumento, function(err, result) {
			if (err) {
				console.log('Falló al insertar datos - Tipos de documento: ', err)
			} else {
				//Print result
   				console.log('Tipos de documento insertados:', result.length);
			};
			  
			callback(null)
		});
	  },
	  function(callback){
	    EstadoCivil.create(estadosCivil, function(err, result) {
			if (err) {
				console.log('Falló al insertar datos - Estados civil: ', err)
			} else {
				//Print result
   				console.log('Estados civil insertados:', result.length);
			};
			  
			callback(null)
		});
	  },
	  function(callback){
	    Pais.create(paises, function(err, result) {
			if (err) {
				console.log('Falló al insertar datos - Paises: ', err)
			} else {
				//Print result
   				console.log('Paises insertados:', result.length);
			};
			  
			callback(null)
		});
	  }], function (err) {
	  	if (err) throw err;
	   	 process.exit(0);
	  }
	)

}

new seedDB();
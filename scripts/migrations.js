var app = require('../server/server');
var ds = app.dataSources.mysqlds;
var lbTables = [];

lbTables = [
	'Usuario',
	'Practicante',
	'Expediente',
	'Motivo',
	'Colaborador',
	'Cuenta',
	'Evento',
	'Solicitud',
	'Area',
	'TipoDocumento',
	'EstadoCivil',
	'Pais',
	'Servicio',
	'AccessToken',
	'ACL',
	'Rol'

];

ds.setMaxListeners(0);

ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + ']');
  console.log('Created in ', ds.adapter.name);
  ds.disconnect();

  process.exit();
});
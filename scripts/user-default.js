var app = require('../server/server');
var generatePassword = require('password-generator');

//Modelos
var Cuenta = app.models.Cuenta;
var Rol = app.models.Rol;

//JSON File
var roles = require('./data/roles.json');

//Generador de contraseña
var pass = generatePassword(6);
var pass = 'admin';

//Crear roles de la aplicación   
Rol.create(roles, function(err, roles) {

  for (var i = 0, len = roles.length; i < len; i++) {
    console.log('Rol creado: ', roles[i].nombre);
  }
  
  if (err) throw err;

  Cuenta.create({
    username: 'admin',
    email: 'juridica@ufg.edu.sv',
    password: pass,
    rolId: roles[0].id,
    esActivo: true,
    created: new Date()
    }, function(err, cuenta) {
    if (err) throw err;

      console.log('Cuenta creada por defecto:');
      console.log('- Carnet: ', cuenta.username);
      console.log('- Contraseña: ', pass);
      console.log('- Rol: ', roles[0].nombre);

      process.exit();
      
  });
});
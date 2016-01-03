module.exports = function(app) {
  var Cuenta = app.models.Cuenta;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  Cuenta.create({
    username: 'GP200108',
    email: 'js.migu3l@gmail.com',
    password: 'demo'
  }, function(err, cuenta) {
    if (err) throw err;

      console.log('Created cuenta:', cuenta);

      // create project 1 and make john the owner
      
      cuenta.colaborador.create({
        nombres: 'Miguel',
        apellidos: 'Garcia'
      }, function(err, colaborador) {
        if (err) throw err;

        console.log('Created colaborador:', colaborador);
      });

      //create the admin role
    
      Role.create({
        name: 'admin'
      }, function(err, role) {
        if (err) throw err;

        console.log('Created role:', role);

        //make bob an admin
        role.principals.create({
          principalType: RoleMapping.USER,
          principalId: cuenta.id
        }, function(err, principal) {
          if (err) throw err;

          console.log('Created principal:', principal);
        });
      });




    /*  var TWO_WEEKS = 60 * 60 * 24 * 7 * 2;
    Cuenta.login({
      username: 'GP200108',           // must provide email or "username"
      password: 'demo',               // required by default
      ttl: TWO_WEEKS                    // keep the AccessToken alive for at least two weeks
    }, function (err, token) { // => 1
      if(err) console.log(err);
      console.log(token);
    });*/

      
      Cuenta.login({username: 'GP200108', password: 'demo'}, function (err, token) {
         console.log(token);
      });





    });
};
module.exports = function(app) {
    app.models.Cuenta.login({
      email: 'js.migu3l@gmail.com',
      password: 'demo'
    }, 'user', function(err, token) {
      if (err)
        return console.log(err);

      token = token.toJSON();
    });
};
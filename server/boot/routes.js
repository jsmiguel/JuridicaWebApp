module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/usuario/:id/print', function(req, res) {
  	var PDFDocument = require('pdfkit'); // add pdfkit module to access it	
	var doc = new PDFDocument(); // create instance of PDFDocument
	var usuarioID = req.params.id;

	//Modelo
	var Usuario = app.models.Usuario;

	if (!usuarioID) {
	    	return res.json(401, {error: 'El Usuario ID es requerido'});
	}

    res.send('PDF Usuario: ' + req.params.id);
  });
  app.use(router);
};
  $('.ui.dropdown')
    .dropdown()
  ;
  //validaciones del formulario     
  $('#form-solicitud')
    .form({
      fields: {
          servicio: {
            identifier: 'servicio',
            rules: [
              {
                type   : 'empty',
                prompt : 'Por favor seleccione un servicio'
              }
            ]
          },
          descripcion: {
              identifier : 'descripcion',
              rules: [
              {
                  type   : 'empty',
                  prompt : 'Por favor introduzca la descripción del problema'
              }]
          },
          hechos: {
              identifier : 'hechos',
              rules: [
              {
                  type   : 'empty',
                  prompt : 'Por favor introduzca los hechos expuestos'
              }]
          },
          asesoria: {
              identifier : 'asesoria',
              rules: [
              {
                  type   : 'empty',
                  prompt : 'Por favor indique la asesoría brindada'
              }]
          }
      },
      inline : true,
      on     : 'blur'
    })
  ;
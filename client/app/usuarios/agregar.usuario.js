  $('.ui.dropdown')
    .dropdown()
  ;
  $('#tabs .item')
    .tab({
        path: false
    })
  ;
  $('.ui.checkbox')
    .checkbox()
  ;
  //validaciones del formulario     
  $('#form-usuarios')
    .form({
      fields: {
          nombres: {
              identifier : 'nombres',
              rules: [
              {
                  type   : 'empty',
                  prompt : 'Por favor introduzca los nombres'
              }]
          },
          apellidos: {
              identifier : 'apellidos',
              rules: [
              {
                  type   : 'empty',
                  prompt : 'Por favor introduzca los apellidos'
              }]
          },
          genero: {
            identifier: 'genero',
            rules: [
              {
                type   : 'empty',
                prompt : 'Por favor seleccione un género'
              }
            ]
          },
          tipoDocumento: {
              identifier : 'tipoDocumento',
              rules: [
              {
                  type   : 'empty',
                  prompt : 'Por favor seleccione un tipo de documento'
              }]
          },
          numDocumento: {
              identifier : 'numDocumento',
              rules: [
              {
                  type: 'empty',
                  prompt: 'Por favor introduzca el número de documento'
              },
              {
                  type   : 'number',
                  prompt : 'Debe ingresar solo números'
              }]
          },
          direccion: {
              identifier : 'direccion',
              rules: [
              {
                  type   : 'empty',
                  prompt : 'Por favor introduzca la dirección'
              }]
          }
      },
      inline : true,
      on     : 'blur'
    })
  ;
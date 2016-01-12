$('.ui.dropdown')
  .dropdown();

$('.ui.checkbox')
  .checkbox();

//validaciones del formulario  

var fieldsUsuarioForm =
{
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
    estadoCivil: {
        identifier : 'estadoCivil',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor seleccione un estado civil'
        }]
    },
    pais: {
        identifier : 'pais',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor seleccione un país'
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
                type   : 'regExp[/^[0-9_-]+?$/]',
                prompt : 'Debe ingresar solo números'
            },
            {
                type   : 'minLength[9]',
                prompt : 'Por favor ingrese al menos 9 digitos'
            },
            {
                type   : 'maxLength[18]',
                prompt : 'Por favor ingrese menos de 18 digitos'
            }]
    }, ingresoFamiliar: {
      identifier : 'ingresoFamiliar',
        rules: [
        {
            type   : 'empty',
            prompt : 'Por favor introduzca el ingreso familiar'
        },
        {
            type   : 'regExp[/^[0-9]+?$/]',
            prompt : 'Debe ingresar solo números enteros'
        }]
    }, nucleoFamiliar: {
      identifier: 'nucleoFamiliar',
       rules: [
        {
            type   : 'empty',
            prompt : 'Introduzca el número de integrantes familiar'
        },
        {
            type   : 'integer[1..15]',
            prompt : 'Debe ingresar solo números enteros, entre 1 y 15'
        }]
    }, telefono: {
      identifier : 'telefono',
        rules: [{
            type   : 'regExp[/^[0-9_-]+?$/]',
            prompt : 'Debe ingresar solo números'
        }]
    }, movil: {
      identifier : 'movil',
        rules: [{
            type   : 'regExp[/^[0-9_-]+?$/]',
            prompt : 'Debe ingresar solo números'
        }]
    },
    direccion: {
        identifier : 'direccion',
        rules: [{
            type   : 'empty',
            prompt : 'Por favor introduzca la dirección'
        }]
    }
}   


var fields =
{
    anio: {
      identifier: 'year',
      rules: [
        {
          type   : 'empty',
          prompt : 'Por favor seleccione el año'
        }
      ]
    },
    mes: {
      identifier: 'month',
      rules: [
        {
          type   : 'empty',
          prompt : 'Por favor seleccione el mes'
        }
      ]
    },
    dia: {
      identifier: 'day',
      rules: [
        {
          type   : 'empty',
          prompt : 'Por favor seleccione el día'
        }
      ]
    }
}

$('#form-usuarios')
  .form({
    inline : true,
    on     : 'blur',
    fields: fieldsUsuarioForm
});

console.log($('#form-usuarios').form('get value', 'year'));
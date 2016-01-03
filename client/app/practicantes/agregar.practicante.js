$('.ui.dropdown')
  .dropdown();

$('#tabs .item')
  .tab({
      path: false
});

$('.ui.checkbox')
  .checkbox();

$('.to-tab1').on('click', function () {
    $('#to-tab1').click();
        return false;
});

var fieldsInfoPersonal =
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
    estadoCivil: {
      identifier: 'estadoCivil',
      rules: [
        {
          type   : 'empty',
          prompt : 'Por favor seleccione el estado civil'
        }
      ]
    },
    pais: {
      identifier: 'pais',
      rules: [
        {
          type   : 'empty',
          prompt : 'Por favor seleccione el país'
        }
      ]
    },
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
    },
    residencia: {
        identifier : 'residencia',
        rules: [
        {
            type   : 'empty',
            prompt : 'Por favor introduzca la residencia'
        }]
    }
}

function isValidform(form, fields){
    //validaciones del formulario     
    $(form)
      .form({
        inline : true,
        on     : 'blur',
        fields: fields
    });

    return $(form).form('is valid')
}

function showTab(number, e){
    e.preventDefault();

    if(isValidform('#form-practicantes', fieldsInfoPersonal))
    {
        console.log('isValid');
        $('#to-tab' + number).click();
        return false;
    } else {
        console.log('invalid');
        return false;
    }
}


$('#practicaPrevia')
  .on('change', function() {
        alert('si');
        if(this.hasClass('checked')) { 
            alert('si');
        } else {  
            alert('no');
        } 
        return false;
  })
;
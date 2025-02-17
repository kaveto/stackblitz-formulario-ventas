const surveyJson = {
  "title": "FORMULARIO DE REPORTE DE VENTAS",
  "completedHtml": "<h3>Thank you for your feedback</h3>",
  "completedBeforeHtml": "<h3>Ya has completado el formulario</h3>",
  "completedHtmlOnCondition": [
    {
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h4>"
    },
    {
      "html": "<h3>Thank you for your feedback</h3> <h4>We are glad that you shared your ideas with us. They will help us make our product better.</h4>"
    }
  ],
  "loadingHtml": "<h3>Cargando formulario...</h3>",
  "pages": [
    {
      "name": "page1",
      "title": "INFORMACIÓN DEL TITULAR DEL PROCESO",
      "elements": [
        {
          "type": "text",
          "name": "radicado",
          "title": "Radicado del proceso"
        },
        {
          "type": "text",
          "name": "nombre_titular_proceso",
          "title": "Nombre completo del titular"
        },
        {
          "type": "text",
          "name": "corre_titular",
          "title": "Correo electrónico "
        },
        {
          "type": "text",
          "name": "telefono_titular",
          "title": "Número de teléfono "
        },
        {
          "type": "text",
          "name": "fecha_ingreso_titular",
          "title": "Fecha de ingreso al país",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "meses_pais",
          "startWithNewLine": false,
          "title": "No. meses en el país",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "origen_venta",
          "title": "Origen de la venta",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "tipo_proceso",
          "startWithNewLine": false,
          "title": "Tipo de Proceso"
        },
        {
          "type": "text",
          "name": "prioridad",
          "title": "Prioridad"
        },
        {
          "type": "text",
          "name": "forma_pago",
          "startWithNewLine": false,
          "title": "Forma de pago"
        },
        {
          "type": "text",
          "name": "fecha_venta",
          "title": "Fecha de la venta",
          "inputType": "date"
        },
        {
          "type": "text",
          "name": "valor_contrato",
          "startWithNewLine": false,
          "title": "Valor del Contrato (USD)",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "ref_pers_nombre",
          "title": "Referencia personal nombre completo",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "ref_pers_telefono",
          "title": "Referencia personal número de teléfono",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "question1",
          "title": "Asesor/closer"
        },
        {
          "type": "text",
          "name": "question2",
          "title": "Setter"
        }
      ]
    }
  ],
  "showQuestionNumbers": "off",
  "completeText": "Enviar"
};

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url_Radicado = urlParams.get('radicado');

function Results(sender) {
  const resultsData = JSON.stringify(sender.data);
  console.log('JSON =>' + resultsData);

  /*
  //identificación extranjeria titular
  let identificacion_titular = (sender.data.identificacion_titular[0].content).split(",");
  let base64_identificacion_titular = identificacion_titular[1];
  const resultsIdentificacion = JSON.stringify(base64_identificacion_titular);
  console.log('Jidentificación extranjeria titular =>'+ resultsIdentificacion);
  */
}

const survey = new Survey.Model(surveyJson);
document.addEventListener('DOMContentLoaded', function () {
  survey.setVariable('radicadoVar', url_Radicado);
  survey.render(document.getElementById('surveyContainer'));
  survey.onCompleting.add(function (sender, options) {
    options.allowComplete = confirm(
      '¿Estás seguro que deseas enviar el formulario?'
    );
  });
  survey.onComplete.add(Results);
});

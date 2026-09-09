/**
 * Receptor de respuestas — Levantamiento Climatic Confort Home
 *
 * Guarda cada envío del cuestionario en una hoja de cálculo de Google
 * y manda un correo de aviso.
 *
 * Instalación: ver INSTRUCCIONES.md
 */

// Nombre de la hoja de cálculo que se crea la primera vez.
var NOMBRE_HOJA = 'Levantamiento Climatic Confort — Respuestas';

// Correo que recibe el aviso. Deje '' para no recibir aviso.
var AVISAR_A = 'socomefrancis@gmail.com';


function doPost(e) {
  try {
    var payload = JSON.parse(e.parameter.payload);
    var hoja = obtenerHoja();

    hoja.appendRow([
      new Date(),
      payload.enviadoPor || '',
      payload.empresa || '',
      payload.resumen || '',
      JSON.stringify(payload.datos || {})
    ]);

    if (AVISAR_A) {
      MailApp.sendEmail({
        to: AVISAR_A,
        subject: 'Cuestionario llenado — ' + (payload.empresa || 'Cliente'),
        body: 'Llenado por: ' + (payload.enviadoPor || 'sin nombre') + '\n' +
              'Fecha: ' + new Date().toLocaleString('es-DO') + '\n' +
              'Hoja: ' + hoja.getParent().getUrl() + '\n\n' +
              '-------------------------------------------\n\n' +
              (payload.resumen || '')
      });
    }

    return HtmlService.createHtmlOutput('<p>Recibido. Gracias.</p>');
  } catch (err) {
    return HtmlService.createHtmlOutput('<p>Error: ' + err + '</p>');
  }
}


function doGet() {
  return HtmlService.createHtmlOutput('<p>Endpoint activo.</p>');
}


function obtenerHoja() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('SHEET_ID');
  var ss;

  if (id) {
    try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; }
  }
  if (!ss) {
    ss = SpreadsheetApp.create(NOMBRE_HOJA);
    props.setProperty('SHEET_ID', ss.getId());
    var h = ss.getActiveSheet();
    h.appendRow(['Fecha', 'Llenado por', 'Empresa', 'Resumen', 'Datos (JSON)']);
    h.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#006BAE').setFontColor('#FFFFFF');
    h.setFrozenRows(1);
    h.setColumnWidth(1, 150);
    h.setColumnWidth(2, 160);
    h.setColumnWidth(4, 700);
  }
  return ss.getActiveSheet();
}


/** Ejecute esta función una vez para ver el enlace de la hoja en el registro. */
function verHoja() {
  Logger.log(obtenerHoja().getParent().getUrl());
}

// CONVERTOR M A CM //
let centimetros = Number(prompt("Ingresar nùmero en centimetros"));
let metros = centimetros / 100;

function convertidorCentimetros() {
  alert("Conversion: Equivale a " + metros + "mts ");
}

convertidorCentimetros();

// CONVERTOR CM A M //

let metrosCentimetros = Number(prompt("Ingresar nùmero en centimetros"));
let centimetrosAMetros = metrosCentimetros + 100;

function convertidorMetros() {
  alert("Conversion: Equivale a " + centimetrosAMetros + "mts ");
}

convertidorMetros();

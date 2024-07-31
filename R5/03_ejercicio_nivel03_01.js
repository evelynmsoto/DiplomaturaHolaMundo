function retornarSumatoria(arregloNumerico) {
  let sumatoria = 0;
  let cantidadDeElementos = arregloNumerico.length;
  for (let indice = 0; indice < cantidadDeElementos; indice++) {
    sumatoria = sumatoria + arregloNumerico[indice];
  }
  return sumatoria;
}

let arregloUno = [21, 16, 2, 25, 21, 25];
let resultado = retornarSumatoria(arregloUno);
alert(resultado);

//BUSCANDO LA PRIMER OCURRENCIA DE NUMEROS
function buscarPrimerOcurrenciaNumero(arregloNumerico, numeroBuscado) {
  let cantidadDeElementos = arregloNumerico.length;
  let indice = 0;
  while (
    indice < cantidadDeElementos &&
    numeroBuscado !== arregloNumerico[indice]
  ) {
    indice = indice + 1;
  }
  return indice;
}

let ordenNumero = buscarPrimerOcurrenciaNumero(arregloUno, 2);
alert(ordenNumero);

//BUSCANDO LA ULTIMA OCURRENCIA DE NUMEROS
function buscarUltimaOcurrenciaNumero(arregloNumerico, numeroBuscado) {
  let cantidadDeElementos = arregloNumerico.length;
  let ocurrencias = [];
  let ordenOcurrencia = 0;
  for (let indice = 0; indice < cantidadDeElementos; indice++) {
    if (arregloNumerico[indice] === numeroBuscado) {
      ocurrencias.push(ordenOcurrencia);
    }
    ordenOcurrencia = ordenOcurrencia + 1;
  }
  return ocurrencias[ocurrencias.length - 1];
}

let arregloDos = [21, 16, 2, 25, 21, 25, 34, 1, 5, 25, 45, 21, 3];
let ultimaOcurrencia = buscarUltimaOcurrenciaNumero(arregloDos, 25);
alert(ultimaOcurrencia);

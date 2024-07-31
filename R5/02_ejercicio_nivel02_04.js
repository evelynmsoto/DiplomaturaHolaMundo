function esUnTrayecto(unaPalabra) {
  return (
    unaPalabra === "entorno" ||
    unaPalabra === "secuencias" ||
    unaPalabra === "modularizacion" ||
    unaPalabra === "alternativas" ||
    unaPalabra === "repetitivas" ||
    unaPalabra === "arreglos"
  );
}

function cargarTrayectosDiplo(cantidadDeTrayectos) {
  let trayectoAgregaUsuario;
  let indice;
  let arregloTrayectos = Array(cantidadDeTrayectos);

  for (indice = 0; indice < cantidadDeTrayectos; indice++) {
    trayectoAgregaUsuario = prompt(
      "Por favor ingrese un trayecto de la diplomatura 'Hola Mundo'"
    );
    if (esUnTrayecto(trayectoAgregaUsuario.toLowerCase())) {
      arregloTrayectos[indice] = trayectoAgregaUsuario;
    } else {
      arregloTrayectos[indice] = "N/C";
    }
  }
  return arregloTrayectos;
}

function visualizarArreglo(arregloNumeros, cantidadDeElementos) {
  for (let indice = 0; indice < cantidadDeElementos; indice++) {
    alert(
      "En la posición " +
        indice +
        " se encuentra el elemento: " +
        arregloNumeros[indice]
    );
  }
}

let cuantosTrayectos = Number(
  prompt("Cuantos trayectos de la diplomatura desea agregar al arreglo?")
);

let arregloVocales = cargarTrayectosDiplo(cuantosTrayectos);
visualizarArreglo(arregloVocales, cuantosTrayectos);

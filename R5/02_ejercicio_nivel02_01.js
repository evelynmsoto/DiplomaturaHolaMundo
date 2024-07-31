let arregloUno = Array(6);
arregloUno = [21, 16, 2, 25, 21, 25];

function visualizarArreglo(arregloNumeros, cantidadDeElementos) {
  for (let indice = 0; indice < cantidadDeElementos; indice++) {
    alert(
      "En la posición " +
        indice +
        " se encuentra el número: " +
        arregloNumeros[indice]
    );
  }
}

visualizarArreglo(arregloUno, 6);

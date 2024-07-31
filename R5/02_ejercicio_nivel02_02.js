function cargarNumerosPares(cantidadDeNumeros) {
  let numeroAgregaUsuario;
  let indice;
  let arregloNumerosPares = Array(cantidadDeNumeros);

  for (indice = 0; indice < cantidadDeNumeros; indice++) {
    do {
      numeroAgregaUsuario = Number(prompt("Por favor ingrese un numero par"));
      if (numeroAgregaUsuario % 2 !== 0) {
        alert("El número agregado no es par");
      }
    } while (numeroAgregaUsuario % 2 !== 0);
    arregloNumerosPares[indice] = numeroAgregaUsuario;
  }
  return arregloNumerosPares;
}

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

let cuantosNumeros = Number(
  prompt("Cuantos elementos desea agregar al arreglo?")
);

let arregloPar = cargarNumerosPares(cuantosNumeros);

visualizarArreglo(arregloPar, cuantosNumeros);

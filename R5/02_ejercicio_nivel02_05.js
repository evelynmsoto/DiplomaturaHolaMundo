function cargarResultado(cantidadDeElementos) {
  let elementoAgregaUsuario;
  let indice;
  let arregloResultadoTrivia = Array(cantidadDeElementos);

  for (indice = 0; indice < cantidadDeElementos; indice++) {
    elementoAgregaUsuario = prompt(
      "Por favor ingrese 'true' si ganó la trivia o 'false' si perdió."
    );
    while (
      elementoAgregaUsuario !== "true" &&
      elementoAgregaUsuario !== "false"
    ) {
      elementoAgregaUsuario = prompt(
        "Por favor recuerde que los valores aceptados son 'true' o 'false'."
      );
      arregloResultadoTrivia[indice] = elementoAgregaUsuario;
    }
  }
  return arregloResultadoTrivia;
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

let cuantosElementos = Number(
  prompt("Cuantos elementos desea agregar al arreglo?")
);

let arregloTrivia = cargarResultado(cuantosElementos);

visualizarArreglo(arregloTrivia, cuantosElementos);

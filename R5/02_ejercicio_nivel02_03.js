function esVocalMayuscula(unaLetra) {
  return (
    unaLetra === "A" ||
    unaLetra === "E" ||
    unaLetra === "I" ||
    unaLetra === "O" ||
    unaLetra === "U"
  );
}

function cargarVocalesMayusculas(cantidadDeLetras) {
  let letraAgregaUsuario;
  let indice;
  let arregloVocalesMayusculas = Array(cantidadDeLetras);

  for (indice = 0; indice < cantidadDeLetras; indice++) {
    letraAgregaUsuario = prompt("Por favor ingrese una letra");
    if (esVocalMayuscula(letraAgregaUsuario)) {
      arregloVocalesMayusculas[indice] = letraAgregaUsuario;
    } else {
      arregloVocalesMayusculas[indice] = "-";
    }
  }
  return arregloVocalesMayusculas;
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

let cuantasLetras = Number(prompt("Cuantas letras desea agregar al arreglo?"));

let arregloVocales = cargarVocalesMayusculas(cuantasLetras);
visualizarArreglo(arregloVocales, cuantasLetras);

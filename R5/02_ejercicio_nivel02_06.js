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

//FUNCIONES PARA VOCALES MAYUSCULAS
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

//FUNCIONES PARA TRAYECTOS DE LA DIPLOMATURA
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

//FUNCIONES PARA RESULTADOS DE TRIVIA
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
    }
    arregloResultadoTrivia[indice] = elementoAgregaUsuario;
  }
  return arregloResultadoTrivia;
}

//FUNCION PARA ELEGIR Y ACCEDER A LAS ANTERIORES
function menuDeFunciones(funcionElegida, cantidadDeElementos) {
  let respuesta;
  switch (funcionElegida) {
    case 1:
      respuesta = cargarNumerosPares(cantidadDeElementos);
      break;
    case 2:
      respuesta = cargarVocalesMayusculas(cantidadDeElementos);
      break;
    case 3:
      respuesta = cargarTrayectosDiplo(cantidadDeElementos);
      break;
    case 4:
      respuesta = cargarResultado(cantidadDeElementos);
      break;
    default:
  }
  return respuesta;
}

//FUNCION PARA VISUALIZAR LOS ARREGLOS
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

function menuPrincipal() {
  let queFuncion;
  let arregloActual;
  let cantidadDeElementos;
  do {
    //pregunto que arreglo armo
    queFuncion = Number(
      prompt(
        "Que funcion quiere usar? \n1. Numeros pares \n2. Vocales mayusculas \n3. Trayectos \n4. Resultados trivia \n5. Visualizar ultimo arreglo \n6. Cerrar"
      )
    );
    if (queFuncion !== 5 && queFuncion !== 6) {
      cantidadDeElementos = Number(prompt("Cuantos elementos queres agregar?"));
      arregloActual = menuDeFunciones(queFuncion, cantidadDeElementos);

      //visualizo el arreglo
      visualizarArreglo(arregloActual, cantidadDeElementos);
    } else if (queFuncion === 5) {
      visualizarArreglo(arregloActual, cantidadDeElementos);
    }
  } while (queFuncion !== 6);
  alert("Gracias por usar este menu!");
}

menuPrincipal();

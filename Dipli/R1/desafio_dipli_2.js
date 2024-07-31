function saludoBienvenida(nombre)
alert("Bienvenid@, soy Dipli. Mucho gusto ❤");
alert(
  "La regla es fácil, debes adivinar qué número del 1 al 50 estoy imaginando ¿Jugamos?"
);
alert("Comencemos... piensa en un número");
alert("El número que imagine es 7 ¿acertaste?");
alert("¿Te gustaría volver a jugar?");


let unNumeroAleatorio;
let unValorMax = 50;
let unValorMin = 1;
let nombreJugador;

unNumeroAleatorio = Math.floor(
  Math.random() * (unValorMax - unValorMin + 1) + unValorMin
);

alert("Buenísimo, adivina nuevamente en qué número estoy pensando");
alert("El número que imagine es " + unNumeroAleatorio + " ¿Acertaste?");
alert("¿Te animas a jugar una vez más?");

//EJERCICIO 3

let numero;
let diferencia;

nombreJugador = prompt("Antes de seguir me gustaría saber tu nombre");
alert("Hola, " + nombreJugador + " mucho gusto, ¿continuamos?");
numero = Number(prompt("¿En qué número estoy pensando?"));
alert("El número que pensé es " + unNumeroAleatorio);
diferencia = unNumeroAleatorio - numero;
alert("Fallaste por " + diferencia + " numeros");
alert("Espero que en la próxima estés mejor ☹ ");

// EJERCICIO 4

let resultado;

resultado = unNumeroAleatorio < numero;
alert("¿Ganó Dipli? : " + resultado);

resultado = unNumeroAleatorio === numero;
alert("¿Ganó " + nombreJugador + "? : " + resultado);

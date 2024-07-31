//DESAFIO DIPLI

//Mensaje Bienvenida
function mensajeBienvenida() {
  alert("Holaa! Soy Dipli, BIENVENID@ AL JUEGO!!! ʕ•́ᴥ•̀ʔ");
}
mensajeBienvenida();

let nombreJugador = prompt("Me gustaría saber tu nombre");
nombreJugador();

//Mensaje inicio juego

function saludarJugador(nombreJugador) {
  let inicioJuego =
    "Hola " + nombreJugador + " estas preparad@ para empezar el juego?";
  alert(inicioJuego);
}
saludarJugador(nombreJugador);

//Mensaje Reglas del juego
function reglasJuego() {
  alert(
    "La regla es fácil, debes adivinar en cuál número del 1 al 50 estoy imaginando ¿Jugamos?"
  );
  alert("¿En cuál número estoy pensando?");
}
reglasJuego();

let intentoJugador = Number(
  prompt(
    "Ingresa el número que adivinaste" +
      "\n Ingresa en la caja que está abajo el número que adivinaste"
  )
);
intentoJugador();

function intentosJuego(intentoJugador) {
  let resultado =
    "El número que imagine es: " + intentoJugador + " ¿acertaste?";
  alert(resultado);
}
intentosJuego(intentoJugador);

//Número que piensa Dipli
function NumeroDipli() {
  let unValorMax = 50;
  let unValorMin = 1;
  let unNumeroAleatorio = Math.floor(
    Math.random() * (unValorMax - unValorMin + 1) + unValorMin
  );
  return unNumeroAleatorio;
}
NumeroDipli();

//Número que piensa Dipli

function Jugar(unValorMax, unValorMin) {
  let numerojugador = Number(
    prompt(
      "Adivina en qué número del 1 al 50 estoy pensando y escribelo en el cuadrito para saber el resultado"
    )
  );
  let numdipli = Number(
    Math.floor(Math.random() * (unValorMax - unValorMin + 1) + unValorMin)
  );
  alert("El número que estaba pensando es: " + NumeroDipli);
  let dipliGano = numerojugador !== NumeroDipli;
  let jugadorGano = numerojugador === NumeroDipli;
  let diferenciaResultados = numerojugador - NumeroDipli;
  alert(
    "Dipli gano: " +
      dipliGano +
      "\n Jugador gano: " +
      jugadorGano +
      "\nEl número de Dipli era: " +
      numdipli +
      "El número que ingresaste fue: " +
      numerojugador +
      "\n Fallaste por: " +
      diferenciaResultados +
      "\n Espero que en la próxima estés mejor! sigue intentando 😉👌"
  );
}
Jugar();

//Intentos para jugar con DIPLI

alert("¡Primer intento! ᕙ(`▿´)ᕗ");
Jugar(50, 1);
alert("sigue intentandolo, tu puedes!!! 😁");

alert("¡Segundo intento! (ง︡'▿'︠)ง");
Jugar(50, 1);
alert("No te rindas, te quedan un último intento!!! 😬");

alert("¡Tercer intento! ٩(˘◡˘)۶");
Jugar(50, 1);
alert("Muchas gracias por jugar con Dipli ʕ•́ᴥ•̀ʔっ");

//Mensaje BIENVENIDA + REGLAS JUEGO // ok
function mensajeBienvenida() {
  let nombreJugador = prompt("Me gustaría saber tu nombre");
  alert(
    "Hola " +
      nombreJugador +
      ". Soy Dipli, Bievenido/a a Jugando con Dipli ʕ•́ᴥ•̀ʔ"
  );
  alert(
    "La regla del juego es fácil, debes adivinar en cuál número del 1 al 50 estoy imaginando ¿Jugamos?"
  );
}

// Ingreso de datos Jugador // ok
function numeroJugador() {
  let numeroElegido;
  numeroElegido = Number(
    prompt("Ingresa en la cajita de abajo el número que está pensando Dipli")
  );
  return numeroElegido;
}

// Numero aleatorio de Dipli
function numeroDipli() {
  const unValorMax = 50;
  const unValorMin = 1;
  let unNumeroAleatorio = Math.floor(
    Math.random() * (unValorMax - unValorMin + 1) + unValorMin
  );
  return unNumeroAleatorio;
}

function jugandoConDipli(numeroJugador, numeroDipli) {
  let resp;
  numeroDipli = numeroDipli(50, 0);
  if (numeroDipli === numeroJugador) {
    resp = alert("✨ FELICITACIONES, GANASTE EL JUEGO ✨");
  } else {
    resp = alert("Gano Dipli. Sigue intentandolo, tu puedes!!! 😉👌");
    numeroJugador = numeroJugador();
    if (numeroDipli === numeroJugador) {
      resp = alert("✨ FELICITACIONES, GANASTE EL JUEGO ✨");
    } else {
      resp = alert("Gano Dipli nuevamente. te quedan un último intento!!! 😬");
      numeroJugador = numeroJugador();
      if (numeroDipli === numeroJugador) {
        resp = alert("✨ FELICITACIONES, GANASTE EL JUEGO ✨");
      } else {
        resp = alert(
          "⚠️ GAME OVER ⚠️ Muchas gracias por jugar con Dipli. Espero que en la próxima estés mejor! ᕙ(`▿´)ᕗ"
        );
      }
    }
  }
  return resp;
}

mensajeBienvenida();
numeroJugador();
numeroDipli();
jugandoConDipli();

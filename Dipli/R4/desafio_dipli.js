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

jugandoConDipli();

function repe() {
  let vidasQuedan;
  let REM = 0;
  let gano = false;
  vidasQuedan = vidasActuales;
  do {
    vidasQuedan--;
    REM = REM + 150;
    if (numeroDipli === numeroingresado) {
      alert("Felicitaciónes has ganado, Gracias por jugar conmigo");
      gano = true;
    }
    if (vidasQuedan < 10 || vidasQuedan > 0) {
      alert("tenes  " + vidasQuedan + " vidas. Puedes jugar");
      comparacion();
    } else {
      alert(
        "Ya no te quedan vidas deisponibles. Espero que tengas mas suerte para la proxima."
      );
    }
    if (REM < 1000) {
      alert("Nivel actual de REM: " + REM);
    }
    if (REM === 1500) {
      alert(
        "REM = 1500. Cuenta regreciva para detonación nuclear. \n - 3 \n -2 \n -1 \n BOOM! "
      );
      alert("Lo siento has muerto :) ");
    } else {
      alert("Nivel actual de REM: " + REM + " PELIGRO nivel inestable.");
    }
  } while ((vidasQuedan > 0) & !gano);
}
saludo();
repe();

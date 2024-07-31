let mensajeDipli = "";
let unValorMax = 10;
let unValorMin = 0;
let numeroJugador = 0;
let contadorVidas = 0;
let contadorRadioactivo = 0;
let unNumeroAleatorio = Math.floor(
  Math.random() * (unValorMax - unValorMin + 1) + unValorMin
);

function jugandoDipli() {
  if (numeroJugador === unNumeroAleatorio) {
    contadorVidas = 11;
    mensajeDipli = "✨ FELICITACIONES, GANASTE EL JUEGO ✨";
  } else {
    mensajeDipli = "Gano Dipli. Sigue intentandolo, tu puedes!!! 😉👌";
    vidaRestante = contadorVidas - 1;
    Radioactividad = contadorRadioactivo + 150;
  }
}

unValorMax();
unValorMin();
numeroJugador();
contadorVidas();
contadorRadioactivo();
unNumeroAleatorio();
jugandoDipli();
mensajeDipli();

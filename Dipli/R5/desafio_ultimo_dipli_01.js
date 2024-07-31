//Seccion mensaje bienvenida
function mensajeBienvenida() {
  let nombreJugador = prompt("Me gustaría saber tu nombre 🤗");
  alert(
    "Hola " +
      nombreJugador +
      " 😎  Soy Dipli, Bievenido/a a Jugando con Dipli 👾"
  );
  alert(
    "Las reglas del juego son faciles \n 👉 Regla 01: Debes adivinar en cuál número del 1 al 50 estoy imaginando \n 👉 Regla 02: Debes elegir la cantidad de vidas que creas necesarias para derrotarme \n 👉 Regla 03: En cada partida que falles, aumentará tu nivel de radioactividad \n ⚠️ DANGER! Si superas los 1500 REM, mueres ⚠️ \n ¿Jugamos? ♥️"
  );
}

//Seccion numeros aleatorios
function numeroDipli() {
  let valorMax = 50;
  let valorMin = 1;
  let numeroDipli = Math.floor(
    Math.random() * (valorMax - valorMin + 1) + valorMin
  );
  return numeroDipli;
}

//Seccion ingreso datos
function vidaJugador() {
  let vidas = Number(
    prompt("Por favor, ingresa la cantidad de vidas que deseas: ")
  );
  return vidas;
}
//Seccion principal juego
let vidasRestante = vidaJugador();

let numeroRamdom = numeroDipli();
let cantIntentos = ["#"];
juegoDipli(cantIntentos, numeroRamdom, vidasRestante);

function juegoDipli(arreglo, objetivo, tamaño, cantVidas) {
  let numeroElegido;
  let gano = false;
  let nivelRadioactividad = 0;
  do {
    numeroElegido = Number(
      prompt(
        "Ingresa en la cajita de abajo el número que está pensando Dipli 👀"
      )
    );
    arreglo.push(numeroElegido);
    if (numeroElegido === objetivo) {
      alert(
        "✨ FELICITACIONES, GANASTE EL JUEGO ✨🥳 \n Te desafío que lo intentes nuevamente con menos vidas 🤠"
      );
      gano = true;
    } else {
      vidasRestante = vidasRestante - 1;
      nivelRadioactividad = nivelRadioactividad + 1500 / tamaño;
      alert(
        "Te quedan solo " +
          vidasRestante +
          " vidas. \n Sigue intentandolo, tu puedes!!! 💪"
      );

      if (nivelRadioactividad < 1500) {
        alert("Nivel de radioactividad actual: " + nivelRadioactividad) + " ");
      } else {
        alert(
          "Nivel de radioactividad actual: " +
            nivelRadioactividad +
            " Los intentos ingresados no fueron suficientes para ganarme 😎 y produciste la explosión nuclear de Dipli. \n El número que estaba pensado era: " +
            numeroRamdom
        );
      }
    }
  } while (!gano && nivelRadioactividad < 1500);
  cantIntentos(arreglo, tamaño, objetivo);
}

vidaJugador();
numeroDipli();
juegoDipli();
vidasRestante();

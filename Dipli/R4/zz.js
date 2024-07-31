function actualizarEnergia(energiaActual, codigoComando) {
  let energiaRestante = 0;

  switch (codigoComando) {
    case 1:
      energiaRestante = energiaActual - 5;
      alert(
        "Dipli hizo un saltito, le quedan " +
          energiaRestante +
          " unidades de energía"
      );
      break;
    case 2:
      energiaRestante = energiaActual - 7;
      alert(
        "Dipli hizo una patada ninja, le quedan " +
          energiaRestante +
          " unidades de energía"
      );
      break;
    case 3:
      energiaRestante = energiaActual - 4;
      alert(
        "Dipli hizo un pasito de baile, le quedan " +
          energiaRestante +
          " unidades de energía"
      );
      break;
    case 4:
      energiaRestante = energiaActual - 6;
      alert(
        "Dipli se hizo el muertito, le quedan " +
          energiaRestante +
          " unidades de energía"
      );
      break;
    case 5:
      energiaRestante = energiaActual - 30;
      alert(
        "Dipli se auto-destruyo nuclearmente, le quedan " +
          energiaRestante +
          " unidades de energía. RIP Dipli"
      );
      break;
    default:
      energiaRestante = alert("El número que ingresaste no es valido");
  }

  return energiaRestante;
}

let energiaDipli = 30;

while (energiaDipli > 0) {
  let energiaRestante = Number(
    prompt(
      "¿Qué acción queres que haga Dipli? Seleccioná el número que corresponda a la acción \n #1: Saltito \n #2: Patada Ninja \n #3: Pasito de baile \n #4: Hacerse el muertito \n #5: Auto-destrucción nuclear"
    )
  );
  energiaDipli = actualizarEnergia(energiaDipli, energiaRestante);
}

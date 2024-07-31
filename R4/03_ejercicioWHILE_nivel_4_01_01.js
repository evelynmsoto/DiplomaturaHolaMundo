// Nivel 1:
/*A- CONTROL REMOTO
Como sabemos, Dipli funciona a batería, la cual, si está cargada al 100%, posee 30 unidades de energía. 
Pero lo que no sabías es que, por suerte, tiene un modo Control Remoto. Cada movimiento consume una cantidad 
determinada de niveles de energía. Esta es la tabla de consumo:

COMANDO	       ACCIÓN	                   CONSUMO EN UNIDADES
#1	           Saltito	                   5 unidades
#2	           Patada Ninja	               7 unidades
#3	           Pasito de Baile	           4 unidades
#4	           Hacerse el muertito	       6 unidades
#5	           Autodestrucción nuclear	   30 unidades

Tu misión consiste en desarrollar un módulo llamado actualizarEnergia(energiaActual, codigoComando) que retorna 
la cantidad de unidades de energía restante. Por ejemplo, si invocamos a actualizarEnergia(30, 5) nos retorna 0, 
porque el comando #5 consume 30 unidades de energía y se restan a la cantidad actual que ingresó como parámetro 
(30 unidades actuales - 30 unidades que consume el comando #5).
*/

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

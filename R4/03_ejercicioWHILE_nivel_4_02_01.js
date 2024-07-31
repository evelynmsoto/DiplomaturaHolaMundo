// Nivel 2: Liquidación de sueldos recargada!
/* Ohh no!!! la empresa prohibió las horas extras!!!
Ahora vamos a tener que modificar nuestro liquidador de sueldos. Esta vez, vamos a liquidar 
sueldos siempre y cuando no aparezca el ítem #1, de horas extras. Si alguno de los ítems llega 
a ser el #1, debemos detener la liquidación. No podemos liquidar un ítem #1... mucho cuidado!!
*/

function liquidaItem(item, cantidad) {
  let mensaje = "";
  switch ((item, cantidad)) {
    case 1:
      mensaje =
        "El importe a cobrar por realizar horas extras es: $" + 100 * cantidad;
      break;
    case 2:
      mensaje =
        "El importe a cobrar por realizar Guardia de fin de semana es: $" +
        100 * cantidad;
      break;
    case 3:
      mensaje =
        "El importe a cobrar por hora desarrollo web es: $" + 300 * cantidad;
      break;
    case 4:
      mensaje =
        "El importe a cobrar por Analisis de requerimientos es: $" +
        300 * cantidad;
      break;
    case 5:
      mensaje =
        "TEl importe a cobrar por Diseño de software es: $" + 200 * cantidad;
      break;
    default:
      mensaje = "Número ingresado no válido";
  }
  return mensaje;
}

// pedido de dato al usuario
let item = Number(
  prompt(
    "Ingrese el número de item que quiere calcular. \n #1 Horas Extras \n #2 Guardia de fin de semana. \n #3 Hora de Desarrollo Web. \n #4 Análisis de Requerimientos. \n #5 Diseño de Software."
  )
);
let cantidad = Number(
  prompt("Ingresar la cantidad por la que quieres multiplicar tu item")
);

let respuesta = liquidaItem(item, cantidad);
alert(respuesta);

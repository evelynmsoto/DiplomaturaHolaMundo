/* Nivel 3: Notificando Salidas
Es necesario programar una aplicacion para el celular, que indique sólo a los 
usuarios mayores de edad si puede salir de su domicilio, de acuerdo a la terminación
 de su dni (último número) y el día de la semana. La aplicación ya está armada, pero 
 falta lo más importante... el código que controla y le avisa al usuario si puede salir o no.
Para esto el usuario ingresa su edad, ultimo número del dni y un número con el día de la semana:
1: Lunes,
2: Martes,
3: Miércoles,
4: Jueves,
5: Viernes,
6: Sabado,
7: Domingo.

Las salidas quedan determinado de la siguiente manera:
- Lunes, Miércoles o Viernes pueden salir los usuarios con terminación del dni par.
- Martes, Jueves y Sábados pueden salir los usuarios con terminación del dni impar.
- Domingo pueden salir todos los usuarios, incluso los menores de edad.

Tip: podemos saber si un número es par si al dividirlo por 2 el resto es 0. */

function MayoresEdad(dia, dni, edad) {
  let NotificacionSalida = "";

  if (dia === "domingo") {
    NotificacionSalida = "Puede salir";
  } else if (dia !== "domingo" && edad >= 18 && dni % 2) {
    NotificacionSalida =
      "Puede salir los días Lunes, Miércoles, Viernes y Domingo";
  } else if (dia !== "domingo" && edad >= 18 && dni % 3) {
    NotificacionSalida = "Puede salir los días Martes, Jueves y domingo";
  } else {
    NotificacionSalida = "Disculpe, no puede salir hoy";
  }
  return NotificacionSalida;
}

let dia = prompt("Por favor, ingresar el día");
let edad = Number(prompt("Por favor, ingrese su edad"));
let dni = Number(prompt("Por favor ingrese el último número de su DNI"));
let salirDomicilio = MayoresEdad(dia, dni, edad);
alert(salirDomicilio);

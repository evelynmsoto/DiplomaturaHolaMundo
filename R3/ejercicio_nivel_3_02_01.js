/* Nivel 2: Programando el tiempo
Necesitamos crear una aplicación que realice la conversión de horas, desde el formato de 24 hs 
al formato de 12 hs (AM/PM).
El usuario debería ingresar una hora entre 00 y 23 hs. Y luego visualizarla en formato de 12 horas.
Se deberá avisarle al usuario si la hora ingresada está fuera de rango. Por ejemplo: si el usuario 
ingresa 26 hs, no puede estar dentro del formato de 24 hs.
Horas ingresadas => Resultado:
0 => 12 AM
1 => 1 AM
…
11=> 11 AM
12 => 12 PM
13 => 1 PM
...
23 => 11 PM

Pista: Se puede pensar una función para calcular las horas y otra para el formato (AM/PM).
*/

function horaAM() {
  let horaUsuario = Number(prompt("Por favor, ingresar la hora"));

  if (horaUsuario > 23) {
    alert("La hora que ingresó no es válida");
  } else if (horaUsuario < 0) {
    alert("La hora que ingresó no es válida");
  } else if (horaUsuario === 0) {
    alert("La hora que ingresó es 12 AM");
  } else if (horaUsuario > 0 && horaUsuario <= 12) {
    alert("La hora que ingresó es " + horaUsuario + " AM ");
  } else if (horaUsuario > 12 && horaUsuario <= 23) {
    alert("La hora que ingresó es " + (horaUsuario - 12) + " PM ");
  }
}

horaAM();

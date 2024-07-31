/* Nivel 4: A rendir Examen! PARTE 1
Necesitamos avisarle a los estudiantes de la materia de programación, si deben rendir o no 
recuperatorio.
En base a la nota que el estudiante haya obtenido en el examen, se debe enviar un mensaje 
que les indique el resultado del examen de la siguiente forma: si la nota es mayor a 5 el 
examen está aprobado :D y no debe rendir recuperatorio, pero en caso contrario el examen 
está desaprobado :/ y debe rendir recuperatorio. 
*/

function RendirRecuperatorio(calificacionAlumno) {
  let resultado = "";

  if (calificacionAlumno >= 5 && calificacionAlumno <= 10) {
    resultado = "Aprobaste el examen. No necesitas rendir recuperatorio 😅";
  } else if (calificacionAlumno <= 5) {
    resultado = "No aprobaste el examen. Necesitas rendir recuperatorio 😞";
  } else {
    resultado = "La calificación que ingresó no es válida";
  }
  return resultado;
}

let calificacionAlumno = Number(
  prompt("Por favor, ingresar la calificación que obtuviste en la evaluación")
);
let mensajeResultado = RendirRecuperatorio(calificacionAlumno);
alert(mensajeResultado);

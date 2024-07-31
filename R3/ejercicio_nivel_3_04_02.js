/* Nivel 4: A rendir Examen! PARTE 2
Ya terminamos de cursar programación y resulta que todos los estudiantes aprobaron los examenes 
o recuperatorios!!! :D
Ahora necesitamos avisarle a cada estudiantes si promociona o no la materia, es decir que los 
que promocionen no debe rendir examen final.
Para esto le vamos a pedir la nota de 3 examenes, donde si el promedio de esas 3 notas es mayor
o igual a 8, entonces el alumno promociona la materia, pero si el promedio es menor a 8, entonces 
no promociona la materia.
Pista: promedio de 3 numeros se calcula con la suma de los numeros y la división por 3. 
Promedio = (num1 + num2 + num3)/3. 
*/

function promocionaMateria(calificacion01, calificacion02, calificacion03) {
  let promedio = (calificacion01 + calificacion02 + calificacion03) / 3;

  if (promedio >= 8) {
    promedio =
      "Felicidades!!! promocionaste la materia. No debes rendir examen final 😅";
  } else if ((promedio) => 8) {
    promedio =
      "No promocionaste la materia. Necesitas rendir examen final para promocionar 😞";
  } else {
    promedio = "La calificación que ingresó no es válida";
  }
  return promedio;
}

let calificacion01 = Number(prompt("Ingrese la primer calificación"));
let calificacion02 = Number(prompt("Ingrese la segunda calificación"));
let calificacion03 = Number(prompt("Ingrese la tercer calificación"));
let mensajePromociona = promocionaMateria(
  calificacion01,
  calificacion02,
  calificacion03
);
alert(mensajePromociona);

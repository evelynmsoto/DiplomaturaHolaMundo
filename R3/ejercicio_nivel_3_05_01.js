/* 
Los años biciestos son aquellos en los que el año tiene un día más (366).
I) te parece que la función infoAnio está mostrando bien la infomación? Si no está bien, 
te proponemos corregirla para que se comporte adecuadamente.
II) Si ahora además, necesitamos saber si el año ingresado, cuando no es biciesto, es un 
número par o impar, te animás a sumar esa nueva información?
Por ejemplo:
- si ingreso año 2022 con 365 dias debería mostrarme:
"El año 2022 no es biciesto y es par."
- Pero si ingreso el año 2020 debería mostrar:
"El año 2020 es biciesto." 
*/

//funcion que nos brinda información de un año
function infoAnio(anio, dias) {
  let info;
  if (dias === 366) {
    info = "El año " + anio + " es biciesto.";
  } else {
    info = "El año " + anio + " no es biciesto.";
    if (anio % 2 === 0) {
      info = info + " es par";
    } else {
      info = "El año " + anio + " no es biciesto y es impar";
    }
  }
  return info;
}

let anio = Number(prompt("Ingresá un año:"));
let diasAnio = Number(
  prompt("Ingresá la cantidad de días que tiene el año " + anio + ":")
);
let datosAnio = infoAnio(anio, diasAnio);
alert(datosAnio);

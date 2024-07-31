let variable01;
let variable02;
let resultado;
let pizza;

variable01 = false;
variable02 = true;
pizza = prompt("¿La pizza es lo mejor del mundo? (Ingrese true o false)");
resultado = variable01 && variable02 && (pizza || variable02);
alert(
  "¿Las empanadas son superiores?: falso, ¿la pizza es lo mejor?: verdadero... acaso las empanadas y pizzas son iguales? " +
    resultado
);

resultado = variable01 || (variable02 && (pizza || variable02));
alert("La pizza y las empanadas son totalmente diferentes: " + resultado);

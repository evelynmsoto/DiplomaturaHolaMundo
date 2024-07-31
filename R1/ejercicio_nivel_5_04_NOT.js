let variable1;
let variable2;
let verdadero;
let usuario;
let falso;
let resultado;

variable1 = true;
variable2 = false;
verdadero = variable1;
falso = variable2;

usuario = prompt(
  "¿Consideras que la pizza es la mejor comida?  (ingrese verdadero o falso)"
);

resultado = !verdadero;
alert(
  "La pizza es lo mejor que le paso al mundo, ¿opinas lo mismo?: " + resultado
);

resultado = !falso;
alert("¿eres team empanada?:  " + resultado);

let variable1;
let variable2;
let resultado;

variable1 = Number(prompt("Ingrese un número"));
variable2 = Number(prompt("Ingrese nuevamente otro número"));

resultado = variable1 > variable2;
alert("es " + variable1 + " mayor a " + variable2 + " ?: " + resultado);

resultado = variable1 >= variable2;
alert("es " + variable1 + " mayor o igual a " + variable2 + " ?: " + resultado);

resultado = variable1 < variable2;
alert("es " + variable1 + " menor a " + variable2 + " ?: " + resultado);

resultado = variable1 <= variable2;
alert("es " + variable1 + " mayor o igual a " + variable2 + " ?: " + resultado);

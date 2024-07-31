/* Nivel 1: Refactorizando nuestro código

Volvamos a repensar el ejercicio de nivel 2, 3 y 5 resuelto en funciones, 
en donde planteamos la fórmula del área y el perímetro de algunas figuras 
geométricas. Pero esta vez el usuario debe poder elegir qué fórmula quiere 
que el programa realice, es decir, debe ingresar una opción para el tipo de 
figura geométrica, por ejemplo:
C: Cuadrado.
R: Rectángulo.
T: Triangulo.
O: Circunferencia.
También debe poder elegir el tipo de calculo a realizar ingresando es A para 
el área o P para el perímetro.
Nota: se pueden cambiar las letras a ingresar por números o palabras.
*/

let ladoBase = prompt(
  Number("Por favor, ingresar la medida de la base de tu ")
);
let ladoAltura = prompt(
  Number("Por favor, ingresar la medida de la altura de tu ")
);
let radioCirculo = prompt(Number("Por favor, ingresar el radio del circulo"));
const pi = 3.14159;

function AreaCuadrado(ladoBase, ladoAltura) {
  alert(ladoBase + "cuadrado");
  alert(ladoAltura + "cuadrado");
  let formulaAreaCuadrado = ladoBase * ladoAltura;
  alert("El area del cuadrado que ingresaste es " + formulaAreaCuadrado);
}

function PerimetroCuadrado(ladoBase) {
  alert(ladoBase + "cuadrado");
  let formulaPerimetroCuadrado = 2 * (ladoBase + ladoAltura);
  alert(
    "El perimetro del cuadrado que ingresaste es " + formulaPerimetroCuadrado
  );
}

function AreaTriangulo(ladoBase) {
  alert(ladoBase + "triangulo");
  alert(ladoAltura + "triangulo");
  let formulaAreaTriangulo = (Math.sqrt(3) / 4) * ladoBase ** 2;
  alert("El área del triángulo que ingresaste es " + formulaAreaTriangulo);
}

function PerimetroTriangulo(ladoBase) {
  alert(ladoBase + "triangulo");
  let formulaPerimetroTriangulo = 3 * ladoBase;
  alert(
    "El perimetro del cuadrado que ingresaste es " + formulaPerimetroTriangulo
  );
}

function AreaCirculo(radioCirculo, pi) {
  alert(radioCirculo);
  let formulaAreaoCirculo = Math.pi * radioCirculo;
  alert("El area del circulo que ingresaste es " + formulaAreaoCirculo);
}

function PerimetroCirculo(radioCirculo, pi) {
  alert(radioCirculo);
  let formulaPerimetroCirculo = Math.pi * radioCirculo ** 2;
  alert(
    "El perimetro del circulo que ingresaste es " + formulaPerimetroCirculo
  );
}

AreaCuadrado();
PerimetroCuadrado();
AreaTriangulo();
PerimetroTriangulo();
AreaCirculo();
PerimetroCirculo();
radioCirculo();
ladoBase();
pi();

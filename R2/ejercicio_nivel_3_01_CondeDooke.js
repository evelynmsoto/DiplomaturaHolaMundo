ladoBase = prompt(Number("Por favor, ingresar la medida de la base de tu "));
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
  let formulaPerimetroCuadrado = 2 * (ladoBase + LadoAltura);
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

const pi = 3.1415926;

function calcAreaRectangulo(lado1Rectang, lado2Rectang) {
  let areaRectangulo = lado1Rectang * lado2Rectang;
  return areaRectangulo;
}

function calcAreaCircunferencia(radioCircunf) {
  let areaCircunferencia = pi * (radioCircunf * radioCircunf);
  return areaCircunferencia;
}

function calcAreaTriangulo(baseTriangulo, alturaTriangulo) {
  let areaTriangulo = baseTriangulo * alturaTriangulo;
  return areaTriangulo;
}

function calcCosto(area) {
  let precio = 200;
  let costoTotal = area * precio;
  return costoTotal;
}

let radioVentana = Number(prompt("Ingrese el radio de las ventanas"));

let alturaPilar = Number(prompt("Ingrese la altura del pilar"));
let anchoPilar = Number(prompt("Ingrese el ancho del pilar"));

let alturaPuerta = Number(prompt("Ingrese la altura de la puerta"));
let anchoPuerta = Number(prompt("Ingrese el ancho de la puerta"));

let alturaTriangulo = Number(prompt("Ingrese la altura del triangulo"));
let baseTriangulo = Number(prompt("Ingrese la base del triangulo"));

let alturaCasa = Number(prompt("Ingrese la altura de la casa"));
let anchoCasa = Number(prompt("Ingrese el ancho de la casa"));

let areaPilarIzq = calcAreaRectangulo(alturaPilar, anchoPilar);
calcAreaCircunferencia(radioVentana);
let areaPilarDer = calcAreaRectangulo(alturaPilar, anchoPilar);
calcAreaCircunferencia(radioVentana);
let areaTecho = calcAreaTriangulo(baseTriangulo, alturaTriangulo);
let areaCasaCentro = calcAreaRectangulo(alturaCasa, anchoCasa);
calcAreaCircunferencia(radioVentana);
calcAreaRectangulo(alturaPuerta, anchoPuerta);

let areaTotal = areaPilarIzq + areaPilarDer + areaTecho + areaCasaCentro;
alert(
  "Area pilar : " +
    areaPilarIzq +
    ", area casa: " +
    areaCasaCentro +
    ", area techo: " +
    areaTecho
);
let costo = calcCosto(areaTotal);

alert("El costo final por " + areaTotal + " m2 es de " + costo);

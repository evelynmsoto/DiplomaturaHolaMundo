function perimetroPentagono(ladoPentagono) {
  let perimetroPentagono = ladoPentagono * 5;
  alert("El perimetro del pentagono es " + perimetroPentagono);
}

function perimetroParalelogramo(baseParalelogramo, alturaParalelogramo) {
  let perimetroParalelogramo = baseParalelogramo * alturaParalelogramo;
  alert("El perimetro del paralelogramo es " + perimetroParalelogramo);
}

function perimetroRombo(ladoRombo) {
  let perimetroRombo = ladoRombo * 4;
  alert("El perimetro del rombo es " + perimetroRombo);
}

function perimetroRomboide(ladoRomboide1, ladoRomboide2) {
  let perimetroRomboide = 2 * (ladoRomboide1 + ladoRomboide2);
  alert("El perimetro del romboide es " + perimetroRomboide);
}

let ladoPentagono = prompt("Ingrese el lado del pentagono");
let baseParalelogramo = prompt("Ingrese la base del paralelogramo");
let alturaParalelogramo = prompt("Ingrese la altura del paralelogramo");
let ladoRombo = prompt("Ingrese el lado del rombo");
let ladoRomboide1 = prompt("Ingrese el lado 1 del romboide");
let ladoRomboide2 = prompt("Ingrese el lado 2 del romboide");

function secuenciaCustodia() {
  perimetroPentagono(ladoPentagono);
  perimetroParalelogramo(baseParalelogramo, alturaParalelogramo);
  perimetroRombo(ladoRombo);
  perimetroRombo(ladoRombo);
  perimetroRomboide(ladoRomboide1, ladoRomboide2);
  perimetroRombo(ladoRombo);
  perimetroRombo(ladoRombo);
  perimetroParalelogramo(baseParalelogramo, alturaParalelogramo);
  perimetroPentagono(ladoPentagono);
}

secuenciaCustodia();

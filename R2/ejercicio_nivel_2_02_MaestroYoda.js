let horaCapitalRepublica = Number(
  prompt("Ingrese la hora actual en la Capital de la Repùblica")
);

function horaEndor() {
  let endor = horaCapitalRepublica + 11;
  alert("Hora actual en Endor: " + endor);
}

function horaFelucia() {
  let felucia = horaCapitalRepublica + 5;
  alert("Hora actual en Felucia: " + felucia);
}

function horaNaboo() {
  let naboo = horaCapitalRepublica - 1;
  alert("Hora actual en Naboo: " + naboo);
}

horaCapitalRepublica();
horaEndor();
horaFelucia();
horaNaboo();

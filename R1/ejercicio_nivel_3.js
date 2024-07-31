let nombreUsuario;
let apellidoUsuario;
let edadUsuario;
let dniUsuario;
let alturaUsuario;

nombreUsuario = prompt("Ingrese su nombre");
apellidoUsuario = prompt("Ingrese su apellido");
edadUsuario = Number(prompt("Ingrese su edad"));
dniUsuario = Number(prompt("Ingrese su numero de D.N.I."));
alturaUsuario = Number(prompt("Ingrese su altura en centímetros"));

let resumenDatosUsuario =
  "Datos ingresados:  " +
  "Nombre:  " +
  nombreUsuario +
  " " +
  "Apellido:  " +
  apellidoUsuario +
  " " +
  "Edad:  " +
  edadUsuario +
  " " +
  "DNI: " +
  dniUsuario +
  " " +
  "Altura: " +
  alturaUsuario +
  " ";
alert(resumenDatosUsuario);

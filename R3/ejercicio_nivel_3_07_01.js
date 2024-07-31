/* Nivel 7: Menú de atención al usuario
Una reconocida empresa de telefonía celular necesita que se programe un menú 
de opciones para utilizar en su línea telefónica de atención al usuario. 
El menú se compone de los siguientes items:
1: Valor de su última factura.
2: Conocer fecha del próximo vencimiento de su factura.
3: Comunicarse con gestion de ventas.
4: Comunicarse con un operador de atención al cliente.
5: Comunicarse con un operador de soporte técnico.
0: Terminar la llamada.
Una vez que el usuario elija una opción se deberá mostrar un mensaje acorde a 
dicha elección. Por ejemplo, si el usuario elige la opción 3 se podría mostrar 
el mensaje:
"En instantes será atendido por uno de nuestros representantes en ventas."
En caso de que el usuario ingrese un valor que no está contemplado en el menú, 
se le deberá informar que la opción es incorrecta. 
*/

function menuAtencionPublico(itemMenu) {
  let mensaje;
  switch (itemMenu) {
    case 0:
      mensaje = "Terminar la llamada";
      break;
    case 1:
      mensaje = "Valor de su última factura";
      break;
    case 2:
      mensaje = "Conocer fecha del próximo vencimiento de su factura";
      break;
    case 3:
      mensaje = "Comunicarse con gestion de ventas";
      break;
    case 4:
      mensaje = "Comunicarse con un operador de atención al cliente";
      break;
    case 5:
      mensaje = "Comunicarse con un operador de soporte técnico";
      break;
    default:
      mensaje = "El numero que ingresado no es valido";
  }
  return mensaje;
}

let itemMenu = Number(
  prompt(
    "Hola, se ha comunicado con la linea de Movistar. Què : \n 1: para conocer el valor de su ultima factura \n 2: para conocer fecha del próximo vencimiento de su factura. \n 3: para comunicarse con gestion de ventas. \n 4: para comunicarse con un operador de atención al cliente. \n 5: para comunicarse con un operador de soporte tecnico. \n 0: para terminar la llamada."
  )
);
let menuTelefonico = menuAtencionPublico(itemMenu);
alert(menuTelefonico);

let username;
let direccionEmail;
let direccionIP;
let tramposo;

username = prompt("Ingrese su nombre de Usuario, por favor  ");
direccionEmail = prompt("Ingrese su dirección de e-mail, por favor ");
direccionIP = prompt("Ingrese su dirección IP, por favor ");

tramposo =
  username === "pepito1307" ||
  username === "ggisi24" ||
  username === "soyMuyBueno22022" ||
  direccionIP === "192.168.1.0" ||
  direccionIP === "192.168.1.2" ||
  direccionEmail === "pedrogamer2004@gmail.com" ||
  direccionEmail === "whiterabbit01@gmail.com" ||
  direccionEmail === "soydemasiadobueno07@outlook.com";

alert("Disculpe, acceso denegado " + tramposo);

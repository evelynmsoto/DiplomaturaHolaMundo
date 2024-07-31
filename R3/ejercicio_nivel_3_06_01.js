/* Nivel 6: Categorizando usuarios
YouTube clasifica a sus usuarios como usuarios espectadores o creadores. Donde los usuarios 
espectadores son aquellos que sólo utilizan la plataforma para ver videos, pero nunca han 
generado contenidos, es decir no han subido un video. Por el contrario, los usuarios creadores 
son los que al menos subieron un video a la plataforma. Cada vez que un usuario realiza una 
búsqueda, el algoritmo encargado de esta acción, debe priorizar los resultados dependiendo 
de la edad del usuario y su tipo (creador o espectador).
Para esto necesita asignarle una categoría al usuario. Dichas categorías se especifican con 
números, de la siguiente manera:
1: usuario es menor a 12 años.
2: la edad está entre 12 y 17 y el usuario es creador.
3: la edad está entre 12 y 17 y el usuario es espectador.
4: la edad es mayor a 17 años y el usuario es creador.
5: la edad es mayor a 17 años y el usuario es espectador.
Como el algoritmo actualmente esta sufriendo algunas fallas, están pidiendo a programadores 
de todo el mundo que cree un script que les permita poder categorizar los usuarios y avisarle 
la categoría que le corresponde.
Te animás a resolverlo?
*/

function categoriaUsuario(clasificacionUsuario, edadUsuario) {
  let respuesta = "";
  if (edadUsuario < 12) {
    respuesta =
      "La edad que ingresaste es: " +
      edadUsuario +
      " años. La categoría que te corresponde es 1";
  }
  if ((edadUsuario) => 12 && edadUsuario <= 17) {
    if (clasificacionUsuario === "A") {
      respuesta =
        "La edad que ingresaste es: " +
        edadUsuario +
        " años. La categoría que te corresponde es 2";
    } else {
      respuesta =
        "La edad que ingresaste es: " +
        edadUsuario +
        " años. La categoría que te corresponde es 3";
    }
  }

  if (edadUsuario > 17) {
    if (clasificacionUsuario === "A") {
      respuesta =
        "La edad que ingresaste es: " +
        edadUsuario +
        " años. La categoría que te corresponde es 4";
    } else {
      respuesta =
        "La edad que ingresaste es: " +
        edadUsuario +
        " años. La categoría que te corresponde es 5";
    }
  }
  return respuesta;
}

let clasificacionUsuario = prompt(
  "Por favor, ingresa A si eres creador de contenido, o B si eres usuario espectador"
);
let edadUsuario = Number(prompt("Por favor, ingresa tu edad"));
let categorizando = categoriaUsuario(clasificacionUsuario, edadUsuario);
alert(categorizando);

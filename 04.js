/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) { //H=argumento = num int;  T= retorna true o false num   
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej: leerlo de derecha a izquierda se lee igual de izquierda a derecha eso es simetrico
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var numCadena = num.toString(); //convierto de numero a string
  var longitud = numCadena.length; //longitud del numero pasdo a string

for (var i = 0; i < Math.floor(longitud / 2); i++){ //metodo nath.floor Devuelve el máximo entero menor o igual a un número dado.
// longitud  = 5 caracteres / 2= 2.5 con floor se aproxima a 2. 
  if (numCadena[i] !== numCadena[longitud - 1 - i]){ //comparamos el primer indice con el ultimo indice y se le resta - el ulrimo caracter menos el indice i
    return false;
  } 
}
  return true;
}


// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico
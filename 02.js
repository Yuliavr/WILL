/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca:

  var cadenaLarga = strings[0]; // recorre desde el indice 0 definido = "hi"

  for (var i = 1; i < strings.length; i++) { // recorre desde el siguiente arreglo "hello"
    if (cadenaLarga.length <= strings[i].length){ //comparando la cantidad de carateres
      cadenaLarga = strings[i]; //compara el indice le puse con la nueva condicion
    }
    
  }
return cadenaLarga;

}


// console.log(stringMasLarga('hi', 'hello', 'ni hao', 'guten tag'));
// console.log(stringMasLarga('JavaScript', 'HTML', 'CSS'));



// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga
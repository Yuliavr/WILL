/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

//las clases son plantillas para crear objetos
//las clases se definen con letra mayuscula de inicial y tiene constructor
//el contructor son las propiedades que tienen los objetos que devuelve la clase
//inicializar es crear un objeto vacio o inicia un objeto
//this hace referencia a los objetos (es como crear variables con var)

function crearClasePersona() {
  class Persona { 
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

      // Tu código aca:
      //inicializando (iniciando)
      this.nombre = nombre;
      this.edad = edad;
      this.hobbies = hobbies;
      this.amigos = amigos


    }

    addFriend(nombre, edad) {
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.

      // Tu código aca:
      var amigo = {nombre: nombre, edad: edad}; //creando variable
      this.amigos.push(amigo); //guardando en la lista de amigos la nueva variable amigo
    }

    addHobby(hobby) {
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.

      // Tu código aca:
      this.hobbies.push(hobby); //estamos guardando en hobbies el string hobby 
    }

    getFriends() {
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

      // Tu código aca:
      // this.amigos.map(function(elem){return elem.nombre;})

      var nombreamigo = [];
      for (let i = 0; i < this.amigos.length; i++) {
        nombreamigo.push(this.amigos[i].nombre);
      }
      return nombreamigo;
    }

    getHobbies() {
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']

      // Tu código aca:
      return this.hobbies;
    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
      // Ej:
      // Si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29

      // Tu código aca:
      var total = 0; //variable nueva
      for (var i = 0; i< this.amigos.length; i++) { //recorro el array amigos y su longitud
        total = total + this.amigos[i].edad; // guardo las edades sumadas de los amigos(personas)
      }
      return total / this.amigos.length; //retorno el total divido en la longitud de los amigos osea la cantidad de personas
    }
  };

  return Persona;
}

// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona
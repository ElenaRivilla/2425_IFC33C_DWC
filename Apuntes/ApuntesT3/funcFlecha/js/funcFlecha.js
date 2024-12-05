/*
 * Ejercicio: Diferencias de `this` en funciones tradicionales y funciones flecha
 *
 * Crea un objeto llamado `usuario` con las siguientes propiedades y métodos:
 * 
 * 1. Propiedad:
 *    - `nombre`: Una cadena que almacene el nombre del usuario (por ejemplo, "Carlos").
 * 
 * 2. Métodos:
 *    - `saludarTradicional`: Una función tradicional que imprima en la consola:
 *      "Hola, mi nombre es [nombre].", utilizando `this.nombre`.
 *    - `saludarFlecha`: Una función flecha que intente imprimir el mismo mensaje:
 *      "Hola, mi nombre es [nombre]."
 * 
 * 
 * 3. Prueba del contexto:
 *    - Llama a ambos métodos directamente desde el objeto y analiza qué sucede con `this`.
 *    - Asigna ambos métodos a variables externas (por ejemplo,
 *      `const saludarExterno = usuario.saludarTradicional;`) y vuelve a llamarlos desde fuera del objeto.
 *      Observa cómo cambia el valor de `this`.
 *
 * Ejemplo de uso esperado:
 * 
 usuario.saludarTradicional(); // "Hola, mi nombre es Carlos."
 usuario.saludarFlecha(); // "Hola, mi nombre es undefined." (o similar)
 
 const saludarExterno = usuario.saludarTradicional;
 saludarExterno(); // "Hola, mi nombre es undefined." (en modo no estricto)
 
 const saludarFlechaExterno = usuario.saludarFlecha;
 saludarFlechaExterno(); // "Hola, mi nombre es undefined."
 *
 * Objetivo del ejercicio:
 * Este ejercicio ayudará a los alumnos a entender las diferencias entre funciones tradicionales y funciones flecha
 * en relación con el manejo del contexto de `this`:
 * - Las funciones tradicionales tienen su propio `this`, que depende de cómo se invoquen.
 * - Las funciones flecha no tienen su propio `this`; heredan el contexto del lugar donde fueron definidas.
 */

let usuario = {
   nombre: "Carlos",

   saludarTradicional() {
      console.log(`Hola mi nombre es ${this.nombre}`);
   },

   saludarFlecha: () => {
      console.log(`Hola mi nombre es ${this.nombre}`);
      
   }
}

class Usuario {
   constructor(nombre){
      this.nombre = nombre;
      this.saludarTradicional = function () {
         console.log(`Hola mi nombre es ${this.nombre}`);
      }

      this.saludarFlecha = () => {
         console.log(`Hola mi nombre es ${this.nombre}`);
      }
   }
}
let usuario1 = new Usuario("Helen")
/**
 * Objeto usuario que demuestra las diferencias entre funciones tradicionales y flecha
 * en el manejo del contexto `this`.
 * 
 * @property {string} nombre - Nombre del usuario.
 * @method saludarTradicional - Método que utiliza una función tradicional para imprimir el nombre.
 * @method saludarFlecha - Método que utiliza una función flecha para imprimir el nombre.
 */

/**
 * Método que utiliza una función tradicional para acceder al contexto `this`.
 * Imprime "Hola, mi nombre es [nombre]."
 */


/**
 * Método que utiliza una función flecha para acceder al contexto `this`.
 * Intenta imprimir "Hola, mi nombre es [nombre]." pero no obtiene `this` del objeto.
 */


// Llamada directa desde el objeto
console.log("------Con objeto------")
usuario.saludarTradicional(); // "Hola, mi nombre es Carlos."
usuario.saludarFlecha(); // "Hola, mi nombre es undefined." (o similar)

// Llamada desde una variable externa

let saludarExterno = usuario.saludarTradicional.bind(usuario);
saludarExterno(); // "Hola, mi nombre es undefined." (en modo no estricto)

let saludarFlechaExterno = usuario.saludarFlecha;
saludarFlechaExterno(); // "Hola, mi nombre es undefined."

console.log("\n----Con constructor----")

usuario1.saludarTradicional(); // "Hola, mi nombre es Carlos."
usuario1.saludarFlecha(); // "Hola, mi nombre es undefined." (o similar)

// Llamada desde una variable externa
let saludarExterno2 = usuario1.saludarTradicional.bind(usuario1);
saludarExterno2(); // "Hola, mi nombre es undefined." (en modo no estricto)

let saludarFlechaExterno2 = usuario1.saludarFlecha;
saludarFlechaExterno2(); // "Hola, mi nombre es undefined."

function suma(param1, param2) {
   return param1 + param2;
}

/* let suma = (param1, param2) => param1 + param2; // Si solo hay una línea, no hace falta poner return ni corchetes. Retorno implicito

let suma = (param1, param2) => { //Retorno explícito
   param1 + param2;
} */
// Ejercicio 1: Imprime el valor de `this` en el contexto global.
console.log(this);
// En un navegador, imprimirá el objeto global `Window`.
// En Node.js, imprimirá el objeto `global`.

console.log('---');

// Ejercicio 2: Crea un objeto con un método y usa `this` para acceder a una propiedad del objeto.
let obj1 = {
    name: 'Alice',
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
obj1.greet();
// Se accede a la propiedad `name` del objeto `obj1` usando `this`.
// Salida: 'Hello, Alice!'

console.log('---');

// Ejercicio 3: Analiza el valor de `this` en una función normal dentro de un método.
let obj2 = {
    name: 'Bob',
    greet() {
        function inner() {
            console.log(this); // ¿Qué imprime esto?
        }
        inner();
    }
};
obj2.greet();
//this dentro de un método apunta a window
// En modo no estricto, `this` será el objeto global (Window o global).
// En modo estricto, será undefined.

console.log('---');

// Ejercicio 4: Usa una función flecha para heredar el contexto de `this`.
let obj3 = {
    name: 'Charlie',
    greet() {
        let inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
obj3.greet();
// Las funciones flecha heredan el contexto de `this` de su función contenedora.
// Salida: 'Charlie'

console.log('---');

// Ejercicio 5: Usa `call` y `apply` para cambiar el contexto de `this`.
function sayHello(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

let person1 = { name: 'Dana' };
sayHello.call(person1, 'Hello'); // nombreFuncion.call(contextoACoger, "parametro de nombreFuncion") 
sayHello.apply(person1, ['Hi']); // Similar a `call`, pero con argumentos pasados como un array.
// Salida:
// Hello, Dana
// Hi, Dana

console.log('---');

// Ejercicio 6: Usa `bind` para crear una nueva función con un `this` fijo.
function introduce() {
    console.log(`I am ${this.name}`);
}

let person2 = { name: 'Emma' };
let boundFunction = introduce.bind(person2);
boundFunction();
// Salida: 'I am Emma'

console.log('---');

// Ejercicio 7: Usa `this` dentro de un constructor para asignar propiedades.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.describe = function() {
        console.log(`${this.name} is ${this.age} years old.`);
    };
}
let john = new Person('John', 30);
john.describe();
// Salida: 'John is 30 years old.'

console.log('---');

// Ejercicio 8: Usa `this` dentro de un controlador de eventos.
let button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', function() {
    console.log(this); // ¿Qué es `this` aquí?
});
// En un controlador de eventos tradicional, `this` apunta al elemento que disparó el evento.
// Salida: <button>Click me</button>

console.log('---');

// Ejercicio 9: Soluciona el problema del `this` cuando pasas un método como callback.
let obj4 = {
    name: 'Frank',
    greet() {
        console.log(this.name);
    }
};

setTimeout(obj4.greet, 1000); // ¿Qué ocurre aquí?
// Solución: Usa `bind` para fijar el valor de `this`.
setTimeout(obj4.greet.bind(obj4), 1000);
// Cuando se pasa obj.greet como callback, el contexto de `this` se pierde.
// Salida: 'Frank' (después de usar bind)

console.log('---');

// Ejercicio 10: Usa `this` dentro de una clase.
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
let dog = new Animal('Dog');
dog.speak();
// Salida: 'Dog makes a noise.'

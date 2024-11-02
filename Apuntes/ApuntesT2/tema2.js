var v1 = document.getElementById("hombre"); // Devuelve el elemento con id="hombre"
console.log(v1); // Devuelve el elemento con id="hombre"
console.log(v1.attributes); // Devuelve un NamedNodeMap con los atributos del elemento
console.log(v1.nodeValue); // Devuelve el valor del atributo id del elemento
console.log(v1.childNodes); // Devuelve un NodeList con los nodos hijos del elemento

var v2 = document.getElementsByTagName("input"); // Devuelve un HTMLCollection con los elementos input
console.log(v2);

var v3 = document.getElementsByTagName("body"); // Devuelve un HTMLCollection con los elementos body
console.log(v3); // Devuelve un HTMLCollection con los elementos body
console.log(v3[0]); // Devuelve el elemento body
console.log(v3[0].childNodes); // Devuelve un NodeList con los nodos hijos del elemento
console.log(v3[0].children); // Devuelve un HTMLCollection con los elementos hijos del elemento 
console.log(v3[0].parentElement); // Devuelve el elemento padre del elemento
console.log(v3[0].children[0].nextElementSibling); // Devuelve el siguiente hermano del elemento

var v4 = document.getElementsByClassName("sexo"); // Devuelve un HTMLCollection con los elementos con la clase "sexo"
console.log(v4);

/* var v5 = document.getElementsById("sexo");// Devuelve un HTMLCollection con los elementos con el nombre "sexo" que en este caso no existe, daría error
console.log(v5);   */

var v6 = document.getRootNode(); // Devuelve el nodo raíz del documento
console.log(v6);

var v7 = document.querySelector("#mujer"); // Devuelve el primer elemento con id="mujer"
var v8 = document.querySelectorAll(".sexo"); // Devuelve un NodeList con los elementos con la clase "sexo"

// Crear elementos

var v8 = document.createElement("h2"); // Crea un elemento h2
//v8.innerText = "Hola<strong>tú</strong>"; // Añade solo texto texto "Hola" al elemento h2
v3[0].appendChild(v8); // Añade el elemento h2 al final del elemento body
v8.innerHTML = "Hola <span style='color:red'>tú</span>"; // Añade texto y un span al elemento h2
console.log(v8);
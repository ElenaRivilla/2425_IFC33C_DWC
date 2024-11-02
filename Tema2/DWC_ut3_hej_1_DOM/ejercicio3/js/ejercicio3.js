const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"];
let body = document.querySelector('body');
let ul = document.createElement('ul');
let li;
body.appendChild(ul);

for (let i = 0; i < nombres.length; i++){
    li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = nombres[i];
}
//* No, fulfilled y reason no se pueden comprobar con .then y .catch directamente. 
//* Estas propiedades son específicas del objeto que devuelve Promise.allSettled.
//* Cuando usas Promise.allSettled, obtienes un array de objetos que contienen el estado (status)
//*  y el valor (value o reason) de cada promesa. Aquí es donde puedes comprobar fulfilled y reason.
//* Por otro lado, .then y .catch se utilizan para manejar promesas individuales. .then se ejecuta 
//* cuando una promesa se resuelve con éxito, y .catch se ejecuta cuando una promesa es rechazada.
//* 
//* - status: Esta propiedad indica el estado de la promesa. Puede ser 'fulfilled' si la promesa se resolvió
//*  con éxito, o 'rejected' si la promesa fue rechazada.
//* 
//* - value: Esta propiedad contiene el valor con el que se resolvió la promesa si el status es 'fulfilled'.
//*  Es decir, es el resultado exitoso de la promesa.
//* 
//* - reason: Esta propiedad contiene el motivo por el cual la promesa fue rechazada si el status es 'rejected'.
//*  Es decir, es el error o razón del rechazo de la promesa.

document.addEventListener('DOMContentLoaded', cargaDOM); 

function cargaDOM() {
    crearBase();
    let button = document.querySelector('button');
    button.addEventListener('click', () => {
        Promise.allSettled([promesa1(), promesa2(), promesa3()])
        .then((results) => {
            results.forEach((result) => {
                let ul = document.querySelector('ul');
                let li = document.createElement('li');

                if (result.status === 'fulfilled') { //comprueba que el resultado de la promesa ha sido exitosa(.then)
                    li.innerHTML = result.value;
                    li.style.color = 'green'
                } else {
                    li.innerHTML = result.reason; //comprueba que el resultado de la promesa haya sido rechazada (.catch)
                    li.style.color = 'red';
                }
                ul.appendChild(li);
            });
        });
    });
}

function promesa1(){
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            if(Math.random() > 0.5){
                resolve('Tarea completada');
            } else {
                reject('Tarea rechazada');
            }
        }, tiempoAleatorio() * 1000);
    });
}

function promesa2(){
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            if(Math.random() > 0.5){
                resolve('Tarea completada');
            } else {
                reject('Tarea rechazada');
            }
        }, tiempoAleatorio() * 1000)
    });
}

function promesa3(){
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            if(Math.random() > 0.5){
                resolve('Tarea completada');
            } else {
                reject('Tarea rechazada');
            }
        }, tiempoAleatorio() * 1000);
    });
}

function tiempoAleatorio() {
    let min = 1;
    let max = 3;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function crearBase(){
    let ul = document.querySelector('ul');
    let container = document.querySelector('#container')
    let li = document.createElement('li');
    let button = document.createElement('button');
    container.appendChild(button);
    button.innerHTML = 'Generar Tareas'
}
document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    crearBase();
    document.querySelector('button').addEventListener('click', () => {
        let h3 = document.querySelector('h3');
        Promise.all([validarTarjeta(), validarPago(), validarCVV()])
        .then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('Pago realizado con éxito.')
                }, 2000);
            })
        })
        .then((result) => {
            h3.innerHTML = result;
            h3.style.color = 'green';
        })
        .catch((error) => {
            h3.innerHTML = error;
            h3.style.color = 'red';
        });
    });
}

function validarTarjeta(){
    let tarjeta = document.querySelectorAll('input')[0];
    return new Promise((resolve, reject) => {
        if(tarjeta.value.trim() && tarjeta.value.length === 16 && !isNaN(tarjeta.value)){
            resolve('Pago realizado con éxito')
        }
        if(!tarjeta.value.trim()){
            reject('No puedes introdcir datos vacíos en la tarjeta');
        }else {
            reject('El formato de la tarjeta no es el indicado');
        }
    });
}

function validarCVV(){
    let CVV = document.querySelectorAll('input')[1];
    return new Promise((resolve, reject) => {
        if(CVV.value.trim() && CVV.value.length === 3 && !isNaN(CVV.value)){
            resolve('Pago realizado con éxito')
        }
        if(!CVV.value.trim()){
            reject('No puedes introdcir datos vacíos en el CVV');
        } else {
            reject('El formato del CVV no es el indicado');
        }
    });
}

function validarPago(){
    let pago = document.querySelectorAll('input')[2];
    return new Promise((resolve, reject) => {
        if(pago.value.trim() && !isNaN(pago.value)){
            resolve('Pago realizado con éxito')
        }
        if(!pago.value.trim()){
            reject('No puedes introdcir datos vacíos en el pago');
        } else {
            reject('El formato del pago no es el indicado');
        }
    });
}

function crearBase(){
    let container = document.querySelector('#container');
    
    let labelTarjeta = document.createElement('label');
    labelTarjeta.textContent = 'Tarjeta:';
    let inputTarjeta = document.createElement('input');
    
    let labelCVV = document.createElement('label');
    labelCVV.textContent = 'CVV:';
    let inputCVV = document.createElement('input');
    
    let labelPago = document.createElement('label');
    labelPago.textContent = 'Pago:';
    let inputPago = document.createElement('input');
    
    let boton = document.createElement('button');
    let h3 = document.createElement('h3');
    
    container.appendChild(labelTarjeta);
    container.appendChild(inputTarjeta);
    container.appendChild(labelCVV);
    container.appendChild(inputCVV);
    container.appendChild(labelPago);
    container.appendChild(inputPago);
    container.appendChild(boton);
    container.appendChild(h3);
    
    boton.innerHTML = 'Pagar';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.width = '500px';
    container.style.height = '150px';
    container.style.justifyContent = 'space-between';
}
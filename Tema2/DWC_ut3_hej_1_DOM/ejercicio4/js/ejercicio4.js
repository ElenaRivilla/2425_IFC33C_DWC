let input = prompt("Introduce el color: ");
let imagen = document.querySelector('img');
let div = document.querySelector('div');
let body = document.querySelector('body');
let mensaje;

function cambiarColor(){
    if (input != "rojo" && input != "amarillo"){
        imagen.remove();
        mensaje = document.createElement('h1');
        mensaje.innerHTML = "Añade el color amarillo o rojo"
        body.appendChild(mensaje);
    }
    else if(input === "amarillo"){
        imagen.src = 'img/amarillo.png';
        imagen.style.width = "100%"
    }
    else if(input === "rojo") {
        imagen.src = 'img/rojo.png';
        imagen.style.width = "100%"
    }
}

cambiarColor();
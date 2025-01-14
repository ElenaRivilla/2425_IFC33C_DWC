document.addEventListener('DOMContentLoaded', cargaInicial);

function cargaInicial(){
    let div = document.querySelector('div');
    let section = document.querySelector('section');
    let button = document.querySelector('button');

    div.addEventListener('click', evento, true);
    //div.addEventListener('click', evento, false);
    div.addEventListener('click', (e) => e.stopPropagation(), true);

    section.addEventListener('click', evento, true);
    //section.addEventListener('click', evento, false);

    button.addEventListener('click', evento, true);
    //button.addEventListener('click', evento, false);
    
}

function evento(event){
    console.log(`Elemento: ${event.currentTarget.tagName}, Fase: ${event.eventPhase === 1 ? 'Captura' : 'Burbuja'}`)
}






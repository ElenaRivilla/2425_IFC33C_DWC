function Carta(valor, palo){
    this.valor = valor;
    this.palo = palo;
}

var valores = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var palos = ["hearts", "diamonds", "clubs", "spades"];
var baraja = [];

for (let palo of palos){
    for (let valor of valores){
        baraja.push(new Carta(valor, palo));
    }
}

console.log(baraja);



function barajar(baraja){
    return baraja.sort(function(){
        return Math.random() - 0.5;
    });
}

function obtenerMano(baraja){
    let mano = [];
    let indice;

    for (let i = 0; i < 5; i++){
        indice = Math.floor(Math.random() * baraja.length);
        mano.push(baraja.splice(indice, 1)[0]);
    }
    return mano;    
}

function jugar(){
    let mano = obtenerMano(baraja);
    let app = document.querySelector("#app");
    app.innerHTML = "";
    for (let carta of mano){
    app.innerHTML += `<img height=200 width=150 src="cards/${carta.valor}_of_${carta.palo}.png">`;
}
    
    let hayPareja = false;
    for (let i = 0; i < mano.length; i++){
        for (let j = i + 1; j < mano.length; j++){
            if (mano[i].valor === mano[j].valor){
                hayPareja = true;
            }
        }

    }
    if (hayPareja){
        app.innerHTML += "<p>Has ganado!</p>";
    }
}

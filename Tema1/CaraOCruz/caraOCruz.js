const cara = 1;
const cruz = 2;

function caraOCruz(){
    let ganador = Math.floor(Math.random() * (cruz - cara + 1) + cara);
    let asadas = document.getElementById("coin1");

    if (ganador === cara) {
        asadas.src="svg/coin.svg";
        setTimeout(() => window.alert("Has ganado, ha salido cara"),200);
        setTimeout(() => window.confirm("¿Quieres volver a jugar?"),200);
       
    } else {
        asadas.src="svg/coin2.svg";
        setTimeout(() => window.alert("Has perdido, ha salido cruz"),200);
        setTimeout(() => window.confirm("¿Quieres volver a jugar?"),200);
    }
}


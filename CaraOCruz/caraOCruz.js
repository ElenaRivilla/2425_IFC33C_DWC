const cara = 1;
const cruz = 2;

function caraOCruz(){
    let ganador = Math.floor(Math.random() * (cruz - cara + 1) + cara);

    if (ganador === cara) {
        window.alert("Has ganado, ha salido cara");
        window.confirm("¿Quieres volver a jugar?");
    } else {
        window.alert("Has perdido, ha salido cruz");
        window.confirm("¿Quieres volver a jugar?");
    }
}

function reload() {
    caraOCruz();
    window.location.reload();
   
}
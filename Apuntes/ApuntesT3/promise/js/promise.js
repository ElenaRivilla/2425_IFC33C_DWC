//PROMISES

function tareaPrincipal1(){
    return new Promise((resolution) => {
        setTimeout(() => {
            console.log("Tarea principal controlada.");
        }, 1000);
        resolution();
    });
}

function tareaSecundaria2(){
    return new Promise((resolution) => {
        setTimeout(() => {
            console.log("Tarea secundaria controlada.");
        }, 1000);
        resolution();
    });
}

function tareaTerciaria3(){
    return new Promise((resolution) => {
        setTimeout(() => {
            console.log("Tarea terciaria controlada.");
        }, 1000);
        resolution();
    });
}

tareaPrincipal1()
    .then(tareaSecundaria2)
    .then(tareaTerciaria3)
    .then(() => console.log("Hemos terminado las tareas"));
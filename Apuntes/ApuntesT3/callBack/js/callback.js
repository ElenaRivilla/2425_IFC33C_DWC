//THE FUCKING CALLBACK HELL

function tareaPrincipal(callback) {
    setTimeout(() => {
        console.log("Realizando primera tarea...");
    }, 1000);
    callback();
}

function tareaSecundaria(callback){
    setTimeout(() => {
        console.log("Realizando la segunda tarea...");
    }, 1000);
    callback();
}

function tareaTerciaria(callback){
    setTimeout(() => {
        console.log("Realizando la tercera tarea...");
    }, 1000);
    callback();
}

tareaPrincipal(()=>{
    tareaSecundaria(() => {
        tareaTerciaria(() => {
            setTimeout(() => {
                console.log("Hemos acabado las tareas");
            }, 1000);
        });
    });
});

//ASYNC - AWAIT
async function ejecutarTareas() {
    await tareaPrincipal();
    await tareaSecundaria();
    await tareaTerciaria();
    console.log("Todas las tareas completadas.");
}
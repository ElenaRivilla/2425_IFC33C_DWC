let array = [];

function generarArray(length) {
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 15) + 1);
    }
}

function mostrarAsteriscos() {
    for (let i = 0; i < array.length; i++) {
        console.log("*".repeat(array[i]));
    }
}

generarArray(15);
console.log(array);
mostrarAsteriscos();
let array = [];
let longitudArray = 15;

function generarArray() {
    for (let i = 0; i < longitudArray; i++) {
        array.push(Math.floor(Math.random() * 15) + 1);
    }
}

function mostrarAsteriscos() {
    for (let i = 0; i < array.length; i++) {
        console.log("*".repeat(array[i]));
    }
}

generarArray();
console.log(array);
mostrarAsteriscos();
/* 2. Imprime una tabla que contenga las tablas de multiplicar
Comencemos con las tablas que muchos de nosotros tuvimos que memorizar en la escuela. ¿Puedes imprimir una tabla que contenga todas las 
respuestas de las tablas de multiplicar del 1 al 10?

Al igual que en el desafío n.° 1, ¿puedes crear una solución eficiente que puedas expandir fácilmente en caso de que necesites la tabla del 12? */
let tabla = 10;
function imprimirTablas(){
    resultado = []
    for (let i = 0; i <= tabla; i++){
        for (let j = 1; j <= 10; j++){
            console.log(i, " x ", j, " = ", (i * j));
        }
        console.log("-".repeat(15))
    }
}
imprimirTablas();

document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {
    obtenerProductos();
}

function obtenerProductos() {
    let productos = `[
        { "id": 1, "nombre": "Teclado", "precio": 30 },
        { "id": 2, "nombre": "Ratón", "precio": 20 },
        { "id": 3, "nombre": "Monitor", "precio": 200 }
    ]`;
    let productosObj = JSON.parse(productos);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve(productosObj);
            } else {
                reject("No se han encontrado productos")
            }
        }, 1000);
    })
        .then((resultado) => {
            console.log("Productos obtenidos: ", resultado);
            let productosCopia = structuredClone(resultado); // hacer copia profunda del objeto (deep copy)

            return new Promise((resolve, reject) => {
                if (Math.random() > 0.5) {
                    productosCopia.forEach(producto => {
                        producto.precio = producto.precio * 0.9;
                    });
                    resolve(productosCopia);
                } else {
                    reject("Ha habido un error en el descuento")
                }
            })
                .then((resultadoDescuento) => {
                    console.log("Productos con descuento: ", resultadoDescuento);
                })
                .catch((error) => {
                    console.log(error);
                })
        })
        .catch((error) => {
            console.log(error);
        })
}
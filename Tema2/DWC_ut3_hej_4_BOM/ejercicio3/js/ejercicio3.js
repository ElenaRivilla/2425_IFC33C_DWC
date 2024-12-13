let boton = document.getElementById("boton");

boton.onclick = function() {
    let width = 300;
    let height = 300;
    let left = (screen.width / 2) - (width / 2);
    let top = (screen.height / 2) - (height / 2);
    ventana = window.open("./bienvenido.html", "ventana", `width=${width}px, height=${height}px, top=${top}, left=${left}`);
};

botonMover.onclick = function () {
    let newLeft = 100;
    let newTop = 100;
    ventana.moveTo(newLeft, newTop);
};

botonRedimensionar.onclick = function () {
    let newWidth = 800;
    let newHeight = 600;
    ventana.resizeTo(newWidth, newHeight);
};
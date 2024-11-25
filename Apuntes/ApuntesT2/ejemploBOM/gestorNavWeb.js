function mostrarURLActual() {
    let url = location.href;
    let mensaje = `La URL actual es: ${url}`;
    alert(mensaje);
}

function irAtras() {
    let currentPos = history.state.position;

    if (!history.state && currentPos > 0) {
        replaceState("back");
        history.back();
    } else {
        alert("No hay páginas anteriores");
    }
}

function irAdelante() {
    let currentPos = history.state.position;

    if (currentPos === history.length - 1) {
        alert("No hay páginas siguientes");
    } else {
        replaceState("forward");
        history.forward();
    }
}

function replaceState(action) {
    /* if (!history.state) {
    history.replaceState("{position: 0}", "Home");
    } */

    let currentPos = history.state.position;
    let newPos = action === "forward" ? currentPos + 1 : currentPos - 1;

    history.pushState({ position: newPos }, `Position ${newPos}`);
}

function mostrarInfoNavegador() {
    let state = navigator.onLine ? 'On' : 'Off';
    let info = `Browser name: ${navigator.appName}\nUserAgent: ${navigator.userAgent}\nLanguage: ${navigator.language}\nState: ${state}`;
    alert(info);
}

function redirigirURL() {
    let url = document.getElementById("urlInput").value;

    if (url) {
        try {
            location.assign(url);
        } catch (e) {
            alert("URL no válida");
        }
    } else {
        alert("Introduce una URL");
    }
}
var emerWindow; 

function abrirPopup() {
    emerWindow = window.open("https://paucasesnovescifp.cat/", "Pau", "width=800, height=600");
    if (!emerWindow) {
        alert("No se ha podido abrir la ventana");
    }
}

function cerrarPopup() {
    if (emerWindow && !emerWindow.closed) {
        emerWindow.close();
        alert("Ventana emergente cerrada");
    } else {
        alert("No hay ventana emergente abierta");
    }
}
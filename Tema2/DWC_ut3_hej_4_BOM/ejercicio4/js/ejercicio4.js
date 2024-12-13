fecha = window.Date

function calcularDiferencia() {
    let horario1 = document.getElementById('horario1').value;
    let horario2 = document.getElementById('horario2').value;

    if (!horario1 || !horario2) {
        alert('Por favor, ingrese ambos horarios.');
        return;
    }

    let fecha1 = new Date(horario1);
    let fecha2 = new Date(horario2);

    if (isNaN(fecha1.getTime()) || isNaN(fecha2.getTime())) {
        alert('Por favor, ingrese horarios válidos.');
        return;
    }

    let diferencia = Math.abs(fecha2 - fecha1) / 1000;

    document.getElementById('resultado').innerText = `La diferencia es de ${diferencia} segundos.`;
}
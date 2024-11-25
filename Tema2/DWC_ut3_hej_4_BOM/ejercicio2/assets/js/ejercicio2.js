function getDayOfWeek() {
    let now = new Date();
    let day;

    switch (now.getDay()) {
        case 0:
            day = 'SUNDAY';
            break;
        case 1:
            day = 'MONDAY';
            break;
        case 2:
            day = 'TUESDAY';
            break;
        case 3:
            day = 'WEDNESDAY';
            break;
        case 4:
            day = 'THURSDAY';
            break;
        case 5:
            day = 'FRIDAY';
            break;
        case 6:
            day = 'SATURDAY';
            break;
    }
    return day;
}

function updateClock() {
    let clock = document.getElementById('clock');
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    clock.innerHTML = `${hours}<span class="blink">:</span>${minutes}<span class="blink">:</span>${seconds}`;
}

function updateDay() {
    let dayElement = document.getElementById('day');
    dayElement.innerHTML = getDayOfWeek();
}

setInterval(updateClock, 1000);
updateClock();
updateDay();

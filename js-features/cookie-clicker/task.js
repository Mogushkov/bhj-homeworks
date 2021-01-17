let clickCounter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let speedClick = document.getElementById('clicker__speed');
let sumClick = 0;
let click = 0;

cookie.onclick = function () {
    sumClick++;
    clickCounter.textContent++;
    if (sumClick % 2 == 0) {
        cookie.width = 200;
        click = (new Date().getTime());
    } else {
        cookie.width = 220;
        speedClick.textContent = (1000 / ((new Date()).getTime() - click)).toFixed(2);
    }
}
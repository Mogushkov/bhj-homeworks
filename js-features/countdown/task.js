let timeCounter = setInterval(function () {
    const timer = document.getElementById('timer');
    timer.textContent--;

    if(timer.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timeCounter);
    }
}, 1000) ;
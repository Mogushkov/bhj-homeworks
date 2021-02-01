let rotator = Array.from(document.querySelectorAll('.rotator__case'));
let index = 0;

function rotate() {
    if (index === rotator.length - 1) {
        rotator[index].classList.remove('rotator__case_active');
        index = 0;
        rotator[index].classList.add('rotator__case_active');
        rotator[index].style.color = rotator[index].dataset.color;
	} else {
        rotator[index].classList.remove('rotator__case_active');
        rotator[index + 1].classList.add('rotator__case_active');
        rotator[index + 1].style.color = rotator[index + 1].dataset.color;
    } 

    index++;
}

setInterval(rotate, 500)
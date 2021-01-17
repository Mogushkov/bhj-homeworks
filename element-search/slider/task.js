let sliders =Array.from(document.querySelectorAll(".slider__item")),
    prev = document.querySelector(".slider__arrow_prev"),
    next = document.querySelector(".slider__arrow_next"),
    dots = Array.from(document.querySelectorAll(".slider__dot"));
let slideActive = 0;

function hiddenSlide() {
    sliders[slideActive].className = "slider__item";
    dots[slideActive].className = "slider__dot";
};

function slideOn() {
    sliders[slideActive].className = "slider__item slider__item_active";
    dots[slideActive].className = "slider__dot slider__dot_active";
};

prev.onclick = () => {
    hiddenSlide();
    slideActive--;
    if (slideActive < 0) {
    slideActive = (sliders.length - 1);
}
slideOn();
}

next.onclick = () => {
    hiddenSlide();
    slideActive++;
    if (slideActive === sliders.length) {
        slideActive = 0;
    }
    slideOn();
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
        hiddenSlide();
        slideActive = i;
        slideOn();
    };
};
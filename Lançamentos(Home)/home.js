const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');
let currentIndex = 0;

function changeSlide() {
    images[currentIndex].style.opacity = 0;
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    images[currentIndex].style.opacity = 1;
}

setInterval(changeSlide, 3500);
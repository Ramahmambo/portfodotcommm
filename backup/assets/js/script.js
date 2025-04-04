// JavaScript for Slide Navigation
let currentSlide = 0;

function showSlide() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    showSlide();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    showSlide();
}

// Automatic Slide Change
setInterval(nextSlide, 5000); // Change slide every 5 seconds

document.querySelector('#nextBtn').addEventListener('click', nextSlide);
document.querySelector('#prevBtn').addEventListener('click', prevSlide);
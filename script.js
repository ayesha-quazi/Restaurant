// Carousel functionality
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-image');

// Buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Counter
let counter = 0;
const size = carouselImages[0].clientWidth;

// Move carousel to the starting position
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return; // Prevent scrolling beyond images
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; // Prevent scrolling before the first image
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

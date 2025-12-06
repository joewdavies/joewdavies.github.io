const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let index = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

const update = () => {
    track.style.transition = 'transform 0.3s ease-in-out';
    track.style.transform = `translateX(-${index * 100}%)`;
};

// --- Button navigation ---
nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    update();
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    update();
});

// --- Touch / Swipe support ---
track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    track.style.transition = 'none';
});

track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    const movePercent = (diff / track.offsetWidth) * 100;
    track.style.transform = `translateX(calc(-${index * 100}% + ${movePercent}%))`;
});

track.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    const diff = currentX - startX;

    if (Math.abs(diff) > 50) { // threshold in px
        if (diff < 0) {
            index = (index + 1) % images.length; // swipe left → next
        } else {
            index = (index - 1 + images.length) % images.length; // swipe right → prev
        }
    }

    update();
});

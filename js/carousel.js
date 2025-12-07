const carousel = document.querySelector('.carousel');
const track = carousel.querySelector('.carousel-track');
const images = Array.from(track.children);
const nextButton = carousel.querySelector('.next');
const prevButton = carousel.querySelector('.prev');

let index = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

function getSlideWidth() {
  return carousel.clientWidth;
}

function update(withTransition = true) {
  const slideWidth = getSlideWidth();
  track.style.transition = withTransition ? 'transform 0.3s ease' : 'none';
  track.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  if (index < images.length - 1) index++;
  update();
});

prevButton.addEventListener('click', () => {
  if (index > 0) index--;
  update();
});

// ✅ Listen on the carousel container
carousel.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  currentX = startX;
  isDragging = true;
  track.style.transition = 'none';
});

carousel.addEventListener('touchmove', e => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
  const diff = currentX - startX;
  const slideWidth = getSlideWidth();
  track.style.transform = `translateX(${-index * slideWidth + diff}px)`;
});

carousel.addEventListener('touchend', () => {
  if (!isDragging) return;
  isDragging = false;

  const diff = currentX - startX;
  const slideWidth = getSlideWidth();
  const threshold = slideWidth * 0.2;

  if (diff > threshold && index > 0) index--;
  else if (diff < -threshold && index < images.length - 1) index++;

  update(true);
});

carousel.addEventListener('touchcancel', () => {
  isDragging = false;
  update(true);
});

window.addEventListener('resize', () => update(false));
update(false);

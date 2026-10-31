const carousel = document.querySelector('.carousel');
const track = carousel && carousel.querySelector('.carousel-track');

if (carousel && track && track.children.length) {
  const images = Array.from(track.children);
  const nextButton = carousel.querySelector('.next');
  const prevButton = carousel.querySelector('.prev');
  const titleEl = document.querySelector('.carousel-title');
  const countEl = document.querySelector('.carousel-count');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  let index = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  const getSlideWidth = () => carousel.clientWidth;

  function update(withTransition = true) {
    index = Math.max(0, Math.min(index, images.length - 1));
    track.style.transition = withTransition && !reduceMotion.matches ? 'transform 0.3s ease' : 'none';
    track.style.transform = `translateX(${-index * getSlideWidth()}px)`;

    prevButton.disabled = index === 0;
    nextButton.disabled = index === images.length - 1;

    images.forEach((img, i) => {
      img.setAttribute('aria-hidden', i === index ? 'false' : 'true');
      // preload the neighbouring slides
      if (Math.abs(i - index) <= 1) img.loading = 'eager';
    });

    if (titleEl) titleEl.textContent = images[index].dataset.title || '';
    if (countEl) countEl.textContent = `${index + 1} / ${images.length}`;
  }

  nextButton.addEventListener('click', () => { index++; update(); });
  prevButton.addEventListener('click', () => { index--; update(); });

  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { index++; update(); e.preventDefault(); }
    else if (e.key === 'ArrowLeft') { index--; update(); e.preventDefault(); }
    else if (e.key === 'Home') { index = 0; update(); e.preventDefault(); }
    else if (e.key === 'End') { index = images.length - 1; update(); e.preventDefault(); }
  });

  // Swipe / drag (touch, pen and mouse) via pointer events
  track.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    startX = currentX = e.clientX;
    isDragging = true;
    track.setPointerCapture(e.pointerId);
    track.style.transition = 'none';
  });

  track.addEventListener('pointermove', e => {
    if (!isDragging) return;
    currentX = e.clientX;
    track.style.transform = `translateX(${-index * getSlideWidth() + (currentX - startX)}px)`;
  });

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    const diff = currentX - startX;
    const threshold = getSlideWidth() * 0.2;
    if (diff > threshold) index--;
    else if (diff < -threshold) index++;
    update(true);
  }

  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);
  track.addEventListener('dragstart', e => e.preventDefault());

  window.addEventListener('resize', () => update(false));
  update(false);
}

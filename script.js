const experienceYears = document.querySelector('[data-experience-years]');
if (experienceYears) {
  experienceYears.textContent = `${Math.max(0, new Date().getFullYear() - 2010)}+`;
}

document.querySelectorAll('[data-feedback-carousel]').forEach((carousel) => {
  const slides = [...carousel.querySelectorAll('[data-feedback-slide]')];
  const liveRegion = carousel.querySelector('.feedback-slides');
  const current = carousel.querySelector('[data-feedback-current]');
  const previous = carousel.querySelector('[data-feedback-prev]');
  const next = carousel.querySelector('[data-feedback-next]');
  const toggle = carousel.querySelector('[data-feedback-toggle]');
  let index = 0;
  let timer = null;
  let autoRotate = false;

  if (!slides.length || !liveRegion || !current || !previous || !next || !toggle) return;

  function showSlide(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== index;
    });
    current.textContent = String(index + 1).padStart(2, '0');
  }

  function stopTimer() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function startTimer() {
    if (!autoRotate || timer !== null || document.hidden) return;
    timer = window.setInterval(() => showSlide(index + 1), 6000);
  }

  function setAutoRotate(enabled) {
    autoRotate = enabled;
    stopTimer();
    toggle.textContent = enabled ? 'Pause' : 'Play';
    toggle.setAttribute('aria-label', enabled ? 'Pause automatic feedback rotation' : 'Play automatic feedback rotation');
    liveRegion.setAttribute('aria-live', enabled ? 'off' : 'polite');
    startTimer();
  }

  carousel.classList.add('carousel-ready');
  showSlide(0);
  setAutoRotate(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  previous.addEventListener('click', () => {
    setAutoRotate(false);
    showSlide(index - 1);
  });
  next.addEventListener('click', () => {
    setAutoRotate(false);
    showSlide(index + 1);
  });
  toggle.addEventListener('click', () => setAutoRotate(!autoRotate));
  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', startTimer);
  carousel.addEventListener('focusin', stopTimer);
  carousel.addEventListener('focusout', startTimer);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopTimer();
    else startTimer();
  });
});

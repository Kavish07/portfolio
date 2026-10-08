// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll state
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Cursor glow follow (desktop only)
const glow = document.getElementById('cursorGlow');
let hasFinePointer = window.matchMedia('(pointer: fine)').matches;
if (hasFinePointer) {
  window.addEventListener('mousemove', (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });
} else if (glow) {
  glow.style.display = 'none';
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => io.observe(el));

// Animated stat counters
const statEls = document.querySelectorAll('.stat-num');
const statIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
    statIO.unobserve(el);
  });
}, { threshold: 0.4 });
statEls.forEach((el) => statIO.observe(el));

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinksWrap = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => {
  const open = navToggle.classList.toggle('open');
  navLinksWrap?.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinksWrap?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    navLinksWrap.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

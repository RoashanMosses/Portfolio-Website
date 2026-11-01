document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Nav: background on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
const setMenu = (open) => {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  links.classList.toggle('is-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
};
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
links.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

// Scroll reveal with stagger for siblings
const revealItems = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealItems.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((child) => child.classList.contains('reveal'));
    el.style.setProperty('--delay', `${Math.min(siblings.indexOf(el), 5) * 0.08}s`);
    observer.observe(el);
  });
}

// Local time in Sri Lanka
const timeEl = document.getElementById('local-time');
const formatter = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Colombo' });
const tick = () => { timeEl.textContent = `${formatter.format(new Date())} GMT+5:30`; };
tick();
setInterval(tick, 30000);

// Case study: cursor spotlight + subtle screenshot parallax
const caseCard = document.querySelector('.case');
const browser = document.querySelector('.browser');
if (caseCard && !reduceMotion) {
  caseCard.addEventListener('pointermove', (event) => {
    const rect = caseCard.getBoundingClientRect();
    caseCard.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    caseCard.style.setProperty('--my', `${event.clientY - rect.top}px`);
  });
  window.addEventListener('scroll', () => {
    const rect = caseCard.getBoundingClientRect();
    const progress = 1 - Math.min(Math.max(rect.top / window.innerHeight, 0), 1);
    browser.style.setProperty('--parallax', `${(1 - progress) * 30}px`);
  }, { passive: true });
}

document.getElementById('year').textContent = new Date().getFullYear();

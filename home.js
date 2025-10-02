/*
// Image carousel (header banner auto-switching)
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);*/

// Optional: Sticky header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 10px rgba(0,0,0,0.1)'
    : 'none';
});

// Testimonials auto-scroll with infinite loop
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.testimonial-card');

// Clone testimonials for loop effect
cards.forEach(card => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

let scrollAmount = 0;
const scrollStep = 320;

function scrollNext() {
  scrollAmount += scrollStep;
  if (scrollAmount >= track.scrollWidth / 2) {
    scrollAmount = 0;
  }
  track.style.transition = 'transform 0.6s ease-in-out';
  track.style.transform = `translateX(-${scrollAmount}px)`;
}

let autoScroll = setInterval(scrollNext, 4000);

// Pause scrolling on hover
track.addEventListener('mouseenter', () => clearInterval(autoScroll));
track.addEventListener('mouseleave', () => autoScroll = setInterval(scrollNext, 4000));

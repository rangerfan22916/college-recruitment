// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.className = "scroll-top";
scrollBtn.innerHTML = "↑";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Form validation
function setupFormValidation(formId){
  const form = document.getElementById(formId);
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('input, select, textarea').forEach(input => {
      if(!input.checkValidity()){
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#ccc";
      }
    });
    if(valid){
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Please complete all required fields correctly.");
    }
  });
}

setupFormValidation('contactForm');
setupFormValidation('inquiryForm');

// Simple Carousel Hover Pause
const galleries = document.querySelectorAll('.carousel');
galleries.forEach(carousel => {
  carousel.addEventListener('mouseenter', () => carousel.pause());
  carousel.addEventListener('mouseleave', () => carousel.cycle());
});

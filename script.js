// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle curriculum lists (Academics page)
function toggleCurriculum(id) {
  const element = document.getElementById(id);
  if(element.style.display === "none" || !element.style.display) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// Contact form validation and success animation
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const submitBtn = this.querySelector('button[type="submit"]');
  submitBtn.innerText = 'Sending...';
  setTimeout(() => {
    alert('Thank you! Your message has been submitted.');
    this.reset();
    submitBtn.innerText = 'Submit';
  }, 800);
});

// Fade-in on scroll for sections
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

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

faders.forEach(fader => appearOnScroll.observe(fader));


// Scroll-triggered counter animation
const counters = document.querySelectorAll('.counter');
let counted = false;

function runCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let current = 0;
    const increment = Math.ceil(target / 200);

    const updateCounter = () => {
      current += increment;
      if(current < target) {
        counter.innerText = current.toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCounter();
  });
}

function checkCounters() {
  const statsSection = document.getElementById('stats');
  if(!statsSection) return;
  const sectionTop = statsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if(sectionTop < screenHeight && !counted) {
    runCounters();
    counted = true;
  }
}

// Run once in case the section is already in view
checkCounters();

// Listen for scroll to trigger counters
window.addEventListener('scroll', checkCounters);

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
      if (current < target) {
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
  const statsSection = document.getElementById('alumni-stats');
  if (!statsSection) return;
  const sectionTop = statsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight && !counted) {
    runCounters();
    counted = true;
  }
}

// Run once in case section already visible
checkCounters();

// Trigger on scroll
window.addEventListener('scroll', checkCounters);

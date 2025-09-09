// Contact form interactivity
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formMsg.textContent = "Thank you! Your message has been sent.";
      formMsg.style.color = "green";
      form.reset();
    });
  }
});

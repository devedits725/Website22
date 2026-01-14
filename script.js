// Smooth scroll to collections
document.getElementById("exploreBtn").onclick = () => {
  document.getElementById("collections").scrollIntoView({ behavior: "smooth" });
};

// Testimonial slider
const testimonials = [
  "Excellent quality and trustworthy service!",
  "Beautiful designs and genuine pricing.",
  "Our family jeweller for every occasion."
];

let index = 0;
const testimonialText = document.getElementById("testimonialText");

function changeTestimonial() {
  testimonialText.textContent = testimonials[index];
  index = (index + 1) % testimonials.length;
}

setInterval(changeTestimonial, 3000);
changeTestimonial();

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";
  this.reset();
});

// Scroll-to-top button
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
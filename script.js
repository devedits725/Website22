function scrollToCatalogue() {
  document.getElementById("catalogue").scrollIntoView({
    behavior: "smooth"
  });
}

/* IMAGE POPUP */
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".item img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closePopup.onclick = () => popup.style.display = "none";

/* BACK TO TOP */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/* SCROLL ANIMATION (SECTIONS + CATALOGUE ITEMS) */
const animatedElements = document.querySelectorAll(".animate, .catalogue-grid .item");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.5 }
);

animatedElements.forEach(el => observer.observe(el));

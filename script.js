function scrollToCatalogue() {
  document.getElementById("catalogue").scrollIntoView({
    behavior: "smooth"
  });
}

// Image popup logic
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".item img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closePopup.onclick = () => {
  popup.style.display = "none";
};

popup.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};
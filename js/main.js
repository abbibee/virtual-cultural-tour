// ----------------------------------------------------
// SINGLE IMAGE CAROUSEL (WORKING VERSION)
// ----------------------------------------------------

function scrollGallery(button, direction) {
  const carousel = button.closest(".carousel");
  const track = carousel.querySelector(".carousel-track");
  const slides = track.querySelectorAll("img");

  let currentIndex = parseInt(carousel.getAttribute("data-index"));

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  carousel.setAttribute("data-index", currentIndex);

  track.style.transform = "translateX(-" + (currentIndex * 100) + "%)";
}


// Slider

let index = 0;
let left = document.querySelector("#Slideleft");
let right = document.querySelector("#right");
let slider = document.querySelector(".sliderMain");
let imgs = document.querySelectorAll(".sliderMain img");
let autoSlide = null;

left.addEventListener("click", () => {
  index = (index - 1 + imgs.length) % imgs.length;
  updateSliderPosition();
  resetAutoSlide();
});

right.addEventListener("click", () => {
  index = (index + 1) % imgs.length;
  updateSliderPosition();
  resetAutoSlide();
});

function updateSliderPosition() {
  imgs.forEach((slide, i) => {
    const translateXValue = -index * 100; // Adjust if needed
    slide.style.transform = `translateX(${translateXValue}%)`;
  });
}

function autoSlideFunction() {
  index = (index + 1) % imgs.length;
  updateSliderPosition();
  autoSlide = setTimeout(autoSlideFunction, 2000);
}

function resetAutoSlide() {
  clearTimeout(autoSlide);
  autoSlide = setTimeout(autoSlideFunction, 2000);
}

// Start auto slide
resetAutoSlide();

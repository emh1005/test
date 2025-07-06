window.addEventListener("scroll", function () {
  const header = document.querySelector(".nav");
  const navName = document.querySelector(".nav-name");
  if (window.scrollY > 200) {
    header.classList.add("active");
    navName.classList.add("active");
  } else {
    header.classList.remove("active");
    navName.classList.remove("active");
  }
});

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

const slideContainer = document.getElementById("carousel-slide");
const items = slideContainer.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const itemsPerPage = 3;
const totalItems = items.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
let currentPage = 0;

function updateSlide() {
  const containerWidth = document.querySelector(
    ".carousel-container"
  ).offsetWidth;
  const offset = -(currentPage * containerWidth);
  slideContainer.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener("click", () => {
  currentPage = (currentPage - 1 + totalPages) % totalPages;
  updateSlide();
});

nextBtn.addEventListener("click", () => {
  currentPage = (currentPage + 1) % totalPages;
  updateSlide();
});

window.addEventListener("resize", updateSlide);
updateSlide();

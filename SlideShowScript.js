/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"];
let slideIndex = [1,1];

window.addEventListener('load', initSlidesOnLoad);
// showSlides(1, 1);

function plusSlides(n, no) {
  slideIndex[no] += n;
  showSlides(slideIndex[no], no);
}

function currentSlide(n, no) {
  slideIndex[no] = n;
  showSlides(n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
} 

function initSlidesOnLoad() {
  showSlides(1, 0);
}
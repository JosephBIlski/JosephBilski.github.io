/* Class the members of each slideshow group with different CSS classes */
let slideId = [];
window.addEventListener('load', initSlidesOnLoad);

function plusSlides(n, ele) { // expects  child of slideshow-container
  const par = ele.parentElement;
  par.dataset.slide = String(+par.dataset.slide + n);
  showSlides(par.dataset.slide, par);
  resetTimer(par);
}

function currentSlide(n, ele) { // expects to be called from highlighted buttons
  let containerId = ele.parentElement.parentElement.parentElement;
  containerId.dataset.slide = String(n);
  showSlides(n, containerId);
  resetTimer(containerId);
}

function setDotHighlight(containerEle) {
    let slideImages = containerEle.querySelectorAll('[class^=mySlides]');
    let activeSlide = slideImages[+containerEle.dataset.slide - 1];
    let allDots = activeSlide.querySelectorAll('.dots')[0].children;
    allDots = [...allDots];
    allDots.forEach(element => {
      element.style.backgroundColor = "#fff";
    });
    // change corresponding dot to have a shaded BG
    allDots[+containerEle.dataset.slide -1].style.backgroundColor = "#aaa";
}

function showSlides(n, slideId) {
  //slideId is a misnomer, it's actually the div parent element with 
  // class 'slideshow-container'
  let i;
  let x = slideId.querySelectorAll('[class^=mySlides]');
  if (n > x.length) {slideId.dataset.slide = String(1)}
  if (n < 1) {slideId.dataset.slide = String(x.length)}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[Number(slideId.dataset.slide) - 1].style.display = "grid";
  setDotHighlight(slideId);
  // setTimeout(setDotHighlight, 50, slideId);
} 

function autoSlide(n, ele){
  plusSlides(n, ele.children[0])
}


function initSlidesOnLoad() {
  let slideId = document.querySelectorAll('[class^=slideshow-container]');
  for (let i = 0; i < slideId.length; i++) {
      showSlides(1, slideId[i]);
      startTimer(slideId[i]);
  }
}

function startTimer(ele) {
  ele.timer = setInterval(() => {
      autoSlide(1, ele);
  }, 12000);
}

function resetTimer(ele) {
  clearInterval(ele.timer);
  ele.timer = setInterval(() => {
    autoSlide(1, ele);
}, 12000);
}
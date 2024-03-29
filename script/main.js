const sliderArrowsItems = document.querySelectorAll(".slider-items-first a"),
      nextArrow = document.querySelector(".next"),
      prevArrow = document.querySelector(".prev"),
      sliderFirstItems = document.querySelectorAll(".slider-items-second a"),
      nextFirst = document.querySelector(".next-first"),
      prevFirst = document.querySelector(".prev-first"),
      sliderThirdItems = document.querySelectorAll(".slider-items-third a"),
      nextThird = document.querySelector(".next-third"),
      prevThird = document.querySelector(".prev-third");

let arrowsIndex = 0;
let arrowsFirst = 0;
let arrowsThird = 0;

function changeSlideArrows(n) {
    arrowsIndex += 1;
    if(arrowsIndex >= sliderArrowsItems.length) arrowsIndex = 0;
    if(arrowsIndex < 0) arrowsIndex = sliderArrowsItems.length - 1;
    sliderArrowsItems.forEach(item => item.classList.add("hide"));
    sliderArrowsItems[arrowsIndex].classList.remove("hide");
}

function changeSlideFirst(n) {
    arrowsFirst += 1;
    if(arrowsFirst >= sliderFirstItems.length) arrowsFirst = 0;
    if(arrowsFirst < 0) arrowsFirst = sliderFirstItems.length - 1;
    sliderFirstItems.forEach(item => item.classList.add("hide"));
    sliderFirstItems[arrowsFirst].classList.remove("hide");
}

function changeSlideThird(n) {
    arrowsThird += 1;
    if(arrowsThird >= sliderThirdItems.length) arrowsThird = 0;
    if(arrowsThird < 0) arrowsThird = sliderThirdItems.length - 1;
    sliderThirdItems.forEach(item => item.classList.add("hide"));
    sliderThirdItems[arrowsThird].classList.remove("hide");
}

nextArrow.addEventListener("click", function() {
    changeSlideArrows(1);
});

prevArrow.addEventListener("click", function() {
    changeSlideArrows(-1);
});

nextFirst.addEventListener("click", function() {
    changeSlideFirst(1);
});

prevFirst.addEventListener("click", function() {
    changeSlideFirst(-1);
});

nextThird.addEventListener("click", function() {
    changeSlideThird(1);
});

prevThird.addEventListener("click", function() {
    changeSlideThird(-1);
});

// hideSlide(sliderBtns, sliderItems);

const navBtn = document.querySelectorAll(".menu a");

navBtn.forEach(btn => btn.addEventListener("click", function(event) {
    event.preventDefault();
    const id = btn.getAttribute("href");
    const section = document.querySelector(id);
    window.scroll({
        top : section.offsetTop - 80,
        behavior : "smooth"
    });
}));

//новый слайдер

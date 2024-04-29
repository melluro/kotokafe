let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}


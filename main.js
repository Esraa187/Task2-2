const body = document.body
const slides = document.querySelectorAll('.slide')

let activeSlide = 0
showSlides(activeSlide)
function plusSlides(n) {
    showSlides(activeSlide += n);
}

function showSlides(n) {
    if (n > slides.length-1) { activeSlide = 0 }
    if (n < 0) { activeSlide = slides.length }
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')

}
setInterval(() => plusSlides(1), 3000)

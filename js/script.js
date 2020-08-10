var curSlide = document.querySelector('.current')
var next = document.querySelector('.next')
var previus = document.querySelector('.previus')
var slides = document.querySelectorAll('.slide')
var flag = 0

function nextSlide() {
    if(flag < 4){
    slides[flag].classList.toggle('current')
    flag = flag + 1
    slides[flag].classList.toggle('current')
  }else {
    slides[flag].classList.toggle('current')
    flag = 0
    slides[flag].classList.toggle('current')
  }
}

function prevSlide(){
  if(flag > 0){
    slides[flag].classList.toggle('current')
    flag = flag - 1
    slides[flag].classList.toggle('current')
  }else{
    slides[flag].classList.toggle('current')
    flag = 4
    slides[flag].classList.toggle('current')
  }
}

next.addEventListener("click", nextSlide)
previus.addEventListener("click", prevSlide)

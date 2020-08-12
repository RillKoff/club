var btn = document.querySelectorAll('.size_button')
console.log(btn)
var popup = document.querySelector('.popup')
console.log(popup)
var photos = document.querySelectorAll('.photos_small')
console.log(photos)
var close1 = document.querySelector('.popup_close1')
var close2 = document.querySelector('.popup_close2')


for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      popup.style.display = "block";
  })
}

close1.addEventListener('click', function () {
  popup.style.display = "none";
})

close2.addEventListener('click', function () {
  popup.style.display = "none";
})

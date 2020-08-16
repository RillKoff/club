var btn_size = document.querySelectorAll('.size_button')
var popup = document.querySelector('.popup')
var photos = document.querySelectorAll('.photos_small')
var close1 = document.querySelector('.popup_close1')
var close2 = document.querySelector('.popup_close2')


function photo_popup_show() {
  popup.classList.toggle('popup_hide')
  let photo_show = document.querySelector('.photos_show')
  photo_show.classList.toggle('photos_show')
}

for (let i = 0; i < btn_size.length; i++){
    btn_size[i].addEventListener("click", function() {
      popup.classList.toggle('popup_hide')
      photos[i].classList.toggle('photos_show')
  })
}

close1.addEventListener('click', function () {
  photo_popup_show()
})


close2.addEventListener('click', function () {
  photo_popup_show()
})

document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    if (keyCode === 27) {
      photo_popup_show()
    }
})

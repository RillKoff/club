var btn_click = document.querySelectorAll('.size_button')
var popup_doc = document.querySelector('.popup')
var photos = document.querySelectorAll('.photos_small')
var close1 = document.querySelector('.popup_close1')
var close2 = document.querySelector('.popup_close2')


function photo_popup_show() {
  popup_doc.classList.toggle('popup_hide')
  let photo_show = document.querySelector('.photos_show')
  photo_show.classList.toggle('photos_show')
  
}

for (let i = 0; i < btn_click.length; i++){
    btn_click[i].addEventListener("click", function() {
      popup_doc.classList.toggle('popup_hide')
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

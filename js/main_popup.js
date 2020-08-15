let popup = document.querySelector('.main_popup')
let btn = document.querySelector('.headerNav_hide_menu_btn')
let close = document.querySelector('.close')

btn.addEventListener('click', function () {
    popup.classList.toggle('main_popup_hide')
})

close.addEventListener('click', function () {
    popup.classList.toggle('main_popup_hide')
})

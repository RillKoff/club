var block = document.querySelectorAll('.manage_block_photo')
var rotate_block = document.querySelectorAll('.manage_block_photo_rotate')

  for(let i = 0; i < block.length; i++){
    block[i].addEventListener("mouseover", function() {
      rotate_block[i].style.transform = 'rotate(20deg)'
    })
  }

  for(let i = 0; i < block.length; i++){
    block[i].addEventListener("mouseout", function() {
        if(rotate_block[i].style.transform = 'rotate(20deg)'){
        rotate_block[i].style.transform = 'rotate(0deg)'
      }
    })
  }

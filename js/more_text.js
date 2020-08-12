var block = document.querySelectorAll('.archive_block')
console.log(block)

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener('click', function() {
    block[i].classList.toggle('more');
  })
}

const modalWind = document.querySelector('.modal'),
      addBlock = document.querySelector('.cards__item_anim'),
      closeblock = document.querySelector('.modal__close');

addBlock.addEventListener('click', () => {
    modalWind.style.display = 'block';
})

closeblock.addEventListener('click', () => {
    modalWind.style.display = 'none';
})
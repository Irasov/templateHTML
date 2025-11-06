const swiperBlock = document.querySelector('.swiper-wrapper');
if (swiperBlock) {
  for (let i = 0; i < slideInfo.length; i++) {
    const slide = createSlide(slideInfo[i]);
    swiperBlock.appendChild(slide.getNode());
  }
}

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.closest('.header__icon')) {
    burgrMenu();
  }
});

const swiperBlock = document.querySelector('.swiper-wrapper');
const categoriesItems = document.querySelector('.category__items');

if (swiperBlock) {
  for (let i = 0; i < slideInfo.length; i++) {
    const slide = createSlide(slideInfo[i]);
    swiperBlock.appendChild(slide.getNode());
  }
}

if (categoriesItems) {
  for (let i = 0; i < catInfo.length; i++) {
    const category = createCategory(catInfo[i]);
    categoriesItems.appendChild(category.getNode());
  }
}

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.closest('.header__icon')) {
    burgrMenu();
  }
});

const swiperBlock = document.querySelector('.swiper-wrapper');
const categoriesItems = document.querySelector('.category__items');

addItems(swiperBlock, slideInfo, createSlide);
addItems(categoriesItems, catInfo, createCategory);

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.closest('.header__icon')) {
    burgrMenu();
  }
});

function addItems(element, items, func) {
  if (element) {
    for (let i = 0; i < items.length; i++) {
      const item = func(items[i]);
      element.appendChild(item.getNode());
    }
  }
}

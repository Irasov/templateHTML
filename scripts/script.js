const swiperBlock = document.querySelector('.swiper-wrapper');
const categoriesItems = document.querySelector('.category__items');
const articlesItems = document.querySelector('.articles__items');
const LIMIT_ARTICLES = 8;

addItems(swiperBlock, slideInfo, createSlide);
addItems(categoriesItems, catInfo, createCategory);
addItems(articlesItems, articlesInfo, createArticles);

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.closest('.header__icon')) {
    burgrMenu();
  }
});

function addItems(element, items, func) {
  const len = items.length <= LIMIT_ARTICLES ? items.length : LIMIT_ARTICLES;
  if (element) {
    for (let i = 0; i < len; i++) {
      const item = func(items[i]);
      element.appendChild(item.getNode());
    }
  }
}

const swiperBlock = document.querySelector('.swiper-wrapper');
const categoriesItems = document.querySelector('.category__items');
const articlesItems = document.querySelector('.articles__items');
const catArticles = document.querySelector('.cat-articles__items');
const catArticlesTitle = document.querySelector('.cat-articles__title');
const LIMIT_ARTICLES = 8;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cat = urlParams.get('cat');
const partSite = ['article-main', 'slide', 'category', 'articles'];

addItems(swiperBlock, articlesInfo, createSlide, partSite[1]);
addItems(categoriesItems, catInfo, createCategory, partSite[2]);
addItems(articlesItems, articlesInfo, createArticles, partSite[0]);
addItems(catArticles, articlesInfo, createArticles, partSite[3], cat);

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  console.log(targetElement.parentNode);
  if (targetElement.closest('.header__icon')) {
    burgrMenu();
  }
});

function addItems(element, items, func, part, cat) {
  const len = items.length <= LIMIT_ARTICLES ? items.length : LIMIT_ARTICLES;
  if (element) {
    if (part == partSite[0]) {
      for (let i = 0; i < len; i++) {
        addItem(func, items[i], element);
      }
    } else if (part == partSite[1]) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].slide) {
          addItem(func, items[i], element);
        }
      }
    } else if (part == partSite[2]) {
      for (let i = 0; i < items.length; i++) {
        addItem(func, items[i], element);
      }
    } else if (part == partSite[3]) {
      if (cat == 'all') {
        catArticlesTitle.textContent = 'Category: ' + cat;
        for (let i = 0; i < items.length; i++) {
          addItem(func, items[i], element);
        }
      } else if (categoriesName.includes(cat)) {
        catArticlesTitle.textContent = 'Category: ' + cat;
        for (let i = 0; i < items.length; i++) {
          if (cat === items[i].cat) {
            addItem(func, items[i], element);
          }
        }
      } else {
        catArticlesTitle.textContent = 'Category: Not found';
      }
    }
  }
}

function addItem(func, items, element) {
  const item = func(items);
  element.appendChild(item.getNode());
}

const swiperBlock = document.querySelector('.swiper-wrapper');
const categoriesItems = document.querySelector('.category__items');
const articlesItems = document.querySelector('.articles__items');
const catArticles = document.querySelector('.cat-articles__items');
const catArticlesTitle = document.querySelector('.cat-articles__title');
const LIMIT_ARTICLES = 8;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cat = urlParams.get('cat');

addItems(swiperBlock, slideInfo, createSlide);
addItems(categoriesItems, catInfo, createCategory);
addItems(articlesItems, articlesInfo, createArticles);
addArticles(cat);

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  console.log(targetElement.parentNode);
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

function addArticles(cat) {
  if (catArticles) {
    if (cat === 'all') {
      catArticlesTitle.textContent = 'Category: ' + cat;
      for (let i = 0; i < articlesInfo.length; i++) {
        const item = createArticles(articlesInfo[i]);
        catArticles.appendChild(item.getNode());
      }
    } else {
      for (let i = 0; i < articlesInfo.length; i++) {
        if (cat === articlesInfo[i].cat) {
          const item = createArticles(articlesInfo[i]);
          catArticles.appendChild(item.getNode());
        }
        catArticlesTitle.textContent = 'Category: ' + cat;
      }
    }
  }
}

function createArticles(options) {
  const link = new Component({ tag: 'a', classes: ['articles__link'], text: 'Read more' });
  link.setAttribute('href', options.link);
  const cat = new Component({ tag: 'h5', classes: ['articles__cat'], text: options.cat });
  const footer = new Component({ classes: ['articles__footer'] }, cat, link);

  const text = new Component({ classes: ['articles__preview'], text: options.text });
  const name = new Component({ tag: 'h4', classes: ['articles__name'], text: options.name });
  const info = new Component({ classes: ['articles__info'] }, name, text, footer);

  const img = new Component({ tag: 'img', classes: ['articles__img'] });
  img.setAttribute('alt', options.name);
  img.setAttribute('src', options.img);
  const linkImage = new Component({ tag: 'a', classes: ['articles__image'] }, img);
  linkImage.setAttribute('href', options.link);
  const article = new Component({ classes: ['articles__item'] }, linkImage, info);
  return article;
}

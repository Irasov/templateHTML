function createSlide(options) {
  const link = new Component({
    tag: 'a',
    classes: ['slide__link'],
    text: 'Read more',
  });
  link.setAttribute('href', options.link);
  const subtitle = new Component({
    classes: ['slide__subtitle'],
    text: options.text,
  });
  const title = new Component({
    classes: ['slide__title'],
    text: options.name,
  });
  const cat = new Component({
    classes: ['slide__cat'],
    text: options.cat,
  });
  const main = new Component({ classes: ['slide__main'] }, cat, title, subtitle, link);
  const img = new Component({ tag: 'img', classes: ['slide__img'] });
  img.setAttribute('alt', options.name);
  img.setAttribute('src', options.img);
  const image = new Component({ classes: ['slide__image'] }, img);
  const slideContainer = new Component({ classes: ['slide'] }, image, main);
  const slide = new Component({ classes: ['swiper-slide'] }, slideContainer);
  return slide;
}

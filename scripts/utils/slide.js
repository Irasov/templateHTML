function createSlide(options) {
  const link = new Component({
    tag: 'a',
    classes: ['slide__link'],
    text: 'Read more',
  });
  link.setAttribute('href', options.link);
  const subtitle = new Component({
    classes: ['slide__subtitle'],
    text: options.subtitle,
  });
  const title = new Component({
    classes: ['slide__title'],
    text: options.title,
  });
  const main = new Component({ classes: ['slide__main'] }, title, subtitle, link);
  const img = new Component({ tag: 'img', classes: ['slide__img'] });
  img.setAttribute('alt', options.alt);
  img.setAttribute('src', options.img);
  const image = new Component({ classes: ['slide__image'] }, img);
  const slideContainer = new Component({ classes: ['slide'] }, image, main);
  const slide = new Component({ classes: ['swiper-slide'] }, slideContainer);
  return slide;
}

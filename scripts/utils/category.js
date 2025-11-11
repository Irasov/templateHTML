function createCategory(options) {
  const img = new Component({ tag: 'img', classes: ['category__img'] });
  img.setAttribute('alt', options.name.trim());
  img.setAttribute('src', options.img);
  const imageLink = new Component({ tag: 'a', classes: options.classesImgLink }, img);
  imageLink.setAttribute('href', options.link);

  const name = new Component({ classes: ['category__name'], text: options.name });
  const link = new Component({ tag: 'a', classes: options.classesLink });
  link.getNode().appendChild(arrow(options));
  link.setAttribute('href', options.link);
  const info = new Component({ classes: ['category__info'] }, name, link);
  const categoryItem = new Component({ classes: ['category__item'] }, imageLink, info);
  return categoryItem;
}

function arrow(options) {
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.classList.add(...options.classesBtn);
  svg.setAttribute('width', '21');
  svg.setAttribute('height', '8');
  svg.setAttribute('viewBox', '0 0 21 8');
  svg.setAttribute('fill', 'none');
  const path = document.createElementNS(SVG_NS, 'path');
  path.setAttribute(
    'd',
    'M20.0981 3.99996L20.4516 4.35351C20.5454 4.25974 20.5981 4.13257 20.5981 3.99996C20.5981 3.86735 20.5454 3.74017 20.4516 3.64641L20.0981 3.99996ZM17.2696 1.17153L17.6232 0.817978C17.5533 0.747835 17.4641 0.700024 17.3671 0.680606C17.27 0.661189 17.1693 0.671039 17.0778 0.708909C16.9863 0.746778 16.9081 0.810962 16.8531 0.893322C16.7982 0.975683 16.7689 1.07251 16.769 1.17153L17.2696 1.17153ZM17.2696 6.82839L16.769 6.82839C16.7689 6.92741 16.7982 7.02424 16.8531 7.1066C16.9081 7.18896 16.9863 7.25314 17.0778 7.29101C17.1693 7.32888 17.27 7.33873 17.3671 7.31931C17.4641 7.29989 17.5533 7.25208 17.6232 7.18194L17.2696 6.82839ZM17.2696 3.49933L0.299072 3.49933L0.299072 4.50059L17.2696 4.50059V3.49933ZM20.4516 3.64641L17.6232 0.817978L16.9161 1.52509L19.7445 4.35351L20.4516 3.64641ZM16.769 1.17153V6.82839L17.7703 6.82839L17.7703 1.17153L16.769 1.17153ZM17.6232 7.18194L20.4516 4.35351L19.7445 3.64641L16.9161 6.47483L17.6232 7.18194Z',
  );
  path.setAttribute('fill', '#333333');
  svg.appendChild(path);
  return svg;
}

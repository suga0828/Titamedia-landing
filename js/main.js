// To implement toggleMenu
// Button with class js-toggleMenuBtn and attr data-menu="value"
// Menu with class js-toggleMenu and attr data-menu="value"
const toggleMenuBtn = document.querySelector('.js-toggleMenuBtn');

toggleMenuBtn.addEventListener('click', event => {
  const btn = event.target;
  const menuBind = btn.dataset.menu;
  const menu = document.querySelector(`.js-toggleMenu[data-menu=${menuBind}]`);
  toggleIco(btn);
  menu.classList.toggle('is-hide-mobile');
  document.body.classList.toggle('is-overflow');
});

const toggleIco = el => {
  if (el.innerHTML === 'X') {
    el.innerHTML = '☰';
  } else {
    el.innerHTML = 'X';
  }
};

// Load json
const loadJSON = callback => {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType('application/json');
  xobj.open('GET', 'assets/slides.json', true);
  xobj.onreadystatechange = e => {
    if (xobj.readyState === 4 && xobj.status === 200) {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
};

loadJSON(res => {
  const data = JSON.parse(res);
  loadSlider(data);
});

// Load slider
const loadSlider = data => {
  const pathRoot = data.path_root;
  const images = data.slides;
  const slider = document.querySelector('#hero');
  let slides = slider.querySelector('.glide__slides');
  for (let i = 0; i < images.length; i++) {
    let slide = document.createElement('li');
    const title = document.createElement('h2');
    const image = document.createElement('img');
    const path = `${pathRoot}${images[i].name}`;
    const name = images[i].title;
    slide.classList.add('glide__slide');
    slide.classList.add('hero__slide');
    title.classList.add('hero__title');
    title.innerHTML = images[i].message;
    image.setAttribute('src', path);
    image.setAttribute('alt', name);
    slide.appendChild(title);
    slide.appendChild(image);
    slides.appendChild(slide);
  }

  // Glide options
  const glide = new Glide('#hero', {
    gap: 0,
    type: 'slider',
    autoplay: 3000,
    animationDuration: 700
  });
  // Instance of glide Class

  glide.mount();
};

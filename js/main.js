// To implement toggleMenu
// Button with class js-toggleMenuBtn and attr data-menu="value"
// Menu with class js-toggleMenu and attr data-menu="value"
const toggleMenuBtn = document.querySelector('.js-toggleMenuBtn'),
      toggleIco = (el) => {
  el.classList.toggle('fa-times', 'fa-bars')
}

toggleMenuBtn.addEventListener('click', event => {
  const btn = event.target,
        menuBind = btn.dataset.menu,
        menu = document.querySelector(`.js-toggleMenu[data-menu=${menuBind}]`);
  toggleIco(btn);
  menu.classList.toggle('is-hide-mobile');
  document.body.classList.toggle('is-overflow');
});

// Load slides from json
const loadJSON = callback => {   
  let xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', 'assets/slides.json', true);
  xobj.onreadystatechange = () => {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

loadJSON(res => console.log(res));
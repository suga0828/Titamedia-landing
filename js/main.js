var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

// request.send();

// To implement toggleMenu
// Button with class js-toggleMenuBtn and attr data-menu="value"
// Menu with class js-toggleMenu and attr data-menu="value"
const toggleMenuBtn = document.querySelector('.js-toggleMenuBtn');

toggleMenuBtn.addEventListener('click', event => {
  const btn = event.target,
        menuBind = btn.dataset.menu,
        menu = document.querySelector(`.js-toggleMenu[data-menu=${menuBind}]`);
  toggleIco(btn);
  menu.classList.toggle('is-hide-mobile');
  document.body.classList.toggle('is-overflow');
})

const toggleIco = (el) => {
  el.classList.toggle('fa-times', 'fa-bars')
}
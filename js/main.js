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

const toggleMenu = document.querySelector('.js-toggleMenu');
const toggleMenuBtn = document.querySelector('.js-toggleMenuBtn');

toggleMenuBtn.addEventListener('click', event => {
  toggleIco(toggleMenuBtn);
  console.log(toggleMenuBtn)
  toggleMenu.classList.toggle('is-hide-mobile', '');
})

const toggleIco = (el) => {
  el.classList.toggle('fa-times', 'fa-bars')
}
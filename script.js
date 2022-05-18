const hamburger = document.querySelector('#bar');
const close = document.querySelector('#close');
const navigation = document.querySelector('.barlist');
const textPortfolio = document.querySelector('.nav-link-1');
const about = document.querySelector('.nav-link-2');
const contact = document.querySelector('.nav-link-3');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();

  navigation.classList.toggle('show');
  hamburger.classList.add('hide');
  close.classList.remove('hide');
  textPortfolio.classList.add('menu-text');
  about.classList.add('menu-text');
  contact.classList.add('menu-text');
});
import pageLayout from './pageLayout';
import homeContent from './homeContent';
import menuContent from './menuContent';
import aboutContent from './aboutContent';
import contactsContent from './contactsContent';
import './styles.css';

document.body.appendChild(pageLayout);

const main = document.querySelector('.page-main');
// TODO: check hash on load
main.appendChild(homeContent);

// TODO: add switch logic
// TODO: place component files (js, styles, assets) in separate folders

// switch logic
const navLinks = Array.from(document.querySelectorAll('.header-nav__link'));
const logoLink = document.querySelector('.header-logo');
navLinks.push(logoLink);

const pageContent = {
  home: homeContent,
  menu: menuContent,
  contacts: contactsContent,
  about: aboutContent,
};

function getPageName(e) {
  const page = e.target.getAttribute('href').slice(1);
  return page === '#' ? 'home' : page;
}

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const page = getPageName(e);
    // TODO: add active class

    // update UI
    // TODO: do something like UI.displayPage(page) maybe
    // TODO: check current page, don't update home to home
    main.innerHTML = '';
    main.appendChild(pageContent[page]);
  });
});

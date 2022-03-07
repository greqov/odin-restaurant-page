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
const navLinks = document.querySelectorAll('.header-nav__link');

const pageContent = {
  home: homeContent,
  menu: menuContent,
  contacts: contactsContent,
  about: aboutContent,
};

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = e.target.getAttribute('href');
    const type = href.slice(1);
    // TODO: add active class

    // update UI
    // TODO: do something like UI.displayPage(page) maybe
    main.innerHTML = '';
    main.appendChild(pageContent[type]);
  });
});

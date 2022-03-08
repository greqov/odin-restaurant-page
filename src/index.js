import ui from './ui';
import pageLayout from './pageLayout';
import homeContent from './homeContent';
import './styles.css';

const UI = ui();

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

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const page = UI.getPageName(e);
    // TODO: add active class

    // Avoid rerender the same page
    if (page === UI.currentPage) return;

    UI.displayPage(page);
  });
});

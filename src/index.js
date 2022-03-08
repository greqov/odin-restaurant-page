import ui from './ui';
import './styles.css';

const UI = ui();
UI.init();

// TODO: place component files (js, styles, assets) in separate folders

(function switchPagesHandler() {
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
})();

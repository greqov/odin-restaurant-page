import ui from './ui';
import './css/styles.css';

const UI = ui();
UI.init();

(function switchPagesHandler() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('js-nav-link')) {
      const page = UI.getPageName(e);
      // Avoid rerender the same page
      if (page === UI.currentPage) return;
      UI.displayPage(page);
    }
  });
})();

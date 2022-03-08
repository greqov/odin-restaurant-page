import pageLayout from './pageLayout';
import homeContent from './homeContent';
import menuContent from './menuContent';
import aboutContent from './aboutContent';
import contactsContent from './contactsContent';

function ui() {
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

  function displayPage(page) {
    // NOTE: is it okay to look for elem each time?
    const main = document.querySelector('.page-main');
    main.innerHTML = '';
    main.appendChild(pageContent[page]);
    this.currentPage = page;
  }

  function init() {
    document.body.appendChild(pageLayout);
    // TODO: check hash on load
    this.displayPage(this.currentPage);
  }

  return {
    currentPage: 'home',
    init,
    getPageName,
    displayPage,
  };
}

export default ui;

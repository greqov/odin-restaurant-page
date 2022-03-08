import pageLayout from './pageLayout';
import homeContent from './homeContent';
import menuContent from './menuContent';
import aboutContent from './aboutContent';
import contactsContent from './contactsContent';
import notFoundContent from './notFoundContent';

function ui() {
  const pageContent = {
    home: homeContent,
    menu: menuContent,
    contacts: contactsContent,
    about: aboutContent,
    notFound: notFoundContent,
  };

  function getPageName(e) {
    const page = e.target.getAttribute('href').slice(1);
    return page === '' ? 'home' : page;
  }

  function displayPage(page) {
    // NOTE: is it okay to look for elem each time?
    const main = document.querySelector('.page-main');
    let currPage = page;

    if (!(currPage in pageContent)) currPage = 'notFound';

    main.innerHTML = '';
    main.appendChild(pageContent[currPage]);
    this.currentPage = currPage;
  }

  function init() {
    document.body.appendChild(pageLayout);
    const { hash } = document.location;
    this.currentPage = hash ? hash.slice(1) : 'home';
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

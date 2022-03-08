import header from './header';
import footer from './footer';

function pageLayout() {
  const pageContainer = document.createElement('div');
  pageContainer.classList.add('container');

  const main = document.createElement('main');
  main.classList.add('page-main');
  main.textContent = 'Loading...';

  [header, main, footer].forEach((el) => pageContainer.appendChild(el));

  return pageContainer;
}

export default pageLayout();

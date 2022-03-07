// TODO: move navigation to own module?
function headerNav() {
  const nav = document.createElement('nav');

  const links = [
    {
      title: 'Home',
      href: '#home',
    },
    {
      title: 'Menu',
      href: '#menu',
    },
    {
      title: 'Contacts',
      href: '#contacts',
    },
  ];

  let navListItems = '';

  links.forEach(({ title, href }) => {
    navListItems += `
    <li class="header-nav__item">
      <a href="${href}" class="header-nav__link">${title}</a>
    </li>`;
  });

  nav.innerHTML = `<ul class="header-nav__list">${navListItems}</ul>`;

  return nav;
}

function pageLayout() {
  const pageContainer = document.createElement('div');
  pageContainer.classList.add('container');

  const header = document.createElement('header');
  header.classList.add('page-header');

  const logo = document.createElement('a');
  logo.textContent = 'Logo';
  header.appendChild(logo);
  // TODO: add image to logo

  const nav = headerNav();
  // TODO: use data from JSON?

  header.appendChild(nav);

  const footer = document.createElement('footer');
  footer.classList.add('page-footer');
  footer.textContent = 'footer info';
  // TODO: add link to github (with svg icon?)

  const main = document.createElement('main');
  main.classList.add('page-main');

  [header, main, footer].forEach((el) => pageContainer.appendChild(el));

  return pageContainer;
}

export default pageLayout();

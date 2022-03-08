import links from './links.json';

function headerNav(list) {
  const nav = document.createElement('nav');
  let navListItems = '';

  list.forEach(({ title, href }) => {
    navListItems += `
    <li class="header-nav__item">
      <a href="${href}" class="header-nav__link">${title}</a>
    </li>`;
  });

  nav.innerHTML = `<ul class="header-nav__list">${navListItems}</ul>`;

  return nav;
}

const header = document.createElement('header');
header.classList.add('page-header');

const logo = document.createElement('a');
logo.setAttribute('href', '#');
logo.classList.add('header-logo');
logo.textContent = 'Logo';
header.appendChild(logo);
// TODO: add image to logo

const nav = headerNav(links);

header.appendChild(nav);

export default header;

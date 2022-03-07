function pageLayout() {
  const pageContainer = document.createElement('div');
  pageContainer.classList.add('container');

  const header = document.createElement('header');
  header.classList.add('page-header');

  const logo = document.createElement('a');
  logo.textContent = 'Logo';
  header.appendChild(logo);

  const nav = document.createElement('nav');
  nav.textContent = 'header nav';
  // TODO: use data from JSON?

  header.appendChild(nav);

  const footer = document.createElement('footer');
  footer.classList.add('page-footer');
  footer.textContent = 'footer info';

  const main = document.createElement('main');
  main.classList.add('page-main');
  main.textContent = 'main content here';

  [header, main, footer].forEach((el) => pageContainer.appendChild(el));

  return pageContainer;
}

export default pageLayout();

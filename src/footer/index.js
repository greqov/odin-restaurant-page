import './footer.css';
import iconGithub from './github.svg';

function footer() {
  const pageFooter = document.createElement('footer');
  pageFooter.classList.add('page-footer');
  pageFooter.innerHTML = `<a class="page-footer__link" href="https://github.com/greqov/odin-restaurant-page" target="_blank"><img class="page-footer__icon" src="${iconGithub}" alt="Github icon"/></a>`;

  return pageFooter;
}

export default footer();

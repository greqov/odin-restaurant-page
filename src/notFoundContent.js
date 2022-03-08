function notFoundContent() {
  const content = document.createElement('div');
  content.classList.add('about-content');

  const heading = document.createElement('h1');
  heading.textContent = 'Error 404';

  const text = document.createElement('p');
  text.innerHTML = `Page not found. Go to <a class="js-nav-link" href="#">Homepage</a>`;

  content.appendChild(heading);
  content.appendChild(text);

  return content;
}

export default notFoundContent();

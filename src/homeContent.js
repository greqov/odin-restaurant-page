function homeContent() {
  const content = document.createElement('div');
  content.classList.add('home-content');

  const heading = document.createElement('h1');
  heading.textContent = 'Homepage content!';

  const text = document.createElement('p');
  text.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, itaque.';

  content.appendChild(heading);
  content.appendChild(text);

  return content;
}

export default homeContent();

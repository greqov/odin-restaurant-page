function aboutContent() {
  const content = document.createElement('div');
  content.classList.add('about-content');

  const heading = document.createElement('h1');
  heading.textContent = 'About Us';

  const text = document.createElement('p');
  text.textContent = 'Since 2005';

  content.appendChild(heading);
  content.appendChild(text);

  return content;
}

export default aboutContent();

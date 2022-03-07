function menuContent() {
  const content = document.createElement('div');
  content.classList.add('menu-content');

  const heading = document.createElement('h1');
  heading.textContent = 'Menu!';

  const text = document.createElement('p');
  text.textContent = 'Place menu info here...';

  content.appendChild(heading);
  content.appendChild(text);

  return content;
}

export default menuContent();

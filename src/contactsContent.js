function contactsContent() {
  const content = document.createElement('div');
  content.classList.add('contacts-content');

  const heading = document.createElement('h1');
  heading.textContent = 'Contacts';

  const text = document.createElement('p');
  text.textContent = 'Place contacts info here';

  content.appendChild(heading);
  content.appendChild(text);

  return content;
}

export default contactsContent();

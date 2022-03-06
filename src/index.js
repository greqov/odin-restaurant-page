import './styles.css';

console.log('eee boiii!');

const heading = document.createElement('h1');
heading.classList.add('text');
heading.textContent = 'webpack works now! such webpack! so bundled!';

document.body.appendChild(heading);

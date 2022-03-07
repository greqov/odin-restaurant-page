import pageLayout from './pageLayout';
import homeContent from './homeContent';
import menuContent from './menuContent';
import contactsContent from './contactsContent';
import './styles.css';

document.body.appendChild(pageLayout);

const main = document.querySelector('.page-main');
main.appendChild(homeContent);

// TODO: add switch logic
// TODO: place component files (js, styles, assets) in separate folders
main.appendChild(menuContent);

main.appendChild(contactsContent);

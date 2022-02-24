import './style.css'
import homepage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js'
import { createHeader } from './page-load.js';
import { createMainContainer } from './page-load.js';
import { createFooter } from './page-load.js';

const content = document.getElementById("content");


content.appendChild(createHeader());

const mainContainer = createMainContainer();
mainContainer.id = 'mainContainer';
content.appendChild(mainContainer);

mainContainer.appendChild(homepage());

const home = document.getElementById('home');
home.addEventListener('click', (e) => {
    mainContainer.removeChild(mainContainer.firstChild);
    mainContainer.appendChild(homepage());
})

const menu = document.getElementById('menu');
menu.addEventListener('click', (e) => {
    mainContainer.removeChild(mainContainer.firstChild);
    mainContainer.appendChild(menuPage());
})

const contact = document.getElementById('contact');
contact.addEventListener('click', (e) => {
    mainContainer.removeChild(mainContainer.firstChild);
    mainContainer.appendChild(contactPage());
})

content.appendChild(createFooter());

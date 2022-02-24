export function createHeader() {

    const header = document.createElement('header');

    const logo = document.createElement('span');
    logo.innerText = 'TOKIO RESTAURANT';
    header.appendChild(logo);

    const nav = document.createElement('ul');


    const home = document.createElement('li');
    home.innerText = "HOME";
    nav.appendChild(home);
    home.id = 'home';
    home.style.cursor = 'pointer';

    const menu = document.createElement('li');
    menu.innerText = "MENU";
    nav.appendChild(menu);
    menu.id = 'menu'
    menu.style.cursor = 'pointer';

    const contact = document.createElement('li');
    contact.innerText = "CONTACT";
    nav.appendChild(contact);
    contact.id = 'contact';
    contact.style.cursor = 'pointer';

    header.appendChild(nav);
    return header;
}

export function createMainContainer() {
    const main = document.createElement('main');

    return main;

}

export function createFooter() {
    const footer = document.createElement('footer');


    const freepik = document.createElement('span');
    freepik.innerHTML = "<a href='https://www.freepik.com/vectors/food'>Food vector created by macrovector - www.freepik.com</a>";
    footer.appendChild(freepik);

    const odin = document.createElement('span');
    odin.innerHTML = "<a href='https://www.theodinproject.com/'>The Odin Project</a>";
    footer.appendChild(odin);

    return footer;
}


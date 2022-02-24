import Platter from './images/platter.jpg';
import UniMaki from './images/uni-maki.jpg';
import Miso from './images/miso.jpg';
import Nigiri from './images/nigiri.jpg';
import CaliforniaMaki from './images/california-maki.jpg';
import Sashimi from './images/sashimi.jpg';
import IkuraMaki from './images/ikura-maki.jpg';
import EbiMaki from './images/ebi-maki.jpg';
import Temaki from './images/temaki.jpg';
import MasagoMaki from './images/masago-maki.jpg';
import TobikoMaki from './images/tobiko.jpg';
import Futomaki from './images/futomaki.jpg';


export default function menuPage() {
    const container = document.createElement('div');
    container.classList.add('menuContainer');



    const menu = document.createElement('h1');
    menu.innerText = "Menu";
    container.appendChild(menu);

    const menuItemsContainer = document.createElement('div');
    container.appendChild(menuItemsContainer);
    menuItemsContainer.classList.add('menuItemsContainer');

    class MenuItem {
        constructor(name, price, image) {
            this.name = name;
            this.price = price;
            this.image = image;
        }

        addToMenu() {
            let menuItemCard = document.createElement('div');
            menuItemCard.classList.add('menuItemCard');

            let menuItemName = document.createElement('h2');
            menuItemName.innerText = this.name;
            menuItemCard.appendChild(menuItemName);

            let menuItemImage = new Image();
            menuItemImage.src = this.image;
            menuItemCard.appendChild(menuItemImage);

            let menuItemPrice = document.createElement('p');
            menuItemPrice.innerText = this.price;
            menuItemCard.appendChild(menuItemPrice);

            menuItemsContainer.append(menuItemCard);
        }
    }
    let platter = new MenuItem('All Out Sushi Platter', '$1,000.00', Platter);
    let uniMaki = new MenuItem('Uni Maki', '$100.00', UniMaki);
    let miso = new MenuItem('Miso Soup', '$75.00', Miso);
    let nigiri = new MenuItem('Salmon Nigiri', '$125.00', Nigiri);
    let californiaMaki = new MenuItem('California Maki', '$90.00', CaliforniaMaki);
    let sashimi = new MenuItem('Sashimi', '$140.00', Sashimi);
    let ikuraMaki = new MenuItem('Ikura Maki', '$110.00', IkuraMaki);
    let ebiMaki = new MenuItem('Ebi Maki', '$95.00', EbiMaki);
    let temaki = new MenuItem('Temaki', '$100.00', Temaki);
    let masagoMaki = new MenuItem('Masago Maki', '$105.00', MasagoMaki);
    let tobikoMaki = new MenuItem('Tobiko Maki', '$110.00', TobikoMaki);
    let futomaki = new MenuItem('Futomaki', '$105.00', Futomaki);


    let menuItems = [
        platter,
        uniMaki,
        miso,
        nigiri,
        californiaMaki,
        sashimi,
        ikuraMaki,
        ebiMaki,
        temaki,
        masagoMaki,
        tobikoMaki,
        futomaki
    ];

    menuItems.forEach(menuItem => {
        menuItem.addToMenu();
    });

    return container;
}
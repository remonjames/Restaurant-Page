import LeftCoverImg from './images/left.jpg';

export default function homepage() {
    const container = document.createElement("div");
    container.classList.add('homeContainer');

    const leftCoverImg = new Image();
    leftCoverImg.src = LeftCoverImg;
    leftCoverImg.classList.add('leftImg');

    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent');

    const restaurantName = document.createElement('h1');
    restaurantName.innerText = 'TOKIO RESTAURANT';
    homeContent.appendChild(restaurantName);
    restaurantName.classList.add('restaurantName');

    const shortTagline = document.createElement("p");
    shortTagline.innerText = "From sea to sushi.";
    homeContent.appendChild(shortTagline);
    shortTagline.classList.add('shortTagline');

    const longTagline = document.createElement("p");
    longTagline.innerText = "With sushi, it's all about balance. A thick slice of fish, thin slice of fish, overcooked rice, undercooked rice, too much rice vinegar, too little rice vinegar—one has to impeccably balance the ingredients to craft perfection.";
    homeContent.appendChild(longTagline);
    longTagline.classList.add('longTagline');



    container.append(leftCoverImg, homeContent);

    return container;
}
import RightCoverImg from "./images/right.jpg";

export default function contactPage() {
    const container = document.createElement("div");
    container.classList.add('contactContainer');


    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo')

    const contactInfoHeading = document.createElement('h1');
    contactInfoHeading.innerText = 'CONTACT US';
    contactInfo.appendChild(contactInfoHeading);

    const addressHeading = document.createElement('h2');
    addressHeading.innerText = 'Address';
    contactInfo.appendChild(addressHeading);

    const address = document.createElement('p');
    address.innerText = '123 Street Avenue, Lost City, Hidden Kingdom';
    contactInfo.appendChild(address);

    const phoneHeading = document.createElement('h2');
    phoneHeading.innerText = 'Phone Number';
    contactInfo.appendChild(phoneHeading);

    const phone = document.createElement('p');
    phone.innerText = '(098) 123 7654';
    contactInfo.appendChild(phone);

    const emailHeading = document.createElement('h2');
    emailHeading.innerText = 'Email';
    contactInfo.appendChild(emailHeading);

    const email = document.createElement('p');
    email.innerText = 'contact-our-restaurant@email.com';
    contactInfo.appendChild(email);

    const rightCoverImg = new Image();
    rightCoverImg.src = RightCoverImg;
    rightCoverImg.classList.add('rightImg');


    container.append(contactInfo, rightCoverImg);

    return container;
}
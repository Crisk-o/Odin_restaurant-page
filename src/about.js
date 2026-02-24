import "./styles.css";

export function loadAboutTab(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";

    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = "About Us";
    const aboutTextContainer = document.createElement('div');
    aboutTextContainer.id = "about-text-container";
    const aboutText = document.createElement('p');
    const aboutTextLineBreak = document.createElement('br');
    const aboutTextNode1 = document.createTextNode("Heartland Bistro, situated in the vibrant city of Kansas City, prides itself on its commitment to using locally sourced ingredients.")
    const aboutTextNode2 = document.createTextNode("We showcase the rich agricultural heritage of the region by partnering with local farmers and producers so we may emphasize sustainability, freshness, and flavor in every dish we serve.")
    aboutText.append(aboutTextNode1,aboutTextLineBreak, aboutTextNode2);

    
    const contactUsList = document.createElement('ul');

    const contactUsAddress = document.createElement('li');
    contactUsAddress.textContent = "123 Main St, Kansas City, MO, 64108";

    const contactUsPhone = document.createElement('li');
    contactUsPhone.textContent = "123-123-1234";

    const contactUsEmail = document.createElement('li');
    contactUsEmail.textContent = "heartlandbistro@email.com";

    aboutTextContainer.append(aboutText);
    contactUsList.append(contactUsAddress, contactUsPhone,contactUsEmail);
    contentDiv.append(aboutTitle, aboutTextContainer, contactUsList);

}


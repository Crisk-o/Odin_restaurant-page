import "./styles.css";
import chefImage from "./resources/chef-preparing-food_unsplash.jpg"

export function loadHomeTab() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";


    let title = document.createElement('h1');
    title.textContent = "Heartland Bistro";
    let info = document.createElement('p');
    info.textContent = "Here at the Heartland Bistro, our top priorities are quality, taste, and efficieny.";
    const chefImg = document.createElement('img');
    chefImg.src = chefImage;
    chefImg.id = "chefImage";
    contentDiv.appendChild(title);
    contentDiv.appendChild(info);
    contentDiv.appendChild(chefImg);
};



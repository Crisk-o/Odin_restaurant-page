import "./styles.css";
import steakFritesImg from "./resources/steak-frites-tim-toomey-unsplash.jpg";
import duckConfitImg from "./resources/duck-confit-robby-mccullough-unsplash.jpg";
import scallopImg from "./resources/scallops2-luna-wang-unsplash.jpg";

const lineBreak = document.createElement('br');
export function loadMenuTab(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ""; 

    const menuContainer = document.createElement('div'); // enclosing menu inside container to modify layout
    menuContainer.id = "menuContainer";


    const menuOptions = document.createElement('ul');
    // menuOptions.textContent = "ENTREES";
    menuOptions.id = "menuOptions";
   
   
    /* NEW MENU ITEM STARTS*/
    const option1Div = document.createElement('div');
    option1Div.classList.add("foodItem"); // adds styling to food option div
    const option1 = document.createElement('li');
    const option1InfoDiv = document.createElement('div');
    const option1Name = document.createElement('p');
    option1Name.textContent = "Steak Frites — $40";
    const option1Desc = document.createElement('p');
    option1Desc.textContent = "Pan seared hanger steak, maitre D' butter, hand-cut pommes frites. Make it Au Poivre: +$5"
    option1InfoDiv.append(option1Name, lineBreak, option1Desc);
    option1InfoDiv.classList.add('food-info');
    // food image
    const option1ImgDiv = document.createElement('div'); // div to separate food img
    const option1Img = document.createElement('img');
    option1Img.src = steakFritesImg;
    option1Img.classList.add("menuImg");
    // credits
    const option1CreditLink = document.createElement('a');
    option1CreditLink.classList.add('creditLink');
    option1CreditLink.href = "https://unsplash.com/@mybbor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    option1CreditLink.textContent = "Photo by Robby McCullough on Unsplash";
    option1ImgDiv.append(option1Img, option1CreditLink);

   

    /* NEW MENU ITEM STARTS*/
    const option2Div = document.createElement('div');
    option2Div.classList.add("foodItem");
    const option2 = document.createElement('li');
    const option2InfoDiv = document.createElement('div');
    option2InfoDiv.classList.add("food-info")
    const option2Name = document.createElement('p');
    option2Name.textContent = "Duck Confit — $35";
    const option2Desc = document.createElement('p');
    option2Desc.textContent = "Duck leg cured in salt and aromatics, then slow-cooked in its own rendered fat until exceptionally tender. Paired with braised lentils.";
    option2InfoDiv.append(option2Name, lineBreak, option2Desc);
    // food image
    const option2ImgDiv = document.createElement('div'); // div to separate food img
    const option2Img = document.createElement('img');
    option2Img.src = duckConfitImg;
    option2Img.classList.add("menuImg");
    // credits
    const option2CreditLink = document.createElement('a');
    option2CreditLink.classList.add("creditLink");
    option2CreditLink.href = "https://unsplash.com/photos/grilled-meat-on-white-ceramic-plate-pe9dvM1rQkM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    option2CreditLink.textContent = "Photo by Tim Toomey on Unsplash"
    option2ImgDiv.append(option2Img, option2CreditLink);

    
    /* NEW MENU ITEM STARTS*/
    const option3Div = document.createElement('div');
    option3Div.classList.add("foodItem");
    
    const option3 = document.createElement('li');
    const option3InfoDiv = document.createElement('div');
    const option3Name = document.createElement('p');
    option3Name.textContent = "Seared Diver Scallops — $38";
    const option3Desc = document.createElement('p');
    option3Desc.textContent = "Scallops seared into a deeply-caramelized, golden-brown buttery crust. Paired with black truffle risotto and citrus salad.";
    option3InfoDiv.append(option3Name, lineBreak, option3Desc);
    option3InfoDiv.classList.add('food-info');
    // food image
    const option3ImgDiv = document.createElement('div');
    const option3Img = document.createElement('img');
    option3Img.src = scallopImg;
    option3Img.classList.add("menuImg");
    // credits
    const option3CreditLink = document.createElement('a');
    option3CreditLink.classList.add("creditLink");
    option3CreditLink.href= "https://unsplash.com/photos/a-plate-of-food-cyLmeVrFO3I";
    option3CreditLink.textContent = "Photo by Luna Wang on Unsplash"
    option3ImgDiv.append(option3Img, option3CreditLink);


    //appending all parts together
    option1Div.append(option1, option1InfoDiv, option1ImgDiv);
    option2Div.append(option2, option2InfoDiv, option2ImgDiv);
    option3Div.append(option3, option3InfoDiv, option3ImgDiv);
    menuOptions.append(option1Div, option2Div, option3Div);
    menuContainer.append(menuOptions);
    contentDiv.append(menuContainer);
}
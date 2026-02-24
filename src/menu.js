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
    const option1Info = document.createElement('p'); // gets name + price and item descr.
    const option1InfoP1 = document.createTextNode("Steak Frites — $40");
    const option1InfoP2 = document.createTextNode("Pan seared hanger steak, maitre D' butter, hand-cut pommes frites. Make it Au Poivre: +$5");
    option1Info.append(option1InfoP1, lineBreak, option1InfoP2);

    const option1ImgDiv = document.createElement('div'); // div to separate food img
    const option1Img = document.createElement('img');
    option1Img.src = steakFritesImg;
    option1Img.classList.add("menuImg");
    option1ImgDiv.append(option1Img);
    // credits
    const option1CreditLink = document.createElement('a');
    option1CreditLink.classList.add('creditLink');
    option1CreditLink.href = "https://unsplash.com/@mybbor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    option1CreditLink.textContent = "Photo by Robby McCullough on Unsplash";
   

    /* NEW MENU ITEM STARTS*/
    const option2Div = document.createElement('div');
    option2Div.classList.add("foodItem");
    const option2 = document.createElement('li');
    const option2Info = document.createElement('p');
    const option2InfoP1 = document.createTextNode("Duck Confit — $35");
    const option2InfoP2 = document.createTextNode("Duck leg cured in salt and aromatics, then slow-cooked in its own rendered fat until exceptionally tender. Paired with braised lentils.")
    option2Info.append(option2InfoP1, lineBreak, option2InfoP2);
    
    const option2ImgDiv = document.createElement('div'); // div to separate food img
    const option2Img = document.createElement('img');
    option2Img.src = duckConfitImg;
    option2Img.classList.add("menuImg");
    option2ImgDiv.append(option2Img);
    // credits
    const option2CreditLink = document.createElement('a');
    option2CreditLink.classList.add("creditLink");
    option2CreditLink.href = "https://unsplash.com/photos/grilled-meat-on-white-ceramic-plate-pe9dvM1rQkM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    option2CreditLink.textContent = "Photo by Tim Toomey on Unsplash"
    
    /* NEW MENU ITEM STARTS*/
    const option3Div = document.createElement('div');
    option3Div.classList.add("foodItem");
    const option3 = document.createElement('li');
    const option3Info = document.createElement('p');
    const option3InfoP1 = document.createTextNode("Seared Diver Scallops — $38");
    const option3InfoP2 = document.createTextNode("Scallops seared into a deeply-caramelized, golden-brown buttery crust. Paired with black truffle risotto and citrus salad.");
    option3Info.append(option3InfoP1, lineBreak, option3InfoP2);
    const option3ImgDiv = document.createElement('div');
    const option3Img = document.createElement('img');
    option3Img.src = scallopImg;
    option3Img.classList.add("menuImg");
    option3ImgDiv.append(option3Img);
    // credits
    const option3CreditLink = document.createElement('a');
    option3CreditLink.classList.add("creditLink");
    option3CreditLink.href= "https://unsplash.com/photos/a-plate-of-food-cyLmeVrFO3I";
    option3CreditLink.textContent = "Photo by Luna Wang on Unsplash"
    

    // option1.append(option1Div, option1Info, option1Img, option1CreditLink);
    option1Div.append(option1, option1Info, option1ImgDiv);
    // option2.append(option2Div, option2Info, option2Img, option2CreditLink);
    option2Div.append(option2, option2Info, option2ImgDiv);
    // option3.append(option3Div, option3Info, option3Img, option3CreditLink);
    option3Div.append(option3, option3Info, option3ImgDiv);

    menuOptions.append(option1Div, option2Div, option3Div);
    // menuOptionsDiv.append(menuOptions);
    // menuImgsDiv.append(option1Img, option1CreditLink, option2Img, option2CreditLink, option3Img, option3CreditLink);
    // menuContainer.append(menuOptionsDiv);
    menuContainer.append(menuOptions);
    contentDiv.append(menuContainer);
}
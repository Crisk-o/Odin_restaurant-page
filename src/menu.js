import "./styles.css";
import steakFritesImg from "./resources/steak-frites-tim-toomey-unsplash.jpg";
import duckConfitImg from "./resources/duck-confit-robby-mccullough-unsplash.jpg";
import scallopImg from "./resources/scallops2-luna-wang-unsplash.jpg";

export function loadMenuTab(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ""; 

    const menuContainer = document.createElement('div'); // enclosing menu inside container to modify layout
    menuContainer.id = "menuContainer";

    const menuOptionsDiv = document.createElement('div'); // div hold food items list
    const menuImgsDiv = document.createElement('div'); // div holds food images
    menuImgsDiv.id = "menuImgContainer"

    const menuOptions = document.createElement('ul');
    // menuOptions.textContent = "ENTREES";
    menuOptions.id = "menuOptions";

    const option1 = document.createElement('li');
    option1.textContent= "Steak Frites — $40";
    const option1Div = document.createElement('div');
    const option1Info = document.createElement('p');
    option1Info.textContent = "Pan seared hanger steak, maitre D' butter, hand-cut pommes frites. Make it Au Poivre: +$5";
    const option1Img = document.createElement('img');
    option1Img.src = steakFritesImg;
    option1Img.classList.add("menuImg");
    // credits
    const option1CreditLink = document.createElement('a');
    option1CreditLink.classList.add('creditLink');
    option1CreditLink.href = "https://unsplash.com/@mybbor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    option1CreditLink.textContent = "Photo by Robby McCullough on Unsplash";
   
    const option2 = document.createElement('li');
    option2.textContent = "Duck Confit — $30";
    const option2Div = document.createElement('div');
    const option2Info = document.createElement('p');
    option2Info.textContent = "Duck leg cured in salt and aromatics, then slow-cooked in its own rendered fat until exceptionally tender. Paired with braised lentils.";
    const option2Img = document.createElement('img');
    option2Img.src = duckConfitImg;
    option2Img.classList.add("menuImg");
    // credits
    const option2CreditLink = document.createElement('a');
    option2CreditLink.classList.add("creditLink");
    option2CreditLink.href = "https://unsplash.com/photos/grilled-meat-on-white-ceramic-plate-pe9dvM1rQkM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    option2CreditLink.textContent = "Photo by Tim Toomey on Unsplash"

    const option3 = document.createElement('li');
    const option3Div = document.createElement('div');
    option3.textContent = "Seared Diver Scallops — $38";
    const option3Info = document.createElement('p');
    option3Info.textContent = "Scallops seared into a deeply-caramelized, golden-brown buttery crust. Paired with black truffle risotto and citrus salad."; 
    const option3Img = document.createElement('img');
    option3Img.src = scallopImg;
    option3Img.classList.add("menuImg");
    // credits
    const option3CreditLink = document.createElement('a');
    option3CreditLink.classList.add("creditLink");
    option3CreditLink.href= "https://unsplash.com/photos/a-plate-of-food-cyLmeVrFO3I";
    option3CreditLink.textContent = "Photo by Luna Wang on Unsplash"
    

    // option1.append(option1Div, option1Info, option1Img, option1CreditLink);
    option1.append(option1Div, option1Info);
    // option2.append(option2Div, option2Info, option2Img, option2CreditLink);
    option2.append(option2Div, option2Info);
    // option3.append(option3Div, option3Info, option3Img, option3CreditLink);
    option3.append(option3Div, option3Info);

    menuOptions.append(option1, option2, option3);
    menuOptionsDiv.append(menuOptions);
    menuImgsDiv.append(option1Img, option1CreditLink, option2Img, option2CreditLink, option3Img, option3CreditLink);
    menuContainer.append(menuOptionsDiv, menuImgsDiv);
    contentDiv.append(menuContainer);
}
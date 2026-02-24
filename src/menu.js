import "./styles.css";
export function loadMenuTab(){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";
    const menuOptions = document.createElement('ul');

    const option1Div = document.createElement('div');
    const option1 = document.createElement('li');
    option1.textContent = "dish 1";
    const option1Info = document.createElement('p');
    option1Info.textContent = "This describes the dish, list ingredients, etc.";

    const option2Div = document.createElement('div');
    const option2 = document.createElement('li');
    option2.textContent = "dish 2";
    const option2Info = document.createElement('li');
    option2Info.textContent = "This describes the dish, list ingredients, etc.";

    const option3Div = document.createElement('div');
    const option3 = document.createElement('li');
    option3.textContent = "dish 3";
    const option3Info = document.createElement('li');
    option3Info.textContent = "This describes the dish, list ingredients, etc.";
    

    option1Div.append(option1);
    option1Div.append(option1Info);
    
    option2Div.append(option2);
    option2Div.append(option2Info);

    option3Div.append(option3);
    option3Div.append(option3Info);

    menuOptions.appendChild(option1Div);
    menuOptions.appendChild(option2Div);
    menuOptions.appendChild(option3Div);
    
    contentDiv.append(menuOptions);
    contentDiv.appendChild(menuOptions);
}
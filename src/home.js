import "./styles.css";
import chefImage from "./resources/chef-preparing-food_unsplash.jpg"

export function loadHomeTab() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";

    const welcomeDiv = document.createElement('div');
    welcomeDiv.id = 'welcomeDiv';

    const reservationsDiv = document.createElement('div');
    reservationsDiv.id = "reservationsDiv";
    const title = document.createElement('h1');
    title.textContent = "Heartland Bistro";
    let info = document.createElement('p');
    info.textContent = "At the Heartland Bistro, our top priorities are quality, taste, and efficieny.";
    const makeReservationsBtnLabel = document.createElement('label');
    makeReservationsBtnLabel.for = "reservationsBtn";
    makeReservationsBtnLabel.name = "reservationsBtn";
    const makeReservationsBtn = document.createElement('button');
    makeReservationsBtn.textContent = "Make A Reservation"
    makeReservationsBtn.id = "reservationsBtn";
    makeReservationsBtn.name = "reservationsBtn";
    // makeReservationsBtn.addEventListener() // add to make form pop-up.
    const chefImg = document.createElement('img');
    chefImg.src = chefImage;
    chefImg.id = "chefImage";
    reservationsDiv.append(title, info, makeReservationsBtnLabel, makeReservationsBtn);

    welcomeDiv.append(reservationsDiv);
    contentDiv.append(welcomeDiv);
    
};



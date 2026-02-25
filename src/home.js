import "./styles.css";

const lineBreak = document.createElement('br');
export function loadHomeTab() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "";

    const welcomeDiv = document.createElement('div');
    welcomeDiv.id = 'welcomeDiv';

    const reservationsDiv = document.createElement('div');
    reservationsDiv.id = "reservationsDiv";
    const title = document.createElement('h1');
    title.textContent = "Heartland Bistro";
    const info = document.createElement('p');
    info.textContent = "At the Heartland Bistro, our top priorities are quality, taste, and efficieny.";
    const makeReservationsBtnLabel = document.createElement('label');
    makeReservationsBtnLabel.for = "reservationsBtn";
    makeReservationsBtnLabel.name = "reservationsBtn";
    const makeReservationsBtn = document.createElement('button');
    makeReservationsBtn.textContent = "Make A Reservation"
    makeReservationsBtn.id = "reservationsBtn";
    makeReservationsBtn.name = "reservationsBtn";
    // makeReservationsBtn.addEventListener() // add to make form pop-up.
    reservationsDiv.append(title, info, makeReservationsBtnLabel, makeReservationsBtn);

    const restaurantInfoDiv = document.createElement('div');
    restaurantInfoDiv.id = "homeInfoDiv"
    //location
    const locationDiv = document.createElement('div');
    const locationDivTitle = document.createElement('h2');
    locationDivTitle.textContent = "Location:";
    locationDiv.classList.add("home-info-content");
    const restaurantLocation = document.createElement('p');
    restaurantLocation.textContent = "123 Main St,";
    const restuarantLocationCity = document.createElement('p');
    restuarantLocationCity.textContent = "Kansas City, MO, 64108";
    locationDiv.append(locationDivTitle, restaurantLocation, restuarantLocationCity);
    // hours
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('home-info-content');
    const hoursDivTitle = document.createElement('h2');
    hoursDivTitle.textContent = "Hours:"
    const restaurantHoursOpen = document.createElement('p');
    restaurantHoursOpen.textContent = "Tuesday - Saturday: 4pm - 12am";
    const restaurantHoursClosed = document.createElement('p');
    restaurantHoursClosed.textContent = "Sunday: 10am - 10pm";
    hoursDiv.append(hoursDivTitle, restaurantHoursOpen, restaurantHoursClosed);
    //contact
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('home-info-content');
    const contactDivTitle = document.createElement('h2');
    contactDivTitle.style.borderBottom = "1px solid black";
    contactDivTitle.textContent = "Contact Us:"
    const contactInfo = document.createElement('p');
    contactInfo.textContent = "123-123-1234"
    const contactInfoEmail = document.createElement('p');
    contactInfoEmail.textContent = "heartlandbistro@email.com";
    contactDiv.append(contactDivTitle, contactInfo, contactInfoEmail);
    
    restaurantInfoDiv.append(locationDiv, hoursDiv, contactDiv);

    welcomeDiv.append(reservationsDiv);
    contentDiv.append(welcomeDiv, restaurantInfoDiv);
    
};



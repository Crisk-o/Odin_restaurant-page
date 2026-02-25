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
    // creating reservation form
    const reservationDialog = document.createElement('dialog');
    const reservationFormContainer = document.createElement('div');
    const reservationForm = document.createElement('form');
    reservationForm.id = "reservationForm";
    reservationForm.method = "dialog";
  

    // name
    const nameLabel = document.createElement('label');
    nameLabel.textContent = "Name: ";
    nameLabel.for = "nameInput";
    const nameInput = document.createElement('input');
    nameInput.name = "nameInput";
    nameInput.type = "text";
    nameInput.id = "nameInput";
    // phone
    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = "Phone Number: ";
    phoneLabel.for = "phoneInput";
    const phoneInput = document.createElement('input');
    phoneInput.name = "phoneInput";
    phoneInput.id = "phoneInput";
    phoneInput.type = "tel";
    // date/time
    const dateLabel = document.createElement('label');
    dateLabel.for = "dateInput";
    const dateInput = document.createElement('input');
    dateInput.name = "dateInput";
    dateInput.id = "dateInput";

    // number of people
    const grpNumberLabel = document.createElement('label');
    grpNumberLabel.textContent = "Number in Party: ";
    grpNumberLabel.for = "grpNumberInput";
    const grpNumberInput = document.createElement('input');
    grpNumberInput.name = "grpNumberInput";
    grpNumberInput.id = "grpNumberInput";
    grpNumberInput.type = "number";
    grpNumberInput.min = 1;
    grpNumberInput.max = 10;

    // submit form
    const submitFormBtnLabel = document.createElement('label');
    submitFormBtnLabel.for = "submitFormBtn";
    const submitFormBtn = document.createElement('button');
    submitFormBtn.textContent = "Submit Form"
    submitFormBtn.name = "submitFormBtn";
    submitFormBtn.type = "submit";
    submitFormBtn.id = "submit";
    submitFormBtn.value = "Submit";

    reservationForm.addEventListener('submit', (event) => { // event listener for form submission
        event.preventDefault();
        reservationDialog.close();
    });

    reservationForm.append(nameLabel, nameInput, phoneLabel, phoneInput, grpNumberLabel, grpNumberInput, submitFormBtnLabel, submitFormBtn);
    reservationDialog.append(reservationForm);
    reservationFormContainer.append(reservationDialog);

    makeReservationsBtn.addEventListener('click', () => { reservationDialog.showModal() });
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
    contentDiv.append(welcomeDiv, restaurantInfoDiv, reservationFormContainer);
    
};



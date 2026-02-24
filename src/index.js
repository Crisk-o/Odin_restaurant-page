import "./styles.css";
import { loadHomeTab } from "./home.js";
import { loadMenuTab } from "./menu.js";
import { loadAboutTab } from "./about.js";

/* addEventListeners for each button/tab to load respective functions.*/
const homeTabBtn = document.getElementById('home');
homeTabBtn.addEventListener('click', loadHomeTab);

const menuTabBtn = document.getElementById('menu');
menuTabBtn.addEventListener('click', loadMenuTab);

const aboutTabBtn = document.getElementById('about');
aboutTabBtn.addEventListener('click', loadAboutTab);


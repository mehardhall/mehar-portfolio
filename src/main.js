import { createNavbar } from './components/Navbar.js';
import { createHero } from './components/Hero.js';
import { createAbout } from './components/About.js';
import { createFooter } from './components/Footer.js';

const app = document.getElementById('app');

app.appendChild(createNavbar());
app.appendChild(createHero());
app.appendChild(createAbout());
app.appendChild(createFooter());

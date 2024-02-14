const menuButton = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

const turnArrow = document.getElementById('theArrow');

//Páginas del menú:
const home = document.getElementById('home');
const about = document.getElementById('aboutBtn');
const skills = document.getElementById('skillsBtn');
const contact = document.getElementById('contactBtn');

//Contenido de las secciones:
const educationContent = document.getElementById('educationContent');
const img = document.getElementById('indexImg');
const indexTitle = document.getElementById('indexTit');
const innerCardA = document.getElementById('innerCardA');
const innerCardB = document.getElementById('innerCardB');


//Evento páginas del menú:
turnArrow.addEventListener('click', turnThePage);
menuButton.addEventListener('click', toggleMenu);
home.addEventListener('click', atHome);
about.addEventListener('click', showAboutSection);
skills.addEventListener('click', showSkillsSection);
contact.addEventListener('click', showContact);




function toggleMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('visible');

}

function showAboutSection() {
    img.classList.remove('cardImg');
    img.classList.add('cardImgRight');
    img.classList.remove('toTheLeft');
    img.classList.add('toTheRight');
    menu.classList.remove('visible');
    menu.classList.add('hidden');
    indexTitle.classList.add('hidden');
}

function atHome() {
    img.classList.remove('cardImgRight');
    img.classList.remove('toTheRight');
    img.classList.add('cardImg');
    menu.classList.remove('visible');
    menu.classList.add('hidden');
    indexTitle.classList.remove('hidden');
    educationContent.classList.add('hidden');
}

function showSkillsSection() {
    img.classList.remove('cardImgRight');
    img.classList.remove('toTheRight');
    img.classList.add('cardImg');
    menu.classList.remove('visible');
    menu.classList.add('hidden');
    indexTitle.classList.add('hidden');
    educationContent.classList.remove('hidden');
}


function showContact() {
    menu.classList.remove('visible');
    menu.classList.add('hidden');
    // innerCardA.classList.add('rotation');
    innerCardB.classList.add('rotation');
    setTimeout(() => {
        img.classList.remove('visible');
        img.classList.add('hidden');
    }, 1000);
}

function turnThePage() {
    img.classList.remove('hidden');
    img.classList.add('visible');
    innerCardB.classList.remove('rotation');
}


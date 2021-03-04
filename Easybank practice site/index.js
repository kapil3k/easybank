const mainMenu = document.querySelector('.mainmenu')
const closeMenu = document.querySelector('.closemenu')
const openMenu = document.querySelector('.openmenu')
const bar = document.querySelector('.bar')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',hide);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    bar.style.display = 'none';
}

function hide(){
    mainMenu.style.top = '-100%';
    bar.style.display = 'block';
}
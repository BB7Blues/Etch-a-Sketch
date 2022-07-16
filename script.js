const grid = document.querySelector('.sketchbox');
const wipeButton = document.querySelector('.neu');
const farbButton = document.querySelector('.farbe');
const wiper = document.querySelector('.grid');





function createBox(boxCount){
    let i = 0;
    
    while(i < boxCount){

    // const box = document.createElement('div');
    let box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute("id", i);
    grid.appendChild(box);
    i++;
    //console.log(i);
    }

}
//let boxSize = 400*400 / 1450;
createBox(400);

function toggleColor(){

    this.classList.add('switch');
    

}

function wipeBoard(){

    let boxen = document.querySelectorAll('.box');
    console.log(boxen);
    boxen.forEach(box => box.classList.remove('switch'));

}








function makeBox(sidelenght){
    
    let boxremove = document.querySelectorAll('.box');
    //console.log(boxremove);
    // grid größe / 2 / 10
    sidelenght = prompt("Wie lang?");
    let boxgroesse = 400 / sidelenght;
    boxremove.forEach(box => grid.removeChild(box));
    i = 0;
    while (i < sidelenght * sidelenght){

    let box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute("id", i);
    box.style.height =  boxgroesse + 'px';
    box.style.width = boxgroesse + 'px';
    grid.appendChild(box);
    i++;



    }
    let boxe = document.querySelectorAll('.box');
    boxe.forEach(box =>box.addEventListener('mouseover', toggleColor));

}

wiper.addEventListener('click', makeBox);
const box = document.querySelectorAll('.box');
box.forEach(box =>box.addEventListener('mouseover', toggleColor));

wipeButton.addEventListener('click', wipeBoard);
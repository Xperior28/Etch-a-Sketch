

const box = document.querySelector('.container');
const input = document.querySelector('input');
const sizeBtn = document.querySelector('.size-button');
const resetBtn = document.querySelector('.reset');


let res = 16;

function createBoard() {
    clearBoard();
    res = input.value;
    if(res == '')
        res = 16;
    box.style.setProperty('grid-template-columns', `repeat(${res}, 1fr)`);
    box.style.setProperty('grid-template-rows', `repeat(${res}), 1fr`);
    for(let i=1; i<=res*res; i++) {
        const pixel = document.createElement('div');
        box.appendChild(pixel);
    }
    colorPixel();
}

function clearBoard() {
    box.innerHTML = "";
}

function colorPixel() {
    const pixel = box.querySelectorAll('div');
    for(let i=0; i < pixel.length; i++) {
        pixel[i].addEventListener('mouseover', () => {
            pixel[i].style.backgroundColor = 'red';
        })
    }
}


sizeBtn.addEventListener('click', createBoard);
resetBtn.addEventListener('click', createBoard);

window.onload = () => createBoard();


const container = document.querySelector('#container');
const newGridButton = document.querySelector('.new-grid');

function grid(newSize) {
    for (let i = 0; i < newSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.addEventListener('mouseover', hoverColor);
        rowDiv.classList.add('rowCell');
        container.appendChild(rowDiv);
        for (let k = 0; k < newSize; k++) {
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('columnCell');
            rowDiv.appendChild(columnDiv);
        }
    }
}

function removeGrid(oldSize) {
    for (let i = 0; i < oldSize; i++) {
        const rowDiv = document.querySelector('.rowCell');
        container.removeChild(rowDiv);
    }
}

function randomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + randomColor;
}

function hoverColor($event) {
    let item = $event.target;
    item.style.backgroundColor = randomColor();
}

let newGrid = 0;
let oldGrid = 0;

newGridButton.addEventListener('click', () => {
    let children = container.childElementCount;
    newGrid = parseInt(Number(prompt('How many squares per side?')));    
    
    if ((newGrid > 0) && (newGrid < 100)) {
        if (children == 0) {
            grid(newGrid);
            oldGrid = newGrid;
        } else {
            removeGrid(oldGrid);
            grid(newGrid);
            oldGrid = newGrid;
        }
    } else {
        alert('Please enter a valid number between 0 and 100');
    }
});
const container = document.querySelector('#container');
const gridButton = document.querySelector('.new-grid');
let newGrid = 0;
let oldGrid = 0;

const gridDisplay = document.createElement('div');
const title = document.querySelector('.title');
title.appendChild(gridDisplay);

function grid(newSize) {
    for (let i = 0; i < newSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let k = 0; k < newSize; k++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);

            let opacity = 0;
            cell.addEventListener('mouseover', (event) => {
                let currentCell = event.target;
                opacity += 0.1;
                currentCell.style.opacity = opacity;
            });
        }
    }
    gridDisplay.textContent = newGrid + ' x ' + newGrid;
}

function removeGrid(oldSize) {
    for (let i = 0; i < oldSize; i++) {
        const rows = document.querySelector('.row');
        container.removeChild(rows);
    }
}



gridButton.addEventListener('click', () => {
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
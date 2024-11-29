const container = document.querySelector('#container');
const newGridButton = document.querySelector('.new-grid');

function grid(newSize) {
    for (let i = 0; i < newSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let k = 0; k < newSize; k++) {
            const cell = document.createElement('div');
            cell.addEventListener('mouseenter', (event) => {
                let currentCell = event.target;
                currentCell.style.backgroundColor = 'white';
            });
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}

function removeGrid(oldSize) {
    for (let i = 0; i < oldSize; i++) {
        const rows = document.querySelector('.row');
        container.removeChild(rows);
    }
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
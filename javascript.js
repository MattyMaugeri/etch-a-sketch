const container = document.querySelector('#container');

function grid() {
    for (let i = 0; i < 16; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.addEventListener('mouseover', hoverColor);
        rowDiv.classList.add('rowCell');
        container.appendChild(rowDiv);
        for (let k = 0; k < 15; k++) {
            const columnDiv = document.createElement('div');
            columnDiv.classList.add('columnCell');
            rowDiv.appendChild(columnDiv);
        }
    }
}

function randomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}

function hoverColor($event) {
    let item = $event.target;
    item.style.backgroundColor = randomColor();
}


grid();

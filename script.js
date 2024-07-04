const container = document.getElementsByClassName('container')[0];
let numberOfSquaresColumns = 10;
let numberOfSquaresRows = 4;

function createSquares(numberOfSquaresColumns, numberOfSquaresRows) {
    for (let i = 0; i < numberOfSquaresRows; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('rowContainer');
        
        for (let j = 0; j < numberOfSquaresColumns; j++) {
            let div = document.createElement('div');
            div.classList.add('square');
    
            rowContainer.appendChild(div);
            container.appendChild(rowContainer);
        }
    }
}

createSquares(numberOfSquaresColumns, numberOfSquaresRows);

let squares = document.getElementsByClassName('square');

for (let square of squares) {
    square.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = '#85317e';
        e.target.style.borderColor = '#85317e';
    })
}
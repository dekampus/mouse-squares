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
            div.style.opacity = 1;
    
            rowContainer.appendChild(div);
            container.appendChild(rowContainer);
        }
    }
}

function fadeOut(square) {
    let interval = setInterval(() => {
        let opacity = square.style.opacity;
        if (opacity > 0) {
            opacity -= 0.001;
            square.style.opacity = opacity;
            square.style.borderColor = '#ffb0f9';
        } else {
            clearInterval(interval);
            opacity = 1;
            square.style.opacity = opacity;
            square.style.backgroundColor = 'white';
            square.style.borderColor = '#ffb0f9';
        }
    }, 1);
}

createSquares(numberOfSquaresColumns, numberOfSquaresRows);

let squares = document.getElementsByClassName('square');

for (let square of squares) {
    square.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = '#85317e';
        e.target.style.borderColor = '#85317e';

        fadeOut(square);
    })
}
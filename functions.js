const mainMiddle = document.getElementById("middleMain");
let currentBoardSize = 16;

function createBoard(boardSize) {

    let blockDimension = (500 / boardSize).toString() + "px";

    for (i = 0; i < boardSize; i++) {
        let column = document.createElement("div");
        column.className = "sketch-column";
        
        for (j = 0; j < boardSize; j++) {
            let row = document.createElement("div");
            row.className = "sketch-row";
            row.style.height = blockDimension;
            row.style.width = blockDimension;
            row.addEventListener("mouseenter", function() {paintBlack(row)});
            column.appendChild(row);
        }
        
        mainMiddle.appendChild(column);
    }

    currentBoardSize = boardSize;
}

function removeBoard() {
    for (i = 0; i < currentBoardSize; i++) {
        mainMiddle.removeChild(mainMiddle.firstElementChild);
    }
}

function paintBlack(row) {
    row.style.backgroundColor = "black";
}

function promptForBoardSize() {
    let validInput = false;
    let boardSize = 0;
    while (!validInput) {
        boardSize = prompt("Enter size between 1 to 100");
        if (boardSize >= 1 && boardSize <= 100) {
            validInput = true;
        }
        else {
            alert("range invalid");
        }
    }
    return boardSize;
}

function initiateStuffSequence() {
    let boardSize = promptForBoardSize();
    removeBoard();
    createBoard(boardSize);
}



//initiate the page with this
createBoard(16);
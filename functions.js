const mainMiddle = document.getElementById("middleMain");
let currentSize = 0;
//let para = document.createElement("div");
//para.className = "small-boxes"


//mainMiddle.appendChild(para);

function doStuff() {
    let validInput = false;
    let boardSize = 0;
    while (!validInput) {
        boardSize = prompt("Enter size between 1 to 100")
        if (boardSize >= 1 && boardSize <= 100) {
            validInput = true;
        }
        else {
            alert("range invalid")
        }
    }

    for (i = 0; i < boardSize; i++) {
        let column = document.createElement("div");
        column.className = "sketch-column";
        
        for (j = 0; j < boardSize; j++) {
            let row = document.createElement("div");
            row.className = "sketch-row";
            row.addEventListener("mouseover", function() {doSomethingElse(row)})
            column.appendChild(row);
        }
        
        mainMiddle.appendChild(column);
    }

    currentSize = boardSize;
}

function removeStuff() {
    for (i = 0; i < currentSize; i++) {
        mainMiddle.removeChild(mainMiddle.firstElementChild);
    }
}

function doSomethingElse(row) {
    row.style.backgroundColor = "black";
}
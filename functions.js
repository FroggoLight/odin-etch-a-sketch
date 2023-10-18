const mainMiddle = document.getElementById("middleMain");

//let para = document.createElement("div");
//para.className = "small-boxes"


//mainMiddle.appendChild(para);

function doStuff() {
    for (i = 0; i < 16; i++) {
        let column = document.createElement("div");
        column.className = "sketch-column";
        
        for (j = 0; j < 16; j++) {
            let row = document.createElement("div");
            row.className = "sketch-row";
            column.appendChild(row);
        }
        
        mainMiddle.appendChild(column);
    }
}
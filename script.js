let getGridSize = document.createElement("div");
getGridSize.setAttribute("id", "sizePrompt");
let message = document.createElement("h3");
message.setAttribute("id", "message");
message.innerText = "How many rows and columns?  (100 or less)";
let sizeInput = document.createElement("input");
sizeInput.setAttribute("id", "sizeInput");
sizeInput.setAttribute("type", "text");
let submit = document.createElement("button");
submit.setAttribute("id", "submit");
submit.innerText = "Create grid";
submit.addEventListener("click", makeGrid);
getGridSize.append(message, sizeInput, submit);
document.body.prepend(getGridSize);

let container = document.getElementById("container");

function makeGrid() {
    if (sizeInput.value <= 100) {
        let dimensions = sizeInput.value;
        console.log("DIMENSIONS: " + sizeInput.value);
        let row = dimensions;
        let col = dimensions;
        let rowCount = 1;
        while (rowCount <= row) {
            let newRow = document.createElement("span");
            newRow.setAttribute("class", "row");
                for (let i = 1; i <= dimensions; i++) {
                    let cell = document.createElement("span");
                    cell.setAttribute("class", "cell");
                    cell.addEventListener("mouseover", changeColor);
                    newRow.appendChild(cell);
                }
            rowCount++;
            container.appendChild(newRow);
        }
    } else {
        alert("Grid can only be 100 units or smaller");
    }
}

function changeColor() {
    this.style.backgroundColor = "black";
}
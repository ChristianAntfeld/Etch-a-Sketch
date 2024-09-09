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
    console.log("FUNCTION CALLED:  makeGrid");
    let dimensions = sizeInput.value;
    console.log("DIMENSIONS: " + sizeInput.value);
    let row = dimensions;
    let col = dimensions;
    let rowCount = 1;
    while (rowCount <= row) {
        console.log("WHILE LOOP RAN");
        let newRow = document.createElement("div");
        newRow.setAttribute("class", `row${rowCount}`);
            for (let i = 1; i <= dimensions; i++) {
                let column = document.createElement("span");
                column.setAttribute("id", `${rowCount}${i}`);
                column.innerText = `R${rowCount}\nC${i}`;
                newRow.appendChild(column);
            }
            rowCount++;
            container.appendChild(newRow);
    }
}
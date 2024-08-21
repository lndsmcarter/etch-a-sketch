const grid = document.querySelector("#grid");
    let gridSize = 400;
    grid.setAttribute("style", `border: 1px, red, solid; width: ${gridSize + 10}px; height: ${gridSize + 10}px;`);

//Ask user for grid size (via number of squares on one side) and put into variable gridSize
let input = document.querySelector("#gridSize")
let btn = document.querySelector("button")
let gridDimension

//Create function for button press
function btnPress() {
    grid.innerHTML = "";
    let inVal = input.value;
    gridDimension = Number(inVal);
    
    let gridSqLen = (gridSize / gridDimension)

    function createGrid(len) {
        for (let i = 0; i < (gridDimension * gridDimension); i++) {
            let gridSq = document.createElement("div");
            gridSq.setAttribute("style", `border: 1px, red, solid; width: ${len}px; height: ${len}px;`);
            grid.appendChild(gridSq);
        }
    }

    createGrid(gridSqLen);    
}

btn.addEventListener("click", btnPress);


//Divide length of grid by gridDimension and save into a variable, gridSqLen
//Use gridSqLen to determine the size of gridSq
//Use for loop with i< (gridSize * gridSize)

//Create a for loop that creates gridSq's until the grid is full 


// Ask user for grid size 
// Place grid squares in flexbox depending on user answer 

// FILL THE GRID
// Create a event listener for hovering over squares 
// Use the event listener to change square style 
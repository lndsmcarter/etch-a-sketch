const grid = document.querySelector("#grid");
    let gridSize = 950;
    grid.setAttribute("style", `border: darkgrey, solid; width: ${gridSize}px; height: ${gridSize}px; margin: 50px;`);

//Ask user for grid size (via number of squares on one side) and put into variable gridSize
let input = document.querySelector("#gridSize")
let btn = document.querySelector("button")
let gridDimension
let gridSq


//Create function for button press
function btnPress() {
    grid.innerHTML = "";
    let inVal = input.value;
    gridDimension = Number(inVal);

    if ((gridDimension > 100) ||
        (gridDimension < 1) || 
        (isNaN(gridDimension) == true)) {
            alert("Invalid Entry");
            return;
    };
    
    let gridSqLen = (gridSize / gridDimension)

    function createGrid(len) {
        for (let i = 0; i < (gridDimension * gridDimension); i++) {
            gridSq = document.createElement("div");
            gridSq.id = "gridSq";
            gridSq.setAttribute("style", `border: 1px, lightgrey, solid; margin: 0px; width: ${len - 2}px; height: ${len - 2}px;`);
            grid.appendChild(gridSq);
        }
    }
    
    createGrid(gridSqLen);    

    function onHover(value) {
        console.log("test")
        function sketch() {
            value.style.backgroundColor = "white";
        }
        value.addEventListener("mouseover", sketch);
    };

    let allBoxes = document.querySelectorAll("#gridSq");
    let allBoxesArray = Array.from(allBoxes);
    allBoxesArray.forEach(onHover);
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
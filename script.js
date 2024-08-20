const grid = document.querySelector("#grid");

// MAKE THE GRID
    // Create grid square
    //Define grid square style


//Create a for loop that creates gridSq clones until the grid is full 
function createGrid() {
    for (let i = 0; i < 9; i++) {
        let gridSq = document.createElement("div");
        gridSq.setAttribute("style", "border: 1px, red, solid; width: 100px; height: 100px;");
        grid.appendChild(gridSq);
    }
}

createGrid();

// Ask user for grid size 
// Place grid squares in flexbox depending on user answer 

// FILL THE GRID
// Create a event listener for hovering over squares 
// Use the event listener to change square style 
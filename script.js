let grid = document.querySelector("#grid");

// MAKE THE GRID
    // Create grid square
let gridSq = document.createElement("div");
    //Define grid square style
gridSq.setAttribute = ("style", "outline: 1px, red, solid;");
gridSq.style.width = "8px;";
    // Ask user for grid size 
    // Place grid squares in flexbox depending on user answer 
grid.appendChild(gridSq);
// FILL THE GRID
    // Create a event listener for hovering over squares 
    // Use the event listener to change square style 
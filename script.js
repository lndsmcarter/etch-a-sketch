const grid = document.querySelector("#grid");

// MAKE THE GRID
    // Create grid square
let gridSq = document.createElement("div");
    //Define grid square style
gridSq.setAttribute("style", "border: 1px, red, solid; width: 60px; height: 60px;");
grid.appendChild(gridSq);
    // Ask user for grid size 
    // Place grid squares in flexbox depending on user answer 

    // FILL THE GRID
    // Create a event listener for hovering over squares 
    // Use the event listener to change square style 
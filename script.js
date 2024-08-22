const grid = document.querySelector("#grid");
let gridSize = 600;
grid.setAttribute("style", `border: darkgrey, solid; width: ${gridSize}px; height: ${gridSize}px; margin: 50px;`);

let input = document.querySelector("#gridSize")
let btn = document.querySelector("button")
let gridDimension
let gridSq

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
            gridSq.setAttribute("style", `border: 1px, darkgrey, solid; margin: 0px; width: ${len - 2}px; height: ${len - 2}px;`);
            grid.appendChild(gridSq);
        }
    }
    
    createGrid(gridSqLen);    

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

    function onHover(value) {
        function sketch() {
            value.style.backgroundColor = getRandomColor();
        }
        value.addEventListener("mouseover", sketch);
    };

    let allBoxes = document.querySelectorAll("#gridSq");
    let allBoxesArray = Array.from(allBoxes);
    allBoxesArray.forEach(onHover);
}

btn.addEventListener("click", btnPress);
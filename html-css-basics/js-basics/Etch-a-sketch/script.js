
const container = document.getElementById("container");
const setGridBtn = document.getElementById("setGrid");
function createGrid(){
    // Ask user for input
    let rows = parseInt(prompt("Enter number of rows (max 100):", "16"));
    let columns = parseInt(prompt("Enter number of columns (max 100):", "16"));

    // Validate input
    if (isNaN(rows) || rows <= 0) rows = 16;
    if (rows > 100) rows = 100;

    if (isNaN(columns) || columns <= 0) columns = 16;
    if (columns > 100) columns = 100;

    container.innerHTML = ""; // clear previous grid

    for(let i=0;i<rows;i++){

        const holderDiv=document.createElement("div");
        holderDiv.classList.add("holder");
        holderDiv.style.height = `calc(100% / ${rows})`;
        holderDiv.style.width = `100%`;
        container.appendChild(holderDiv); 

        for(let j=0;j<columns;j++){

            const div = document.createElement("div");
            div.classList.add("square");
            div.style.height = `100%`;
            div.style.width = `calc(100% / ${columns})`;
            holderDiv.appendChild(div); 
            
            div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black"; // change color permanently
            });
        }  
    }

}
createGrid();

// Button click triggers new grid
setGridBtn.addEventListener("click", createGrid);

const container = document.getElementById("container");
const reset = document.getElementById("reset");


//event listener for the reset button
reset.addEventListener("click", function () {
    refreshGrid();
})


function makeGrid(rows, cols) {  //function which builds the grid inside the container, 16x16 on inital load, then the user input

    container.style.setProperty('--grid-rows', rows);  //sets style properties for the grid using style variables
    container.style.setProperty('--grid-cols', cols);


    for (c = 0; c < (rows * cols); c++) { //for loop which generates the correct number of cells in the grid

        let cell = document.createElement("div");

        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", function () {
            this.style.backgroundColor = "grey";
        })
    };
};


//this removes all the 'grid-item' classes from the container
function clearGrid() {
    document.querySelectorAll(".grid-item").forEach((e) => e.parentNode.removeChild(e));

}


//this checks the input is valid, then calls the cleargrid function and then calls the makegrid with the new user input
function refreshGrid() {
    let x = prompt("What size grid would you like? (Max size of 100)");

    if (x < 1 || Number.isInteger(+x) == false) return alert("Not a valid input") //checks for valid input
    else if (x > 100) return alert ("Size is too large") //this is so the browser doesnt lagg from having to compute too large a grid size
    else {
        clearGrid();
        makeGrid(x, x);
    }
}


//inital grid of 16*16 is loaded into the page
makeGrid(16, 16);







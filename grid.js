const container = document.querySelector(".container");
const adjust_grid = document.querySelector(".adjust-grid");
const black = document.querySelector(".black");
const rainbow = document.querySelector(".rainbow");
const darker = document.querySelector(".darker");
const reset = document.querySelector(".reset");
const github = document.querySelector(".github");
let column

adjust_grid.addEventListener("click", () => {
    container.innerHTML = ""
    while(true){
        input = prompt("Enter number of grids :- ");

        if(input == "" || input == null){
            alert("User action cancelled!");
            break
        }
        else if(input > 100){
            alert("Please enter input less than 100!");
            continue
        }
        else{
            makeGrid(input);
            break
        }
    }
});

// Create Grid
function makeGrid(num = 16){
    for(let i = 0; i < num; i++){
        const column_div = document.createElement("colum-div");
        column_div.classList.add(`column${i}`);
        column_div.classList.add("column")

        for(let rows = 0; rows < num; rows++){
            const row_div = document.createElement("row-div");
            row_div.classList.add(`row${i}`);
            row_div.classList.add("row");
            column_div.appendChild(row_div);

            // Default Button Hover Event Listner

            row_div.addEventListener("mouseover", () =>{
                row_div.style.cssText = "background-color: rgba(37,37,40,0.85)";
            })

            // Black Button Event Listener

            black.addEventListener("click", () =>{
                row_div.addEventListener("mouseover", () =>{
                    row_div.style.cssText = "background-color: rgba(37,37,40,0.85)";
                })
            })

            // Rainbow Event Listener

            rainbow.addEventListener("click", function newColor(){

                row_div.addEventListener("mouseover", () =>{
                    let red = Math.random() * 256;
                    let green = Math.random() * 256;
                    let blue = Math.random() * 256;

                    rgbColor = `rgb(` + red + ',' + green + ',' + blue + `)`;
                    
                    row_div.style.backgroundColor = rgbColor;
                })
            });

            // Reset Button Event Listener

            reset.addEventListener("click", () => {
                row_div.style.cssText = "background-color: transparent";
            })
            let alpha = 0.1;

            darker.addEventListener("click", () => {
                row_div.addEventListener("mouseover", () =>{ 
                    alpha += 0.1;
                    row_div.style.backgroundColor = `rgba(37,37,40, ${alpha})`;
                });
            })
            
        }
        
        container.appendChild(column_div);
    }
}
// Print the default 16X16 grid
makeGrid();

// Github Repo Event Listener
github.addEventListener("click", () =>{
    window.open('https://github.com/newbbiecoder', '_blank');
})
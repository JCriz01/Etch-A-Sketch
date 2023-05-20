
//parent element
const parentElement=document.getElementsByClassName('container')[0];
let containerSizeEdge=736;


//function that will create the hover effect everytime a user hovers over an individual grid
//with their mouse.
function Hover(list){

    for(let i=0; i < list.length; i++){

        list[i].addEventListener('mouseenter',()=> {
            list[i].style.backgroundColor=`aqua`;
        });

    }
}

//function to take size of grid and create grid layout.
function CreateGrid(size){
    //individual div element
    const grid=document.createElement('div');

    let gridSize=size*size;
    let gridDivSize=(736/size)-2;
    

    //for loop that creates and adds a class to each div
    for(let i=0; i < gridSize; i++){
        const grid=document.createElement('div');
        grid.classList.add('grids');
        grid.style.width=`${gridDivSize}px`;
        grid.style.height=`${gridDivSize}px`;
        parentElement.appendChild(grid);//appending to parent element
        
    }

}

function DeleteGrid(list){

    
    //getting the size of the HTMLCollection
    let gridSize=parentElement.children.length;
    console.log(gridSize);
    for(let i=(gridSize-1); i >=0 ;i--){
        parentElement.removeChild(list[i]);
    }


}

CreateGrid(16);

//variable that contains a HTMLCollection list for each div that represents a grid.
let gridlist=parentElement.children;


const button=document.createElement('button');
button.textContent=`Change grid size?`;
button.classList.add('button-class');//adding class to button
parentElement.parentNode.appendChild(button);

button.addEventListener('click',()=>{
    let size=prompt("Enter the length of the new grid(under 100): ");
    
    if(size < 100 && size > 0){

        DeleteGrid(gridlist);

    
        CreateGrid(size);
        gridlist=parentElement.children;
        Hover(gridlist);
    }
    else{
        alert("Error. Invalid entry.");
    }
});


Hover(gridlist);//calling Hover function to create hover effect for the user.


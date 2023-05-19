
//parent element
const parentElement=document.getElementsByClassName('container')[0];


//function that will create the hover effect everytime a user hovers over an individual grid
//with their mouse.
function Hover(list){

    for(let i=0; i < list.length; i++){

        list[i].addEventListener('mouseenter',()=> {
            list[i].classList.remove('grids');
            list[i].classList.add('entered');
        });

    }
}



//main function that will maintain everything, etc.
function MainFunction(element){


    //individual div element
    const grid=document.createElement('div');

    const button=document.createElement('button');
    button.textContent=`Change grid size?`;
    parentElement.parentNode.appendChild(button);
    button.addEventListener('click',()=>{
        let gridSize=prompt("Enter the length of the new grid(under 100): ");
    });

    //for loop that creates and adds a class to each div
    for(let i=0; i < 256; i++){
        const grid=document.createElement('div');
        grid.classList.add('grids');
        element.appendChild(grid);//appending to parent element

    }

    //variable that contains a HTMLCollection list for each div that represents a grid.
    const gridlist=parentElement.children;

    Hover(gridlist);//calling Hover function to create hover effect for the user.

}

MainFunction(parentElement);//calling main function



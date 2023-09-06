
//parent element
const parentElement=document.querySelector('.container');

function gridEvent(){
    let isMouseDown=false;
    let activeDiv=null;

    parentElement.addEventListener('mousedown', (Event)=>{
        let target=Event.target;
        if(target.classList.value==='grids'){
            isMouseDown=true;
            target.classList.add('entered');
            activeDiv=target;
        }
    })

    parentElement.addEventListener('mousemove',(Event)=>{
        let target=Event.target;
        if(isMouseDown && activeDiv){
            target.classList.add('entered');
        }
    })

    parentElement.addEventListener('mouseup',(Event)=>{
        let target=Event.target
        
        isMouseDown=false;
        activeDiv=null;
    })

}

function createElements(element){
    //for loop that creates and adds a class to each div
    for(let i=0; i < 256; i++){
        const grid=document.createElement('div');
        grid.classList.add('grids');
        element.appendChild(grid);//appending to parent element

    }
}



//main function that will maintain everything, etc.
function MainFunction(element){


    //creating grids
    createElements(element);
    const button=document.createElement('button');
    //button.textContent=`Change grid size?`;
    //parentElement.parentNode.appendChild(button);
    gridEvent()
    button.addEventListener('click',()=>{
        let gridSize=prompt("Enter the length of the new grid(under 100): ");
    });

    //variable that contains a HTMLCollection list for each div that represents a grid.
    //const gridlist=parentElement.children;


}

MainFunction(parentElement);//calling main function



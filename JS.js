const myStyleSheet=document.styleSheets[0];

console.log(myStyleSheet);


//parent element
const parentElement=document.querySelector('.container');
let currentColor='#151515';//default black color

function changeCSSDivPropertyColor(currColor){
    for(let i=0; i < myStyleSheet.cssRules.length; i++){
        let rule=myStyleSheet.cssRules[i]

        if(rule.selectorText === '.entered'){
            rule.style.backgroundColor=currColor;
        }
    }
}
function createRandomColor(){
    const randomBtnElem=document.querySelector('.random');

    function randomRGB(){
        const red=Math.floor(Math.random() * 255)+1;
        const green=Math.floor(Math.random() * 255)+1;
        const blue=Math.floor(Math.random() * 255)+1;

        return `rgb(${red},${green},${blue})`;
    }
    randomBtnElem.addEventListener('click',()=>{
        let randomColor=randomRGB()
        randomBtnElem.style.backgroundColor=randomColor;
        //changeCSSDivPropertyColor(randomColor);
        currentColor=randomColor;
    });
}

function gridEvent(){
    let isMouseDown=false;
    let activeDiv=null;

    parentElement.addEventListener('mousedown', (Event)=>{
        let target=Event.target;
        if(target.classList.value==='grids'){
            isMouseDown=true;
            target.classList.add('entered');
            target.style.backgroundColor=currentColor;

            activeDiv=target;
        }
    })

    parentElement.addEventListener('mousemove',(Event)=>{
        let target=Event.target;
        if(isMouseDown && activeDiv && target.classList.value==='grids'){
            target.classList.add('entered');
            target.style.backgroundColor=currentColor;

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

function gridEventsTouchScreen(){

    let isFingerDown=false;
    let activeDiv=null;

    parentElement.addEventListener('touchstart',(Event)=>{
        Event.preventDefault();
        let target=Event.target;

        if(target.classList.value==='grids'){
            isFingerDown=true;
            target.classList.add('entered');
            target.style.backgroundColor=currentColor;
            activeDiv=target;
        }
    });
    parentElement.addEventListener('touchmove',(Event)=>{
        Event.preventDefault();

        let target=Event.target;
        console.log(target);
        if(isFingerDown && activeDiv){
            target.classList.add('entered');
        }
    });
    parentElement.addEventListener('touchend',(Event)=>{
        //Event.preventDefault();
        isFingerDown=false;
        activeDiv=null;
    })
}



//main function that will maintain everything, etc.
function MainFunction(element){

    createRandomColor();

    //creating grids
    createElements(element);
    const button=document.createElement('button');
    //button.textContent=`Change grid size?`;
    //parentElement.parentNode.appendChild(button);
    if(/Mobi/.test(navigator.userAgent))
        gridEventsTouchScreen();
    else
        gridEvent();


    button.addEventListener('click',()=>{
        let gridSize=prompt("Enter the length of the new grid(under 100): ");
    });

    //variable that contains a HTMLCollection list for each div that represents a grid.
    //const gridlist=parentElement.children;


}

function DeleteGrid(list){
    //getting the size of the HTMLCollection
    let gridSize=parentElement.children.length;
    console.log(gridSize);
    for(let i=(gridSize-1); i >=0 ;i--){
        parentElement.removeChild(list[i]);
    }
}



MainFunction(parentElement);
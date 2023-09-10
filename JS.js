const myStyleSheet=document.styleSheets[0];

console.log(myStyleSheet);

//delte this after finding colors
const colorsArray=['#121420','#ea093e','#00B4D8','#CAF0F8','#471323','#0EAD69'];

//parent element
const parentElement=document.querySelector('.container');
let currentColor='#151515';//default black color
let isErasing=false;
const colorBar=document.querySelector('.item');

function eraser(){
    const selectEaserBtn=document.querySelector('.erase');

    selectEaserBtn.addEventListener('click',()=>{
        if(!isErasing){
            isErasing=true;
            selectEaserBtn.style.backgroundColor='green';
        }
        else{
            isErasing=false;
            selectEaserBtn.style.backgroundColor='black';
        }

    });
}


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
        colorBar.style.backgroundColor=currentColor;
    });
}

function changeColor(){
    //getting button element from dom

    const btnElem=document.querySelector('.change-color');

    //getting the colors display element
    const colorsElem=document.querySelector('.select-color');
    btnElem.addEventListener('click',()=>{

        colorsElem.classList.toggle('hide');
    });

    const container=document.querySelector('.select-color').children;
    
    for(let i=0; i < container.length; i ++ ){

        if(i < colorsArray.length){
            let color=colorsArray[i];
            container[i].style.backgroundColor=color;
        }
    }
}

function gridEvent(){

    function isEraserActive(targetElem){

        if(targetElem.classList.value==='grids entered' && isErasing){
            targetElem.classList.remove('entered');
            targetElem.style.backgroundColor='white';
            isMouseDown=true;
        }
    }
    let isMouseDown=false;

    parentElement.addEventListener('mousedown', (Event)=>{
        let target=Event.target;

        if(target.classList.value==='grids' && !isErasing){
            isMouseDown=true;
            target.classList.add('entered');
            target.style.backgroundColor=currentColor;
        }

        isEraserActive(target);
    });

    parentElement.addEventListener('mousemove',(Event)=>{
        let target=Event.target;

        if(isMouseDown && target.classList.value==='grids' && !isErasing){
            target.classList.add('entered');
            target.style.backgroundColor=currentColor;
        }
        else if(isMouseDown && target.classList.value==='grids entered' && isErasing){
            target.classList.remove('entered');
            target.style.backgroundColor='white'
        }
        
    });

    parentElement.addEventListener('mouseup',(Event)=>{
        console.log(Event.target);
        isMouseDown=false;
    });

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

    eraser();
    createRandomColor();
    changeColor();

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
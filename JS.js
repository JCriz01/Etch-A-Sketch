
const parentElement=document.getElementsByClassName('container')[0];

const grid=document.createElement('div');

for(let i=0; i < 256; i++){
    const grid=document.createElement('div');
    grid.classList.add('grids');
    parentElement.appendChild(grid);


}

const testing=parentElement.children;



testing[0].addEventListener('mouseenter',()=>{
    grid.classList.remove('grids');
    grid.classList.add('entered');
    parentElement.appendChild(grid);
});

testing[0].addEventListener('mouseleave',()=>{
    grid.classList.remove('entered');
    grid.classList.add('grids');

    parentElement.appendChild(grid);
});


testing[1].addEventListener('mouseenter',()=>{
    grid.classList.remove('grids');
    grid.classList.add('entered');
    parentElement.appendChild(grid);
});

testing[1].addEventListener('mouseleave',()=>{
    grid.classList.remove('entered');
    grid.classList.add('grids');

    parentElement.appendChild(grid);
});

for(let i=0; i < testing.length; i++){

    testing[i].addEventListener('mouseenter',()=> {
        grid.classList.remove('grids');
        grid.classList.add('entered');
        parentElement.appendChild(grid);
    });

    testing[i].addEventListener('mouseleave',()=> {
        grid.classList.remove('entered');
        grid.classList.add('grids');
    });
}
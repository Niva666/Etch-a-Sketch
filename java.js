let grid = 4; 

const newGrid = document.querySelector('#btn') 

const mom = document.querySelector('.mom'); 

const cG = (grid) => {
for(i=0;i<grid;i++) {
const child = document.createElement('div');
child.classList.add('childOne');

for(j=0;j<grid;j++){
    const child2 = document.createElement('div');
    child2.classList.add('childTwo');
    child.appendChild(child2)
    child2.addEventListener('mouseover',function(){
        child2.style.backgroundColor = 'black';
    })
}
mom.appendChild(child)
 
}
}
newGrid.addEventListener('click', function(){
    
    let userGrid = Number(prompt('How many squares do you want?'))

    while(userGrid > 100) {
        userGrid = Number(prompt("Please enter a value of 100 or lower"))
        
    }
    cG(userGrid);
    })  

cG(grid)

const gridSize = 7;

const mom = document.querySelector('.mom'); 

const cG = (grid) => {
for(i=0;i<gridSize;i++) {
const child = document.createElement('div');
child.classList.add('childOne');

for(j=0;j<gridSize;j++){
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

cG(gridSize);


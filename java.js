let grid = 4; 
const newGrid = document.querySelector('#btn') 
const mom = document.querySelector('.mom'); 
const resetBtn = document.querySelector('#resetBtn');

const cG = (grid) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for(i=0;i<grid;i++) {
        const child = document.createElement('div');
        child.classList.add('childOne');

    for(j=0;j<grid;j++){
        const widthandHeight = 960 / grid
        const child2 = document.createElement('div');
        child2.classList.add('childTwo');
        child2.style.width = `${widthandHeight}px`
        child2.style.height = `${widthandHeight}px`

        child2.addEventListener('mouseover',function(){
        child2.style.backgroundColor = 'black';
            resetBtn.addEventListener('click', function(){
                child2.style.backgroundColor = 'rebeccapurple'
                                        })
                                    })
            child.appendChild(child2)
            }
        wrapper.appendChild(child);
    }
mom.appendChild(wrapper);
}

cG(grid);

newGrid.addEventListener('click', function(){
    
    let userGrid = Number(prompt('How many squares do you want?'))

    while(userGrid > 100) {
        userGrid = Number(prompt("Please enter a value of 100 or lower"))
        
    }
    const wrapper = document.querySelector('.wrapper')
    wrapper.remove();
    cG(userGrid);
    })  

let color = ['red',
             'green', 
             'orange', 
             'magenta', 
             'purple', 
             'blue',
             'lightblue',
             'violet'];

let parent = document.querySelector('.board');
let reset = document.querySelector('#reset');
let random = document.querySelector('#random');
let black = document.querySelector('#black');

let arr = [];
let change = false;
let clr_rnd = false;

document.addEventListener("DOMContentLoaded", function(){
    game(16);
    
    let btn_popup = document.querySelector('#popup');
    const node = document.querySelectorAll('.sketch');
    

    reset.addEventListener('click', function(){
        del_reset();
    })
    
    random.addEventListener('click', function(){
        
        clr_rnd = true;
        
    })

    black.addEventListener('click', function(){
        clr_rnd = false;
    })

    btn_popup.addEventListener('click', function(){
        parent.replaceChildren();
        let size = getSize();
        change = true;
        
        game(size);
    })
}
)
    



// board.removeChild()
function game(size){
    random_color()
    let board = document.querySelector('.board');
    
    // let parent = document.querySelector('.board');
    let s = document.querySelector('#dookie');
   
    
    
   
    
    
    for(let i = 0; i<size; i++){
        let box = document.createElement('div');
        let sum = board.clientWidth / size;
       
        box.classList.add('sketch');
        
        // box.style.width = sum + 'px';
        box.style.height = sum + 'px';
        board.appendChild(box);

       
        for(let j = 0; j<size; j++){
            let sum = board.clientWidth / size;
            let bx = document.createElement('div');
            let div = document.createElement('div');
            bx.addEventListener('click', function(){
                if(clr_rnd == true){
                    bx.style.backgroundColor = random_color();
                    bx.style.backgroundColor.hover = random_color();
                }
                else {
                bx.style.backgroundColor = 'black';
                }
            })

        
            bx.addEventListener('dragover', function(){
                if(clr_rnd == true){
                    bx.style.backgroundColor = random_color();
                }
                else {
                bx.style.backgroundColor = 'black';

                }
            })

            
            bx.classList.add('sketch')
            bx.classList.add('s');
            bx.setAttribute('id','dookie')

            bx.style.width = sum + 'px';
            bx.style.height = sum + 'px';
            box.appendChild(bx);
            
            
        }
        
    }
   
}

function del_reset(){
    
    parent.replaceChildren();
    
    if(change == true){
        if(arr.length == 2){
            
            arr.shift();
            game(arr[0]);
        } else{
            
            game(arr[0]);

        } 
        }else{
            game(16);
        }
        
    } 
    
function getSize(){
    let input = prompt('Pick Between 1 - 100');
    let message = document.querySelector('#message');
  
   
    if(input == ''){
        message.innerHTML = 'Please provide a number.'
    }
    else if (input < 0 || input > 100){
        message.innerHTML = 'Provide a numder between 1 - 100'
    }
    else {
        message.innerHTML = 'Have Fun';
        arr.push(input)
        return input;
    }

}

function random_color(){
    let clr = color[Math.floor(Math.random() * color.length)];
    return clr;
}

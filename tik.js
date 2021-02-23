// Restart the game
var Restart = document.querySelector('#b')
//Grabs all the squares
var squares = document.querySelectorAll('td')
//Clear all the squares
function clearboard(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';        
    }
}
Restart.addEventListener('click',clearboard)

// Check the squares markers
function changeMarker(){
    if(this.textContent ===''){
        this.textContent = 'X';
        this.style.color = 'red';
    }else if(this.textContent === 'X'){
        this.textContent = 'O';
        this.style.color = 'blue';
    }else{
        this.textContent = '';
    }
}
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click',changeMarker)    
}


// ------------------ALTER-----Check the squares markers
// var cellone = document.querySelector('#one')
// cellone.addEventListener('click',function(){
//     if(cellone.textContent === ''){
//         cellone.textContent = 'X';
//     }else if(cellone.textContent ==='X'){
//         cellone.textContent = "O";
//     }else{
//         cellone.textContent = '';
//     }
// })

//for loop to add event listeners to all squares
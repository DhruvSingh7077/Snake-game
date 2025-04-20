let direction = {x:0 ,y:0};
const foodSound = new Audio('food.mp3');
const gameoverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp');
let snakeArr = [
    {x: 12, y: 14}
]

let speed = 2;
let lastPaintTime = 0;
//game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function gameEngine(){
    //part 1:updating the snake arr
    //part 2: display the snake  
    board.innerHTML ="";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food')
        board.appendChild(snakeElement);
    })
}








window.requestAnimationFrame(main);
const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;
let emptyBox = 9;
let answer = "";

const winningPositions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];


//--------------------------------------------------------------------------------------------game initializer
function initGame(){

    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    newGameBtn.classList.remove(".active");

    //setting player whose 1st turn is
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
    console.log("init running..");

    //making ui blankn
    boxes.forEach( (box, index) => {
        boxes[index].innerText = "";
        boxes[index].style.pointerEvents = "all";
        boxes[index].classList.remove("win");

    });

    //changing pointer style to clickable
    
    

}

initGame();

//------------------------------------------------------------------------------------------game play

boxes.forEach( (box, index) => {

    box.addEventListener("click", () => {
        handleClick(index);
        // console.log(currentPlayer);
    })
});

function handleClick(index){

    if(gameGrid[index] === ""){

        
        newGameBtn.classList.add(".active");

        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        

        //after entering value he cant enter again to show that change cursor
        boxes[index].style.pointerEvents = "none";
        //change player
        swapTurn();
        
        //is he wins
        checkGameOver();
    }
}

function swapTurn(){

    if(currentPlayer === "X"){
        // console.log(currentPlayer);
        currentPlayer = "O";
        
    }
    else{
        currentPlayer = "X";
    }
    

    //update in UI
    gameInfo.innerText = `Current Player - ${currentPlayer}`;

}


//---------------------------------------------------------------newBtn click handle
newGameBtn.addEventListener("click", () => {

    initGame();
    newGameBtn.classList.remove("active");
});

//--------------------------------------------------------------game Over
function checkGameOver(){
    

    emptyBox--;

    // console.log(emptyBox);
    // console.log(answer);

    

    for(let i=0; i<winningPositions.length; i++){
        // console.log(i);
        // console.log(gameGrid[winningPositions[i][0]]);

        if( (gameGrid[winningPositions[i][0]] === "X" && gameGrid[winningPositions[i][1]] === "X" && gameGrid[winningPositions[i][2]] === "X") ||
        (gameGrid[winningPositions[i][0]] === "O" && gameGrid[winningPositions[i][1]] === "O" && gameGrid[winningPositions[i][2]] === "O") ){

            //diable pointer for all box if game over
            boxes.forEach( (box, index) => {

                boxes[index].style.pointerEvents = "none";
            });


            //find out who winds and display
            if(gameGrid[winningPositions[i][0]] === "X"){
                answer = "X";
                console.log("winner is X");
            }
            else{
                answer = "O";
                console.log("winner is O");
            }

            boxes[winningPositions[i][0]].classList.add("win");
            boxes[winningPositions[i][1]].classList.add("win");
            boxes[winningPositions[i][2]].classList.add("win");

            
            newGameBtn.classList.add("active"); 
            gameInfo.innerText = `Winner Player - ${answer}`;
            return;
            
        }


         
    }

    //if all grids are filled then show the new game button and display tie
    // console.log("hi");
    // console.log(emptyBox);
    // console.log(answer);

    if(emptyBox === 0 && answer === ""){

        // console.log("ma i her");
        newGameBtn.classList.add("active"); 
        gameInfo.innerText = `Tie...`;
        return
    }
    // console.log("bye");
    
    
}

// checkGameOver();





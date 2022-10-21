

let scorePlayer = document.querySelector('.player-score');
let scoreComputer = document.querySelector('.computer-score');

let scoreContainer = document.querySelector('.score-container');
let playerContainer = document.querySelector('.player-container');
let computerContainer = document.querySelector('.computer-container');

let computerSelection;
let playerSelection; 

let exclamation = document.querySelector('.exclamation-text');
let resultText = document.querySelector('.result-text');
let arrButtons = document.querySelectorAll('img');

let buttons = document.querySelectorAll('button');

let pointsComputer = 0; 
let pointsPlayer = 0; 

function computerPlay() {
    let random = Math.floor(Math.random() * 12);

    if (random < 4) {
        let result = 'rock';
        return result;
    } else if (random < 8) {
        result = 'paper';
        return result;
    } else {
        result = 'scissors';
        return result;
    }

};



function updateScorePlayer() {
    if(pointsPlayer != 5) {
        pointsPlayer++;
     scorePlayer.textContent = pointsPlayer;
    }

    else if (pointsPlayer == 5) {
        return endGame();
    }
};

function updateScoreComputer() {
    if(pointsComputer != 5) {
        pointsComputer++;
        scoreComputer.textContent = pointsComputer;
    } 
    else if (pointsComputer == 5) {
        return endGame();
    }
}






function game() {

arrButtons.forEach((hand) => {
    hand.addEventListener('click', () => {
    let playerSelection = hand.alt.toLowerCase();
    playRound(playerSelection, computerSelection);
    
    });
});

};


function playRound(playerSelection, computerSelection) {
  
    computerSelection = computerPlay();
 

    
    if (playerSelection == computerSelection) {
        let txt = document.createElement('p');
        txt.textContent = 'Draw';
        exclamation.appendChild(txt);


        return setTimeout(() => {
              
            //  removes element from DOM
            txt.style.display = 'none';
            
        
          }, 2000); 

         ;
    }

    else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
             playerSelection == 'scissors' && computerSelection == 'paper' ||
             playerSelection == 'paper' && computerSelection == 'rock') {
            
                let txt = document.createElement('p');
                txt.textContent = 'Player Wins';
                exclamation.appendChild(txt);
             
                setTimeout(() => {           
                    txt.style.display = 'none';
                   
                 
                  }, 2000); 
                  
               updateScorePlayer();
               
             }
    
    else if (computerSelection == 'rock' && playerSelection == 'scissors' ||
             computerSelection == 'scissors' && playerSelection == 'paper' ||
             computerSelection == 'paper' && playerSelection == 'rock') {
                            
                 let txt = document.createElement('p');
                 txt.textContent = 'Computer Wins';
                 exclamation.appendChild(txt);

                 setTimeout(() => {           
                    txt.style.display = 'none';
            
                  }, 2000); 

                  updateScoreComputer();
             }


};



function endGame() {
    if (pointsPlayer == 5) {
        exclamation.remove();
        resultText.textContent = 'The Final Winner is Player!';

        return buttons.forEach(button => {
            button.removeEventListener('click', game);
    })

    } else if (pointsComputer == 5) {
        
        exclamation.remove();
        resultText.textContent = 'The Final Winner is Computer!';
        
        return buttons.forEach(button => {
            button.removeEventListener('click', game);
    })
}
}

game();
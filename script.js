
/*
// implement set timeout msg to display message only 3 seconds. 
// you need to work on the button images as their range is too wide and they can be clicked from the whole page
let playerSelectionList = document.querySelectorAll('div > img');
let playerSelectionArr = Array.from(playerSelectionList);

let paperButton = document.querySelector('.paper');
let rockButton = document.querySelector('.rock');
let scissorsButton = document.querySelector('.scissors');

let resultTxt = document.querySelector('.result-text');
let scorePlayer = document.querySelector('.player-score');
let scoreComputer = document.querySelector('.computer-score');

let exclamation =  document.querySelector('.exclamation-text');
 */
  /* playerSelectionArr.forEach(hand => {                                
    hand.addEventListener('click', function playRound(playerSelection, computerSelection){
          playerSelection = hand.className;
          computerSelection = computerPlay();
           
         if (playerSelection == 'rock' && computerSelection == 'scissors') {
            let txt = document.createElement('p');
            txt.textContent = 'Marvelous win!';
            exclamation.appendChild(txt);
            
            return setTimeout(() => {
              
                //  removes element from DOM
                txt.style.display = 'none';
              
                //  hides element (still takes up space on page)
                // box.style.visibility = 'hidden';
              }, 2000); 
            
    
           } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            let txt = document.createElement('p');
            txt.textContent = 'UNBELIEVABLE! Well done!';
            exclamation.appendChild(txt);

            return setTimeout(() => {
                txt.style.display = 'none';
            }, 2000);
            
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            let txt = document.createElement('p');
            txt.textContent = 'Winner Winner Chicken Dinner!';
            exclamation.appendChild(txt);

            return setTimeout(() => {
                txt.style.display = 'none';
            }, 2000);

        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            let txt = document.createElement('p');
            txt.textContent = 'Sometimes you lose as well';
            exclamation.appendChild(txt);

            return setTimeout(() => {
                txt.style.display = 'none';
            }, 2000);
    
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            let txt = document.createElement('p');
            txt.textContent = 'Might be too good for you';
            exclamation.appendChild(txt);

            return setTimeout(() => {
                txt.style.display = 'none';
            }, 2000);

        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            let txt = document.createElement('p');
            txt.textContent = 'Better try again my friend';
            exclamation.appendChild(txt);

            return setTimeout(() => {
                txt.style.display = 'none';
            }, 2000);

        } else {
            let txt = document.createElement('p');
            txt.textContent = 'Draw. Draw. Again please';
            exclamation.appendChild(txt);
            
            return setTimeout(() => {
                txt.style.display = 'none';
            }, 2000);
        };
            
        }
              )
            }); 
         */  
          /*  playerSelectionArr.forEach((button) => {
                button.addEventListener("click", () => {
                  const img = button.querySelector("img");
                  playerSelection = img.alt.toLowerCase();
              
                  playRound(playerSelection, computerSelection);
              
                  if (playerScore === 5 || computerScore === 5) {
                    declareWinner();
                  }
                });
              });

              function showResult(string) {
                  return resultTxt.textContent = string; 
              }
      
            
            function playRound(playerSelection, computerSelection) {
                   
                let result; 
                   let scorePlayer = 0;
                   let scoreComputer = 0; 
              
                if (playerSelection == 'rock' && computerSelection == 'scissors') {
                     scorePlayer++;
                  
                    result = 'player wins';
                   
                    return showResult(result);  
                    
          
                 } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                    scorePlayer++;
                  result = 'player wins';
                  return showResult(result);
                  
              } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                  scorePlayer++;
                   result = 'player wins';
                  return showResult(result);
      
              } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                  scoreComputer++;

                  result = 'computer wins';
                  return showResult(result);
          
              } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                scoreComputer++;
                  result = 'computer wins';
                  return showResult(result);

                
              } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                 scoreComputer++;
                  result = 'computer wins';
                  return showResult(result); 
                
      
              } else {
             
                  result = 'draw';
                  return showResult(result); 
              };
                 }
                 

                
               
             
           
                      
       // trying to make use of function playRound with addEvent listener; 
             
       //think instead of having all buttons connected to one result to have one event listener per button/image
       // create rock, paper and scissors button selecting them with a single document query selector instead of document query selector all and then compare them to the if solution inside play round function
        
   
              
                                           

    
         

                        
 



 
 
     


// create new function game and put function play round inside function game
// after the loop return final score; let finalScore = `${scorePlayer} to ${scoreComputer}`;

/*

function game() {
    
    let scorePlayer = 0;
    let scoreComputer = 0; 
    //let score = `${scorePlayer} to ${scoreComputer}`;
    
    for (let i = 0; i < 5; i++){

       
        playerSelectionArr.forEach(hand => {                                
            hand.addEventListener('click', () => {
                
            playRound(hand.className, computerPlay()); {
                  
               
         
        
        // add players selection array here and use a forEach to try each of the possible hands and based on the results 
       
         
        if (result == 'player wins') {
            scorePlayer++; 
            let txt = document.createElement('p');
            txt.textContent = `Score for Player is ${scorePlayer += 1}`;
            resultTxt.appendChild(txt);

            setTimeout(() => {
                txt.style.display = 'none';
            }, 2000);
               
             // console.log(result + ' ' + score);
             scorePlayer.textContent += '1';
             return 
           } else if (result == 'computer wins') {
               scoreComputer++;
            
            let txt = document.createElement('p');
            txt.textContent = `Score for Computer is ${scoreComputer += 1}`;
            resultTxt.appendChild(txt);
            
            setTimeout(() => {
                txt.style.display = 'none';
            }, 2000);
               
             // console.log(result + ' ' + score);
             scoreComputer.textContent = '1';
            } else  {
            scoreComputer += 0;
            scorePlayer += 0;
           // console.log(score);
        };
       
     
        

        if (scorePlayer > scoreComputer) {
            console.log(`The final score is: ${scorePlayer} to ${scoreComputer}. Player you are outrageous!`);
        } else if (scorePlayer < scoreComputer) {
            console.log(`The final score is: ${scorePlayer} to ${scoreComputer}. Embarassing. Computer destroyed you!`);
        } else {
            console.log(`The final score is: ${scorePlayer} to ${scoreComputer}. It's just another Draw. Try again`);
};
};
            }) 
       
        }); 
    };
};

//playerSelectionArr.forEach(hand => hand.addEventListener('click', () => {return console.log(hand.className)}));

// console.log(playRound(playerSelectionArr.forEach(hand => hand.addEventListener('click', () => {hand.className})), computerPlay()));
 console.log(game());

  // need to find a way to make sure player selection is always definable. An idea would be to give a variable to each image 



// add an alert to determine who won round live
// make sure that game is determined at who first wins 5 rounds

*/

let scorePlayer = document.querySelector('.player-score');
let scoreComputer = document.querySelector('.computer-score');

let scoreContainer = document.querySelector('.score-container');
let playerContainer = document.querySelector('.player-container');
let computerContainer = document.querySelector('.computer-container');

let computerSelection;
let playerSelection; 

let exclamation = document.querySelector('.exclamation-text');
let arrButtons = document.querySelectorAll('img');

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

function endGame() {
    if (pointsPlayer == 5) {
        
        exclamation.textContent = 'The Final Winner is Player!';
    } else if (pointsComputer == 5) {
        
        exclamation.textContent = 'The Final Winner is Computer!';
    }
}

function updateScorePlayer() {
    if(pointsPlayer != 5) {
        pointsPlayer++;
    }
    scorePlayer.textContent = pointsPlayer;

    if (pointsPlayer == 5) {
        return endGame();
    }
}

function updateScoreComputer() {
    if(pointsComputer != 5) {
        pointsComputer++;
    }
    scoreComputer.textContent = pointsComputer;
    
    if (pointsComputer == 5) {
        return endGame();
    }
}





function game() {

arrButtons.forEach((hand) => {
    hand.addEventListener('click', () => {
    let playerSelection = hand.alt.toLowerCase();
    playRound(playerSelection, computerSelection);
  
    //if (playerScore == 5 || computerScore == 5) {
  //      return endGame();
    //}
    
    });
});

};


function playRound(playerSelection, computerSelection) {
    
    //let pointsPlayer = 0; 
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

// find a way to update result using dom. 
game();


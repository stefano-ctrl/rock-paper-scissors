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

// implement set timeout msg to display message only 3 seconds. 
// you need to work on the button images as their range is too wide and they can be clicked from the whole page
let playerSelectionList = document.querySelectorAll('div > img');
let playerSelectionArr = Array.from(playerSelectionList);

let scorePlayer = document.querySelector('.player-score');
let scoreComputer = document.querySelector('.computer-score');

let exclamation =  document.querySelector('.result-text');
 
  playerSelectionArr.forEach(hand => {                                
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

        

    /*    
            
            function playRound(playerSelection, computerSelection){
                 
                playerSelectionArr.forEach(hand => {                                
                    hand.addEventListener('click', () => {
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
            });
        })
      
              };

              playRound(playerSelection, computerSelection);
       // trying to make use of function playRound with addEvent listener; 
             
      
              
                                           
   /*
          
              
              playerSelection = hand.className;
              computerSelection = computerPlay();
        
  */
    
         

                        
 



 
 
    


// create new function game and put function play round inside function game
// after the loop return final score; let finalScore = `${scorePlayer} to ${scoreComputer}`;

/*

function game() {
    

    let scorePlayer = 0;
    let scoreComputer = 0;
    //let score = `${scorePlayer} to ${scoreComputer}`;
    
    for (let i = 0; i < 5; i++){

        
        let playerSelection = prompt('Pick your weapon', '').toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        
         
        if (result == 'You win motherfucker!' || result == 'Winner Winner Chicken Dinner' || result == 'You won Mate!' ) {
           
               console.log(alert(`${result}! -- Score for Player is ${scorePlayer += 1}`));
             // console.log(result + ' ' + score);
             console.log(scorePlayer + ' to ' + scoreComputer);
           } else if (result == 'Next time you\'ll have more luck' || result == 'Unlucky' || result == 'You should better quit') {
            
             console.log(alert(`${result}! -- Score for Computer is ${scoreComputer += 1}`));
             //console.log(result + ' ' +  score);
             console.log(scorePlayer + ' to ' + scoreComputer);
            } else  {
            console.log(alert('Draw'))
           // console.log(score);
        };
       
     
        };
        if (scorePlayer > scoreComputer) {
            console.log(alert(`The final score is: ${scorePlayer} to ${scoreComputer}. Player you are outrageous!`));
        } else if (scorePlayer < scoreComputer) {
            console.log(alert(`The final score is: ${scorePlayer} to ${scoreComputer}. Embarassing. Computer destroyed you!`));
        } else {
            console.log(alert(`The final score is: ${scorePlayer} to ${scoreComputer}. It's just another Draw. Try again`));
};

};

console.log(game());





// add an alert to determine who won round live
// make sure that game is determined at who first wins 5 rounds


*/
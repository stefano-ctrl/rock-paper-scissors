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

let pickHand = document.querySelectorAll('div > img');



let  playerSelection = pickHand.forEach(hand => {                                
    hand.addEventListener('click', () => {
         hand.className;
    })
});

// console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    
   
  

 
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        let result = 'You win motherfucker!';
        return result;

       } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = 'Winner Winner Chicken Dinner';
        return result;
        
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'You won Mate!';
        return result;

    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        result = 'Next time you\'ll have more luck';
        return result;

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        result = 'Unlucky';
        return result;

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        result = 'You should better quit';
        return result;
    } else {
        result = 'draw. do it again';
        return result;
     
    };
       
    };
 
    

// console.log(playRound(playerSelection, computerSelection));


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
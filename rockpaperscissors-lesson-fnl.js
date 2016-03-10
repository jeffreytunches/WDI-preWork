////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move !==Null)
     console.log(move)
 return (getInput)
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
        if (move !==Null)
     console.log(move)
 return (randomPlay)
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == 'rock' && computerMove == 'rock') {
        winner = 'tie';
    }

    else if (playerMove == 'rock' && computerMove == 'paper') {
        winner = 'player';
    }

    else if (playerMove == 'rock' && computerMove == 'scissors') {
        winner = 'computer';
    }

    else if (playerMove == 'paper' && computerMove == 'rock') {
       winner = 'player';
    }

    else if (playerMove == 'paper' && computerMove == 'paper') {
        winner = 'tie';
    }

    else if (playerMove == 'paper' && computerMove == 'scissors') {
        winner = 'computer';
    }

    else if (playerMove == 'scissors' && computerMove == 'rock') {
        winner = 'computer';
    }

    else if (playerMove == 'scissors' && computerMove == 'paper') {
       winner = 'player';
    }

    else if (playerMove == 'scissors' && computerMove == 'scissors') {
       winner = 'tie';
    }

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {


    var gameOne = getWinner('rock','rock')
    var gameTwo = getWinner('rock','paper')
    var gameThree = getWinner('rock','scissors')
    var gameFour = getWinner('paper','rock')
    var gameFive = getWinner('paper','paper')

    var playerWinCount = 0
    var computerWinCount = 0

   if (gameOne == 'player') {
        playerWinCount = playerWinCount + 1;
   }
   else if (gameOne == 'computer') {
        computerWinCount = computerWinCount + 1;
   }
   if (gameTwo == 'player') {
        playerWinCount = playerWinCount + 1;
   }
   else if (gameTwo == 'computer') {
        computerWinCount = computerWinCount + 1;
   }
      if (gameThree == 'player') {
        playerWinCount = playerWinCount + 1;
   }
   else if (gameThree == 'computer') {
        computerWinCount = computerWinCount + 1;
   }
   if (gameFour == 'player') {
        playerWinCount = playerWinCount + 1;
   }
   else if (gameFour == 'computer') {
        computerWinCount = computerWinCount + 1;
   }
   if (gameFive == 'player') {
        playerWinCount = playerWinCount + 1;
   }
   else if (gameFive == 'computer') {
        computerWinCount = computerWinCount + 1;
   }


function getFinalWinner() {
  var FinalWinner

  if (playerWinCount > computerWinCount) {
    FinalWinner = 'player';
    report "player wins"
  }

  else if (computerWinCount > playerWinCount) {
    FinalWinner = 'computer'
      report "computer wins"
  }
  else {
    FinalWinner = "tie";
  }
}


    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
// i had a really hard time working with this on my own and was complicating alot of details i believe. Once I was able to join the TAs and class mates I moved forward quickly. This was finished by day 02 but I was behind on git so here it is.

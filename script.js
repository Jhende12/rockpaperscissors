function getComputerChoice() {
     randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber == 3) {
        return "rock"
    } else if (randomNumber == 2) {
        return "paper"        
    } else {
        return "scissors"
    }

}
computerSelection = getComputerChoice()
const playerChoice = prompt("Select rock, paper or scissors.")
const playerSelection = playerChoice.toLowerCase()
console.log(playerSelection)
console.log(computerSelection)


function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Player wins")
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("Player wins")
    } else if(playerSelection == "scissor" && computerSelection == "papper"){
        console.log("Player wins")
    } else if(playerSelection == computerSelection ){
        console.log("Its a tie")
    } else if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        console.log("Please enter rock paper or scissors")
    } else {
        console.log("Computer wins")
    }
}

playRound(playerSelection, computerSelection)

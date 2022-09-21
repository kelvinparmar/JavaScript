
let firstCard = 6
let lastCard = 19
let sum = firstCard + lastCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
console.log(message)

function startGame(){
    if(sum<= 20){
        message="Do you want to draw a new card?"
    }else if(sum === 21){
        message="Wohoo! You have got BlackJack!"
        hasBlackJack = true
    }else{
        message="You are out of the game!"
        isAlive = false
    }
}



messageEl.textContent = message



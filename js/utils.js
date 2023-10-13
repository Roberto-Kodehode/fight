function rectangularCollision({ rectangle1, rectangle2}) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

const displayText = document.getElementById("game-over")

function determineWinner({player, enemy, timerId}) {
    clearTimeout(timerId)
    displayText.style.display = "flex"
    if (player.health === enemy.health) {
        displayText.textContent = "tie"
        } else if (player.health > enemy.health) {
        displayText.textContent = "Player 1 wins"
        } else {
        displayText.textContent = "Player 2 wins"
    }
}

let timer = 60
let timerId
function decreaseTimer() {
    
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        let countdown = document.getElementById("timer")
        countdown.textContent = timer
    }

    if (timer === 0) {

        determineWinner({player, enemy})
    }
}
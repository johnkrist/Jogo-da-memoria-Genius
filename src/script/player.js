
red.addEventListener('click', clickRed)
blue.addEventListener('click', clickBlue)
yellow.addEventListener('click', clickYellow)
green.addEventListener('click', clickGreen)

function enableCheck(sp, sG) {
    gotIt = sp.length === sG.length && sp.every((value, index) => value === sG[index])
}



function clickRed() {
    red.classList.add('gameButtonLigth--Red')
    sequence_player.push('red')
    count++
    setTimeout(() => {
        red.classList.remove('gameButtonLigth--Red')
    }, 700)
    if (count > sequence_Game.length) {
        youLose()
        resetGame()
        clearInterval(interval2)
    }
    if (count == sequence_Game.length) {
        
        enableCheck(sequence_player, sequence_Game)
        if (gotIt == true) {

            inputScore.innerHTML = 'GOOD!'
            setTimeout(() => {
                checkClick()

            }, 2000)

        } else {
            gotIt = false
            checkClick()


        }


    }


    console.log(sequence_player)
}
function clickBlue() {
    blue.classList.add('gameButtonLigth--Blue')
    sequence_player.push('blue')
    count++
    setTimeout(() => {
        blue.classList.remove('gameButtonLigth--Blue')
        
    }, 700)
    
    if (count > sequence_Game) {
        youLose()
        resetGame()
        clearInterval(interval2)
    }
    if (count == sequence_Game.length) {
        
        if (gotIt == true) {
            enableCheck(sequence_player, sequence_Game)

            inputScore.innerHTML = 'PERFECT!'
            setTimeout(() => {
                checkClick()

            }, 2000)


        } else {
            gotIt = false
            checkClick()

        }

    }



    console.log(sequence_player)
}
function clickYellow() {
    yellow.classList.add('gameButtonLigth--Yellow')
    sequence_player.push('yellow')
    count++
    setTimeout(() => {
        yellow.classList.remove('gameButtonLigth--Yellow')
    }, 700)
    
    
    if (count > sequence_Game.length) {
        youLose()
        resetGame()
        clearInterval(interval2)
    }
    if (count == sequence_Game.length) {
        enableCheck(sequence_player, sequence_Game)
        
        if (gotIt == true) {
            
            inputScore.innerHTML = 'VERY GOOD!'
            setTimeout(() => {
                checkClick()

            }, 2000)


        } else {
            gotIt = false
            checkClick()

        }
    }


    console.log(sequence_player)
}
function clickGreen() {
    green.classList.add('gameButtonLigth--Green')

    sequence_player.push('green')
    count++

    setTimeout(() => {
        green.classList.remove('gameButtonLigth--Green')
    }, 700)

    
    if (count > sequence_Game.length) {
        youLose()
        resetGame()
        clearInterval(interval2)
    }
    if (count == sequence_Game.length) {
        
        enableCheck(sequence_player, sequence_Game)
        if (gotIt == true) {

            inputScore.innerHTML = 'GREAT!'
            setTimeout(() => {
                checkClick()

            }, 2000)


        } else {
            gotIt = false
            checkClick()


        }
    }


    console.log(sequence_player)
}
console.log(sequence_player)
/*-----------------------------------------------------------------------*/
function checkClick() {

    if (gotIt == true) {

        showScore()
        resetPlayer()
        getAleatorySequence()
        light()

        score = score + 1
    } else {
        youLose()
        resetGame()
        clearInterval(interval2)



    }
}
/*-----------------------------------------------------------------------*/
function clickAgain() {
    if (count < sequence_Game.length) {
        setTimeout(() => {
            inputScore.innerHTML = 'CLICK AGAIN ON A COLOR'
        }, 5000)
    }
}



function youLose() {
    setTimeout(()=>{

        inputScore.innerHTML = 'CLICK IN RESTART'
    },)



    clearInterval(interval2)
    interval1 = setInterval(() => {
        green.classList.toggle('gameButtonLigth--Green')
        red.classList.toggle('gameButtonLigth--Red')
        yellow.classList.toggle('gameButtonLigth--Yellow')
        blue.classList.toggle('gameButtonLigth--Blue')
        
    }, 250)

}
















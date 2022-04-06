
start.addEventListener('click', () => {
    setTimeout(() => {
        inputScore.classList.add("onGame")
    }, 500)
    setTimeout(() => {
        inputScore.classList.remove("onGame")
    }, 1000)
    gameControl()

})
function gameControl() {


    resetGame()
    resetPlayer()
    getAleatorySequence()
    light()
    start.classList.add('btnStart--active')


setTimeout(()=>{

    inputScore.innerHTML = 'MEMORIZE THE SEQUENCE'
},1000)
}
function getAleatorySequence() {


    let newNumber = parseInt(Math.random() * 4 + 1);


    if (newNumber === 1) {
        sequence_Game.push('green')

    } else if (newNumber === 2) {
        sequence_Game.push('red')

    } else if (newNumber === 3) {
        sequence_Game.push('yellow')

    } else if (newNumber === 4) {
        sequence_Game.push('blue')

    }
}
console.log(sequence_Game)

function light() {
    for (let i = 0; i <= sequence_Game.length; i++) {
        if (sequence_Game[i] === 'green') {
            (function (i) {
                setTimeout(() => {
                    setTimeout(() => {

                        green.classList.add('gameButtonLigth--Green')
                    }, 600)

                    setTimeout(() => {
                        green.classList.remove('gameButtonLigth--Green')
                    }, 1000)
                }, 1300 * i);
            })(i);
        } else if (sequence_Game[i] === 'red') {
            (function (i) {
                setTimeout(() => {
                    setTimeout(() => {
                        red.classList.add('gameButtonLigth--Red')

                    }, 600)

                    setTimeout(() => {
                        red.classList.remove('gameButtonLigth--Red')
                    }, 1000)
                }, 1300 * i);
            })(i);
        } else if (sequence_Game[i] === 'yellow') {
            (function (i) {
                setTimeout(() => {
                    setTimeout(() => {
                        yellow.classList.add('gameButtonLigth--Yellow')

                    }, 600)

                    setTimeout(() => {
                        yellow.classList.remove('gameButtonLigth--Yellow')
                    }, 1000)
                }, 1300 * i);
            })(i);
        } else if (sequence_Game[i] === 'blue') {
            (function (i) {
                setTimeout(() => {
                    setTimeout(() => {
                        blue.classList.add('gameButtonLigth--Blue')

                    }, 600)

                    setTimeout(() => {
                        blue.classList.remove('gameButtonLigth--Blue')
                    }, 1000)
                }, 1300 * i);
            })(i);
        }
    }
}
/*---------------------------------------------------------------------*/

function showScore() {
   
 inputScore.innerHTML = score.toString()
 

}

/*----------------------------------------------------------------------*/

function resetPlayer() {
    sequence_player = [];
    count = 0
}
/*-----------------------------------------------------------------------*/

function resetGame() {

    sequence_Game = [];
    score = 0
    count = 0
}
/*------------------------------------------------------------------------*/
//start.addEventListener('click', gameControl)
reset.addEventListener('click', () => {
    interval2 = setInterval(() => {
        inputScore.innerHTML = 'PRESS START'
        inputScore.innerHTML = 'PRESS START'
    }, 200)
    setTimeout(() => {
        clearInterval(interval1)
        clearInterval(interval2)
        green.classList.remove('gameButtonLigth--Green')
        red.classList.remove('gameButtonLigth--Red')
        yellow.classList.remove('gameButtonLigth--Yellow')
        blue.classList.remove('gameButtonLigth--Blue')
        start.classList.remove('btnStart--active')
    }, 1000);
   
   
   

   


})



/*buttonAll[0] = green 
  buttonAll[1] = red 
  buttonAll[2] = yellow 
  buttonAll[3] = blue
*/











































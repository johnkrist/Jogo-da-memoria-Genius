// BUTTONS

const red = document.querySelector('.gameButtonRed')
const blue = document.querySelector('.gameButtonBlue')
const yellow = document.querySelector('.gameButtonYellow')
const green = document.querySelector('.gameButtonGreen')

const start = document.getElementsByClassName('btnStart')[0];
const reset = document.getElementsByClassName('btnRetry')[0];

/**
 VERDE -> 1
 VERMELHO -> 2
 AMARELO -> 3
 AZUL -> 4
 */

// AUDIOS
// const fail = new Audio ('naoconsegue.mp3')

// CONTADORES
let randomSequence = [];
let playerSequence = [];
let score = 0;
let clickedColor = 0;

// USANDO LET POIS FICA MAIS FACIL APAGAR O ARRAY NO RESET, SE USAR CONST VAI PRECISAR DE UMA FUNCAO PARA RESETAR.

// ENVENTOS
start.addEventListener('click', getAleatorySequence)
start.addEventListener('click', light)
reset.addEventListener('click', resetSequence)

red.addEventListener('click', clickRed)
red.addEventListener('click', checkClick)
red.addEventListener('click', light)

blue.addEventListener('click', clickBlue)
blue.addEventListener('click', checkClick)
blue.addEventListener('click', light)

yellow.addEventListener('click', clickYellow)
yellow.addEventListener('click', checkClick)
yellow.addEventListener('click', light)

green.addEventListener('click', clickGreen)
green.addEventListener('click', checkClick)
green.addEventListener('click', light)
/****************************************************************************************************** */

/**
 * PRECISO DE UMA FUNCAO QUE INICIE O JOGO! -> EVENTO ESCUTADOR NO NO BOTAO START - OK
 * PRECISO DE UMA FUNCAO QUE ACENDA (TROQUE A COR) ALEATORIAMENTE UM DOS BOTOES
 *      PRECISO NUMERAR OS BOTOES PARA GERAR OS COMANDOS...
 * PRECISO DE UMA FUNCAO QUE VERIFIQUE SE O JOGODOR RESPONDER CORRETAMENTE - OK
 * PRECISO DE UMA FUNCAO QUE SOME OS PONTOS DO JOGADOR - OK
 * A FUNCA DE ACENDER UMA COR, SERA REPETIDA ATE O JOGADOR ERRAR, SENDO UM LOOPING, REPETINDO TODOS OS EVENTOS ANTERIORES.
 * O BOTAO RESET APAGA A LUZ, APAGA TUDO! - OK
 * 
 */

/*PROBLEMA NUMERO 1: COMO 'ACENDER' A LUZ? */

/**
 * CRIAR A FUNCAO QUE GERA UMA SEQUENCIA ALEATORIA - OK
 * QUANTOS NUMEROS COLOCAREMOS NA SEQUENCIA?
 */

// CRIANDO A SEQUENCIA ALEATORIA
function getAleatorySequence () {
    randomSequence = [];
    for (i = 0; i < 10; i++){
    let newNumber = parseInt(Math.random() * 4 + 1);
        randomSequence.push(newNumber)
    }
    console.log(randomSequence)
}

// RESETANDO TUDO!
function resetSequence (event) {
    randomSequence = [];
    playerSequence = [];
    score = 0
    console.log(randomSequence)
}

// FUNCOES QUE CONVERTEM OS CLICKS EM NUMEROS!
function clickRed (event){
    clickedColor = 1;
    playerSequence.push(clickedColor)
    console.log(playerSequence)
}
function clickBlue (event){
    clickedColor = 2;
    playerSequence.push(clickedColor)
    console.log(playerSequence)
}
function clickYellow (event){
    clickedColor = 3;
    playerSequence.push(clickedColor)
    console.log(playerSequence)
}
function clickGreen (event){
    clickedColor = 4;
    playerSequence.push(clickedColor)
    console.log(playerSequence)
}

// FUNCAO TESTA O CLICK E O COMPARA COM A SEQUENCIA CERTA!
function checkClick (event){
    for (i = 0; i <= score; i++){
        if (randomSequence[i] === playerSequence[i]) {
            score++
            console.log()
    }
    playerSequence = [];

    
     /*   
    } else {
        // fail.play()
        resetSequence()
        console.log(randomSequence)
        // console.log(playerSequence)
        alert(`A CASA CAIU! VOCE PERDEU!!!!`)
        console.log(score)*/
    }
}
/*
    // TA PASSANDO E SOMANDO OS PONTOS DO ARRAY TODO
    if (randomSequence[score] === clickedColor) {
        score++
        console.log(`score: ${score}`)
        return
    } else {
        // fail.play()
        resetSequence()
        console.log(randomSequence)
        // console.log(playerSequence)
        alert(`A CASA CAIU! VOCE PERDEU!!!!`)
        console.log(score)
    }
}
*/
// FUNCAO PARA FAZER O JOGO 'FUNCIONAR'.... ACENDER AS LUZES E SO DEPOIS PERMITIR O CLICK....

/**
 * VOU PRECISAR PERCORRER O ARRAY ALEATORIO E ALTERAR A COR DA DIV E RETORNAR A ORIGINAL.
 * setInterval?
 */

// SETTIMEOU HELLLLP!!!
// FUNÇAO PARA ACENDER AS LAPADAS! 
function light(event){
    for(let i = 0; i <= score; i++){
        console.log(randomSequence[i])
        if(randomSequence[i] === 1) {
            // alert('1')
        } else if(randomSequence[i] === 2){
            // alert('2')
        } else if(randomSequence[i] === 3){
            // alert('3')
        }else if(randomSequence[i] === 4){
            // alert('4')
        }
        
    }
}

/*
function light (event){
    for (i = 0; i <= score; i++){
        classList.add('selected')
    }
}
*/
/*
            setTimeout(() => {
                green.classList.add('active');
            },250);
            setTimeout(() => {
                green.classList.remove('active');
            },1400);
*/
let randomNum = Math.floor((Math.random()*100)+1)
console.log(randomNum)

const getVal = document.querySelector("#guessField")
const btn = document.querySelector("#subt")
const prevGuess = document.querySelector(".guesses")
const remGuess = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const resultPara = document.querySelector(".resultParas")

// console.log(btn)
// console.log(getVal)
// console.log(prevGuess)
// console.log(remGuess)
// console.log(lowOrHi)
// console.log(resultPara)

let prevArr = [];
let numGuess = 0;
let p = document.createElement('p')

let playgame = true;

if(playgame){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(getVal.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess))
        displayMessage("Please give a valid input between 1 and 100");
    else if(guess<1)
        displayMessage("Please enter number more than 1")
    else if(guess>100)
        displayMessage("Please enter number smaller than or equal to 100")
    else{
        prevArr.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if (guess === randomNum) {
    displayMessage(`You guessed it right`);
    endGame();
  }else if (numGuess == 10){
    displayMessage(`Game Over. Random number was ${randomNum}`)
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is low`);
  } else if (guess > randomNum) {
    displayMessage(`Number is High`);
  }
}

function displayGuess(guess){
    getVal.value=""
    prevGuess.innerHTML = prevArr;
    numGuess++;
    console.log(numGuess)
    remGuess.innerHTML = `${10-numGuess}`;

}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(){
    getVal.value = ''
    getVal.setAttribute("Disabled","")
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame" class="btn1">Start new</h2>`
    resultPara.appendChild(p)
    playgame = false
    console.log(resultPara)
    newGame()
}
 function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click",(e)=>{
        e.preventDefault();
        randomNum = Math.floor((Math.random()*100)+1)
        prevArr = []
        numGuess=0
        prevGuess.innerHTML = ""
        lowOrHi.innerHTML=""
        remGuess.innerHTML=`${10-numGuess}`;
        getVal.removeAttribute("Disabled","")
        resultPara.removeChild(p)

        playgame=true


    })
 }

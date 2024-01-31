let clickCount = 0;
let min_num = 1;
let max_num = 100;

const userGuess = document.getElementById("userGuess");
const guessButton = document.getElementById("guessButton");
const msgDiv = document.getElementById("msgDiv");
const divHeader = document.getElementById("divHeader");
const startGameButton = document.getElementById("startGameButton");
const coverImg = document.getElementById("coverImg");
const gameInfo = document.getElementById("gameInfo");

guessButton.addEventListener("click", () => {
    console.log(65)
    checkForWin();
});

console.log(startGameButton);

startGameButton.addEventListener("click", () => {
    console.log(23);
    coverImg.style.display = "none";
    startGameButton.style.display = "none";
});

function checkForWin() {
    let guess = userGuess.value;

    clickCount++;

    if (guess >= 1 && guess <= 100) {
        if (guess == generatedNumber) {
            divHeader.innerText = "Great job!!! It took you " + clickCount + " number of trys";
            msgDiv.innerHTML += '<img src="./img/spongebob.gif" alt="happy SpongeBob and Patrick">';
            guessButton.innerText = "Restart";

            guessButton.addEventListener("click", () => {
                location.reload();
            });
        } else if (guess < generatedNumber) {
            divHeader.innerText = "Too low";
        } else if (guess > generatedNumber) {
            divHeader.innerText = "Too High";
        }
    } else {
        divHeader.innerText = "Your input must be between 1 and 100";
    }
}

let generateNumber = (min_num, max_num) => {
    var randNum = Math.floor(Math.random() * max_num) + min_num;
    return randNum;
};

let generatedNumber = generateNumber(min_num, max_num);
console.log("The Answer is: ", generatedNumber);
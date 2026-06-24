let body = document.querySelector(".background");
let header1 = document.querySelector("h1");
let header3 = document.querySelector("h3");

let main = document.querySelector(".middleButton");
let ranNum = document.querySelector(".ranNum");

let mainImage = document.querySelector(".mainImage");
let input = document.querySelector("input");
let fight = document.querySelector(".fight");

let attackButton = document.querySelector(".attack");
let defendButton = document.querySelector(".defend");
let winsDisplay = document.querySelector(".wins");

let place = 0;
let num = (Math.random() * 15) + 5;
let health = 20;
let wins = 0;
let lost = false;
let duck = false;
let battleStarted = false;
let nameTooLong = false;

function updateDuckImage() {
    if (num > 15) {
        mainImage.src = "assets/BigDuck.jpeg";
    } 
    else if (num > 12) {
        mainImage.src = "assets/MarioDuck.jpeg";
    } 
    else if (num > 9) {
        mainImage.src = "assets/SpiderDuck.jpeg";
    } 
    else if (num > 5) {
        mainImage.src = "assets/PunkDuck.jpeg";
    } 
    else {
        mainImage.src = "assets/LilDuck.jpeg";
    }
}

function updateFightDisplay() {
    fight.innerHTML = "Your HP: " + health.toFixed(2) + " / Enemy HP: " + num.toFixed(2);
}

header1.innerHTML = "What's your name?";
input.style.visibility = "visible";
attackButton.style.visibility = "hidden";
defendButton.style.visibility = "hidden";
main.innerHTML = "Submit";

main.addEventListener("click", function() {

    if (lost) return;

    if (place === 0) {
        if (input.value.length > 0) {
            header1.innerHTML = "Welcome " + input.value;
            input.style.visibility = "hidden";
            header3.innerHTML = "Choose your path";

            nameTooLong = input.value.length > 7;

            attackButton.style.visibility = "visible";
            defendButton.style.visibility = "visible";

            attackButton.innerHTML = "Fight Ducks";
            defendButton.innerHTML = "Computer Science";

            main.style.visibility = "hidden";
            place = 1;
        }
        return;
    }

    if (place === 2 && duck) {
        battleStarted = true;

        mainImage.style.visibility = "visible";
        updateFightDisplay();

        updateDuckImage();

        main.style.visibility = "hidden";
    }
});

attackButton.addEventListener("click", function() {

    if (lost) return;

    if (place === 1) {
        duck = true;
        place = 2;

        header3.innerHTML = "You chose to fight ducks";

        attackButton.innerHTML = "Attack";
        defendButton.innerHTML = "Defend";

        main.style.visibility = "visible";
        main.innerHTML = "Start Battle";

        return;
    }

    if (!duck || !battleStarted) return;

    if (nameTooLong) {
        lost = true;
        header3.innerHTML = "Your name confused the ducks beyond repair. Immediate defeat.";
        mainImage.style.visibility = "visible";
        mainImage.src = "assets/ducks.jpeg";
        mainImage.style.transform = "scale(1.6)";
        updateFightDisplay();
        return;
    }

    let damageToPlayer = Math.random() * 6;
    let damageToEnemy = Math.random() * 5;

    health -= damageToPlayer;
    num -= damageToEnemy;

    if (health <= 0) {

        lost = true;

        if (num < 0) {
            header3.innerHTML = "TIE BATTLE / You lost the war (enemy also collapsed)" + "<br> You had " + wins + " wins!";
        } 
        else {
            header3.innerHTML = "You have lost :(";
        }

        mainImage.style.visibility = "visible";
        mainImage.src = "assets/ducks.jpeg";
        mainImage.style.transform = "scale(1.6)";
        updateFightDisplay()
        return;
    }

    if (num <= 0) {
        wins += 1;

        health = 20;
        num = (Math.random() * 15) + 5 + wins;

        updateDuckImage();

        header3.innerHTML = "You have won! Next challenger approaches.";
        fight.innerHTML = "Your HP: " + health.toFixed(2) + " / New enemy HP: " + num.toFixed(2);
        return;
    }

    updateDuckImage();
    header3.innerHTML = "You: " + health.toFixed(2) + " HP / Enemy: " + num.toFixed(2) + " HP";
    updateFightDisplay()
});

defendButton.addEventListener("click", function() {

    if (lost) return;

    if (place === 1) {
        document.body.innerHTML = `<h1>Computer Science</h1><a href="https://code.visualstudio.com/" target="_blank">Download VS Code</a>`;
        return;
    }

    if (!duck || !battleStarted) return;

    let possibleW = Math.random() * 5;
    let possibleL = Math.random() * 6;

    header3.innerHTML = "You could lose " + possibleL.toFixed(2) + " HP / Enemy could lose " + possibleW.toFixed(2) + " HP";
});
// Declare variables below to save the different divs of your story.
let body = document.querySelector("body");
let header = document.querySelector("h1");
let recent = document.querySelector("h3");
let main = document.querySelector(".mainButton");
let ranNum = document.querySelector(".ranNum");
let fight = document.querySelector(".FIGHT");
let image = document.querySelector(".photo");
let direct = document.querySelector(".directions");
let duckImage = document.querySelector(".duckimage");


let attackButton = document.querySelector(".attack");
let defendButton = document.querySelector(".defend");
let num = (Math.random() * 15) + 5;
let health = 20;

let possibleW;
let possibleL;
let wins = 0;
let winsDisplay = document.querySelector(".wins");
let lost = false;



// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think .style does?
//It allows styles to change through javascript.
// 2. Try the following:
// - Make it so that the colors are different than what's used.
// - Try using a hex color code.
main.addEventListener("click", function() {
    if(health < 0){
        lost = true;
        duckImage.src = "assets/ducks.jpeg";
    }

    if(!lost){
        fight.innerHTML = "You are fighting an enemy with " + num + " hitpoints";
        console.log(num + " enemy health");
        console.log(health + " your health");
        attackButton.innerHTML = "Attack";
        defendButton.innerHTML = "Defend";
        image.style.width = "0.001px";
        image.style.height = "0.001px";
        direct.innerHTML = "";
        if(num > 15){
            duckImage.src = "assets/Bigduck.jpeg";
        }
        else{
            if(num>12){
                duckImage.src = "assets/MarioDuck.jpeg";
            }
            else{
                if(num>9){
                    duckImage.src = "assets/SpiderDuck.jpeg";
                }
                else{
                    if(num>5){
                        duckImage.src = "assets/PunkDuck.jpeg";
                    }
                    else{
                        duckImage.src = "assets/LilDuck.jpeg";
                        if(num<0){
                            duckImage.src = "assets/ducks.jpeg";
                        }
                    }
                }
            }
        }
    }
});

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){
attackButton.addEventListener("click", function(){
    if(health < 0){
        lost = true;
        duckImage.src = "assets/ducks.jpeg";
    }

    console.log(num + " enemy health");
    console.log(health + " your health");
    if(!lost){

    num -= (Math.random() * 5);

health -= (Math.random() * 6);
if(health < 0){
        lost = true;
        duckImage.src = "assets/ducks.jpeg";
    }

if(health < 0){
    recent.innerHTML = "You have lost :(";
    recent.style.color = "red";
    recent.style.backgroundColor = "#515151";
    body.style.backgroundColor = "#8f8f8f";
    header.style.backgroundColor = "#8f8f8f";
    duckImage.src = "assets/ducks.jpeg";
    lost = true;
}
else{
    if(num < 0){
    recent.innerHTML = "You have won it";
    health = 20;
    num = (Math.random() * 15) + 5 + wins;
    wins += 1;
    winsDisplay.innerHTML = wins;
}
else{
    recent.innerHTML = "You have " + health + " health remaining / Your enemy has " + num + " health";
}
}
}

})
// });

// INSERT_VARIABLE.addEventListener('click', function(){
defendButton.addEventListener("click", function(){
    if(health < 0){
        lost = true;
        duckImage.src = "assets/ducks.jpeg";
    }
    if(!lost){
possibleW = (Math.random() * 5);
possibleL = (Math.random() * 6);

recent.innerHTML = "You could have lost " + possibleL + " health / Your enemy could have lost " + possibleW + " health";

}

})
// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });
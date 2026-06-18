// LOADS O VARIABLES
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



//SEE ENEMY HP EVENT
main.addEventListener("click", function() {
    if(health < 0){
        lost = true;
        duckImage.src = "assets/ducks.jpeg";
        duckImage.style.transform = "scale(2)";
        fight.innerHTML = "You WERE fighting an enemy with " + num.toFixed(3) + " hitpoints";
        fight.style.color = "#080841"
    }

    if(!lost){
        fight.innerHTML = "You are fighting an enemy with " + num.toFixed(3) + " hitpoints";
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
                            duckImage.style.transform = "scale(2)";
                            fight.innerHTML = "You WERE fighting an enemy with " + num.toFixed(3) + " hitpoints";
                        }
                    }
                }
            }
        }
    }
});

// ATTACK EVENT
attackButton.addEventListener("click", function(){
    if(health < 0){
        lost = true;
        duckImage.src = "assets/ducks.jpeg";
        duckImage.style.transform = "scale(2)";
        fight.innerHTML = "You WERE fighting an enemy with " + Math.abs(num.toFixed(3)) + " hitpoints";
    }

    console.log(num + " enemy health");
    console.log(health + " your health");
    if(!lost){

health -= (Math.random() * 6);
    num -= (Math.random() * 5);
if(health < 0){
        lost = true;
        duckImage.src = "assets/ducks.jpeg";
        duckImage.style.transform = "scale(2)";
        fight.innerHTML = "You WERE fighting an enemy with " + Math.abs(num.toFixed(3)) + " hitpoints";
    }

if(health < 0){
    recent.innerHTML = "You have lost :(";
    recent.style.color = "red";
    recent.style.backgroundColor = "#515151";
    body.style.backgroundColor = "#8f8f8f";
    header.style.backgroundColor = "#8f8f8f";
    duckImage.src = "assets/ducks.jpeg";
    fight.innerHTML = "You WERE fighting an enemy with " + Math.abs(num.toFixed(3)) + " hitpoints";
    duckImage.style.transform = "scale(2)";
    lost = true;
}

else{
    if(num < 0){
    recent.innerHTML = "You have won!";
    health = 20;
    num = (Math.random() * 15) + 5 + wins;
    wins += 1;
    fight.innerHTML = "You are fighting an enemy with " + num.toFixed(3) + " hitpoints";
    winsDisplay.innerHTML = wins;
}
else{
    recent.innerHTML = "You have " + health.toFixed(3) + " health remaining / Your enemy has " + num.toFixed(3) + " health";
}
}
}

})

// DEFEND EVENT
defendButton.addEventListener("click", function(){
    if(health < 0){
        lost = true;
        duckImage.src = "assets/ducks.jpeg";
        fight.innerHTML = "You WERE fighting an enemy with " + Math.abs(num.toFixed(3)) + " hitpoints";
        duckImage.style.transform = "scale(2)";
    }
    if(!lost){
possibleW = (Math.random() * 5);
possibleL = (Math.random() * 6);

recent.innerHTML = "You could have lost " + possibleL + " health / Your enemy could have lost " + possibleW + " health";

}

})
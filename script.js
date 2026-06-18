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

// ATTACK EVENT
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

// DEFEND EVENT
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

var n1 = Math.random()
var n2 = Math.random();

const p1num = (Math.ceil(n1 * 6));
const p2num = (Math.ceil(n2 * 6));
console.log(p1num, p2num);

/* function changeImage() {
    document.body.div.style.backgroundImage = "url('img_tree.png')";

} 

    
} */

/* var p1img = document.createElement("p1img");
var p2img = document.createElement("p2img"); */

var p1img = document.querySelector(".p1img"); 
var p2img = document.querySelector(".p2img"); 

function p1() {
if (p1num === 1) {
    p1img.src = "./images/dice1.png";
}
else if (p1num === 2) {
    p1img.src = "./images/dice2.png";
}
else if (p1num === 3) {
    p1img.src = "./images/dice3.png";
}
else if (p1num === 4) {
    p1img.src = "./images/dice4.png";
}
else if (p1num === 5) {
    p1img.src = "./images/dice5.png";
}
else if (p1num === 6) {
    p1img.src = "./images/dice6.png";
}
}

function p2() {
    if (p2num === 1) {
        p2img.src = "./images/dice1.png";
    }
    else if (p2num === 2) {
        p2img.src = "./images/dice2.png";
    }
    else if (p2num === 3) {
        p2img.src = "./images/dice3.png";
    }
    else if (p2num === 4) {
        p2img.src = "./images/dice4.png";
    }
    else if (p2num === 5) {
        p2img.src = "./images/dice5.png";
    }
    else if (p2num === 6) {
        p2img.src = "./images/dice6.png";
    }
    }

p2(p2num);
p1(p1num);


if (p1num > p2num) {
    console.log("Player 1 Wins!");
    document.querySelector("h1").textContent = "Player 1 Wins!"
}
else if (p2num > p1num) {
    console.log("Player 2 Wins!");  
    document.querySelector("h1").textContent = "Player 2 Wins!"
} 

else if (p1num === p2num) {
    document.querySelector("h1").textContent = "It's a Draw!"
}

else {
    document.querySelector("h1").textContent = "Oops! Lost the dice."
}




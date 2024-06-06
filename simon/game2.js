// -- VARIABLES -- //

var buttonColors = ["red","yellow","green","blue"]; //pick one

var gamePattern = []; //randomly generated colors are stored here

var userClickedPattern = []; //user entered colors

var level = 1;

var started = false; //this flips to true once game is in started state


// -- FUNCTIONS -- //

// clear user pattern after each turn
function clearUserPattern() {
    userClickedPattern.length = 0;
};


// play a sound when a colored button is activated
function playSound(name) { 
    var audioSignal = new Audio("sounds/" + name + ".mp3"); // set sound
    audioSignal.play("sounds/" + name + ".mp3"); // play sound
};

// make the active button flash
function animatePress(currentColor) { 
    
    $("div#" + currentColor).addClass("glow");
    setTimeout(function() { 
        $("div#" + currentColor).removeClass("glow"), 180}); // but why doesn't this work every time?
};

function nextSequence() {

    // generate new color
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    
    // reveal new color to user
    animatePress(randomChosenColor);
    playSound(randomChosenColor);

    // update level display 
    $("h1#level-title").html("Level " + level);

    // reset user pattern to empty array
    clearUserPattern();

    // add new color to array
    gamePattern.push(randomChosenColor); 

    // update level number
    level++;
};

// ENGAGE!
$(document).keypress(function() {
    if (started == false) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        }
});  

// the buttons are responsive!! 
$("div.btn").on("click", function () {
    var userChosenColor = this.id;
    animatePress(userChosenColor); // flashy flashy
        // $(this).mousedown(function(){
        //     $(this).addClass("glow");
        //   });
        //   $(this).mouseup(function(){
        //     $(this).removeClass("glow");
        //   });

    playSound(userChosenColor); // beep boop
    userClickedPattern.push(userChosenColor); // add to array 
    console.log(userClickedPattern);    
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        if (gamePattern.length === userClickedPattern.length) {
            console.log("woot");
            currentLevel++;
            clearUserPattern();
            nextSequence();
        }
    }

    else {
        console.log("nope");
        gameOver();
    }

};

function gameOver() {
    clearUserPattern();
    gamePattern.length = 0;
    started = false;
    level = 1;
    $("h1#level-title").html("Game over! Press any key to restart.");
}

function recapSequence() {
    for (var i = 0; i < gamePattern.length; i++) {
        var audioRecap = new Audio("sounds/" + gamePattern[i] + ".mp3");
        $("div#" + gamePattern[i]).addClass("glow");
        // animatePress(gamePattern[i]);
        // playSound(gamePattern[i]);
        // i++;
        audioRecap.play();
        audioRecap.onended = function() {
            $("div#" + gamePattern[i]).removeClass("glow")
        }
    }
}

function recap() {
    for (var i = 0; i < gamePattern.length; i++) {
        recapSequence();
    }
}

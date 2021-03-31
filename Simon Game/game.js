var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).on("keydown", function() {
    if (started == false) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

    playSound(userChosenColour);
    animatePress(userChosenColour);
});

 
function checkAnswer(currentLevel) {
    
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
    } else {
        restartOver();
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}

function nextSequence() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    
    
    var randomNumber = Math.floor(Math.random() * 3) + 1; 
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    playPattern();
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function playPattern() {

    var i = 0;

    const intervalId = setInterval(function() {
      $("#"+gamePattern[i]).fadeOut(100).fadeIn(100);
      playSound(gamePattern[i]);
      i += 1;
      if (i === gamePattern.length) {
          clearInterval(intervalId);
        }
      }, 300);
}

function restartOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
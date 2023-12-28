var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var firstKey = true;
var level = 0;

// Chosing random buttons function (Game button picker)
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}
// click listener function
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1)
})

// play sound function
function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();

}
// Animation after pressing a box
function animatePress(currentColor){
    var activeButton = $("." + currentColor)
    activeButton.addClass('pressed');
    setTimeout(function(){
        activeButton.removeClass('pressed');
    }, 100);
}

// game start position
$(document).on("keydown", function() {
    if (firstKey === true) {
        nextSequence();
        $("h1").text("Level " + level);
        firstKey = false;
    }
})

// checking answer function if gamepattern index and userClickedPattern index
// is equal, it is a success state.
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success")
//If their array lengths are same, increase level using nextSequence func. (this is for to check
// if user pressed same amount of buttons as the random button picker.)
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
// if not play sound, add a class game-over and remove it after 200ms.
// Change the header and reset every value using startOver function.
    } else {
        console.log("fail");
        playSound("wrong");
        $("body").addClass('game-over');
        setTimeout(function(){
            $("body").removeClass('game-over')
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
// startover state. reset main values.
function startOver() {
    level = 0;
    gamePattern = [];
    firstKey = true;
}
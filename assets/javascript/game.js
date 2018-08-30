$(document).ready(function() {

// Global Variables
var blue = 0;
var green = 0;
var purple = 0;
var red = 0; 
var compNumber = 0;
var userNumber = 0;
var wins = 0;
var losses = 0;

// Resets game after every win and loss
function reset (){
    compNumber = chooseRandom(19, 120);
    blue = chooseRandom(1, 12);
    green = chooseRandom(1, 12);
    purple = chooseRandom(1, 12);
    red = chooseRandom(1, 12);
    userNumber = 0;
    $("#user-number").text(userNumber);
    $("#comp-number").text(compNumber);
}

// Function that rakes in min, max generates random number
var chooseRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
};
// Function to add vlaues of clicked crystals
var addNumbers = function(value) {
    userNumber += value;

if (userNumber === compNumber) {
    wins++;
    // console.log("wins="+wins);
    document.querySelector("#wins").innerHTML = wins;
    alert("You've collected a Saber Crystal");
    reset();
} 

if (userNumber > compNumber) {
    losses++
    // console.log("losses="+losses);
    document.querySelector("#losses").innerHTML = losses;
    reset();
    }
};

// Function to append values to the DOM for crystals


    // Assign Random Number value to Crystals
    blue = chooseRandom(1, 12);
    green = chooseRandom(1, 12);
    purple = chooseRandom(1, 12);
    red = chooseRandom(1, 12);

    

    // Assign Random Number value to Computer
    compNumber = chooseRandom(19, 120);
    // console.log("compNumber" + compNumber);
    $("#comp-number").text(compNumber);


    $("#blue").on("click", function() {
        // User click appends value to DOM, Add value of crystal to userNumber
        addNumbers(blue);
        // console.log(`this is blue ${blue}`);
        $("#user-number").text(userNumber);

    });

    $("#green").on("click", function() {
        // console.log(`this is green ${green}`);
        addNumbers(green);
        $("#user-number").text(userNumber);

    });

    $("#purple").on("click", function() {
        // console.log(`this is purple ${purple}`);
        addNumbers(purple);
        $("#user-number").text(userNumber);
    });

    $("#red").on("click", function() {
        // console.log(`this is red ${red}`);
        addNumbers(red);
        $("#user-number").text(userNumber);
    });

    
});
$(document).ready(function() {
    $("#comp-number").html(Math.floor((Math.random()* 120) + 1));

    $("#blue").on("click", function() {
        $(".total-score").html(Math.floor((Math.random()*12) + 1));
    });

    $("#green").on("click", function() {
        $("#green").html(Math.floor((Math.random()*12) + 1));
    });

    $("#purple").on("click", function() {
        $("#purple").html(Math.floor((Math.random()*12) + 1));
    });

    $("#red").on("click", function() {
        $("#user-number").html(Math.floor((Math.random()*12) + 1));
    });

    $("#wins")
});
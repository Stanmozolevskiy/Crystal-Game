window.onload = function() {

    var randomNumberTarget = Math.floor((Math.random() * 30) + 30);
    var score = 0;

    console.log("random number is" + " " + randomNumberTarget);
    $("#number-to-guess").append(randomNumberTarget);
    $("#score-text").html("your score is" + " " + score); //sets the score for the begining of the game


    var scoreNumberForCristals = [1, 10, 3, 7]

    function shuffle(arrey) {

        var currentIndex = scoreNumberForCristals.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = scoreNumberForCristals[currentIndex];
            scoreNumberForCristals[currentIndex] = scoreNumberForCristals[randomIndex];
            scoreNumberForCristals[randomIndex] = temporaryValue;
        }
        return scoreNumberForCristals;

    }


    arr = shuffle(scoreNumberForCristals);

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);

        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("data-crystalvalue", arr[i]);
        $("#crystals").append(imageCrystal);

    }
    var clickFunction = $(".crystal-image");


    clickFunction.click(function count(num) {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue); //returns integer from string
        score += crystalValue; // adds values to score each time cristal is clicked


        // alert("New score: " + score);

        if (score === randomNumberTarget) {
            alert("Win!!");
            count();
            score = 0;



        } else
        if (score >= randomNumberTarget) {
            alert("You lose!!");


        }


        $("#score-text").html("your score is" + " " + score) // updates the score

    })

}
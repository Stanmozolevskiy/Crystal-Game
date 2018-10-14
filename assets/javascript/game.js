var score = 0;
var scoreNumberForCristals = [1, 10, 3, 7];
var cristalData = 0;
var randomNumberTarget, imageCrystal;
var wins = 0;
var loses = 0;



window.onload = function() {
    var audioCrystal = $("#audio");
    var audioWin = $("#audio-win");
    var audioLose = $("#audio-lose");




    function newGame() {

        randomNumberTarget = Math.floor((Math.random() * 30) + 30);

        console.log("random number is" + " " + randomNumberTarget);
        $("#number-to-guess").html(" " + randomNumberTarget);
        $("#score-text").html("Your score is:" + " " + score); //sets the score for the begining of the game
        $("#wins-text").html("Wins:" + " " + wins); //sets the wins for the begining of the game
        $("#loses-text").html("Loses:" + " " + loses); //sets the loses for the begining of the game



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


        var arr = shuffle(scoreNumberForCristals);

        //forlupe create an imege

        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            imageCrystal = $("#image" + i);
            imageCrystal.attr("data-score", arr[i]);
            $("#crystals").append(imageCrystal);

        }
    }
    $(".crystal-image").click(function count(event) {
        audioCrystal.get(0).play();
        //assign data- score to varcrystalValue
        var crystalValue = ($(this).attr("data-score"));
        //returns integer from string
        crystalValue = parseInt(crystalValue);
        // adds values to score each time cristal is clicked
        score += crystalValue;
        // updates the score
        $("#score-text").html("your score is" + " " + score)

        if (score === randomNumberTarget) {
            score = 0;
            wins++;
            document.getElementById("audio-win").play();
            newGame();
        } else
        if (score >= randomNumberTarget) {

            score = 0;
            loses++
            document.getElementById("audio-lose").play();
            newGame();
        }
    })
    newGame();
}
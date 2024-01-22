var word = $("#enterWord #word-field");
var answerArray = [];
var secretWord = "";
var guessArray = [];

function getWord() {
    secretWord = word.val();
    letters = secretWord.split('');
    for (i = 0; i < letters.length; i++) {
        $(".dashes span").text(letters.length);
        answerArray[i] = " _ \n";
        $(".dashes div").append(answerArray[i]);
    }
}

function letterGuess() {
    guess = $(this).attr('id');
    guessArray.push(guess);
    guessCount = guessArray.length;
    var versucheGesamt = 5;
    for (i = versucheGesamt; i >= 0; i--);
    {
        versucheGesamt = versucheGesamt - guessCount;
        $(".versuche span").text(versucheGesamt);
        var matches = letters.includes(guess);
        if (matches) {
            $(".dashes div").html(underscoreify(secretWord, guessArray));
        } else if (guessCount == 1) {
            $("img").attr("src", "ersterVersuchFalsch.png");
        } else if (guessCount == 2) {
            $("img").attr("src", "zweiterVersuchFalsch.png");
        } else if (guessCount == 3) {
            $("img").attr("src", "dritterVersuchFalsch.png");
        } else if (guessCount == 4) {
            $("img").attr("src", "vierterVersuchFalsch.png");
        } else if (guessCount == 5) {
            $("img").attr("src", "fünfterVersuchFalsch.png");
        } else if (guessCount >= 5) {
            alert("Spieler 2 hat gewonnen, tippe auf OK um ein neues Spiel zu starten");
            location.reload();
        }
    }
}

function underscoreify(word, guesses) {
    var underscores = "";
    for (var i = 0; i < word.length; i++) {
        if (guesses.includes(word[i])) {
            underscores = underscores + word[i];
        } else {
            underscores = underscores + " _ ";
        }
    }
    return underscores;
}


$("#enterWord #submit-word").on("click", function(e) {
    e.preventDefault()
    getWord();
    $("#enterWord #word-field").hide();
    $("#enterWord #submit-word").hide();
    $("#playerOne h2").hide();
});

$(".alpha").children().on("click", letterGuess);

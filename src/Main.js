window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var buttonsContainer = document.getElementById('buttons-container');
    for (var i = 0; i < alphabet.length; i++) {
        var letter = alphabet[i];
        var button = document.createElement('button');
        button.innerText = letter;
        button.className = 'button';
        button.addEventListener('click', function () {
            handleButtonClick(letter);
        });
        buttonsContainer.appendChild(button);
    }

    function handleButtonClick(letter) {
    }

    play = function () {

        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();
        geusses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
    }
}
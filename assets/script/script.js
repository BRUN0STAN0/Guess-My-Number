let display = document.getElementById("display");
let randomNumber = Math.floor(Math.random() * 100)
let countHint = 0;

function oneNumberLess() {
    display.value = eval(parseInt(display.value) - 1);
    giveHint();
    nanError();
}

function oneNumberMore() {
    display.value = eval(parseInt(display.value) + 1);
    giveHint();
    nanError();
}


display.onkeydown = function (event) {
    if (event.keyCode == 13) {
        giveHint();
        nanError();
    }
}

function nanError() {
    if (display.value == "NaN") {
        display.value = 0;
    }
}

function giveHint() {
    if (display.value < randomNumber) {
        document.getElementById("hint").innerHTML = "HINT: More higher!";
        document.getElementById("hint").style.color = "rgb(0, 255, 0)";
        countHint++;
        document.getElementById("count-hint").innerHTML = countHint;
    } else if (display.value > randomNumber) {
        document.getElementById("hint").innerHTML = "HINT: More lower!";
        document.getElementById("hint").style.color = "rgb(255, 0, 0)";
        countHint++;
        document.getElementById("count-hint").innerHTML = countHint;
    } else {
        document.getElementById("hint").innerHTML = "HINT: You win!";
        document.getElementById("hint").style.color = "gold";
        countHint++;
        document.getElementById("tryed").innerHTML = "";

    }
}



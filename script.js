let colors = ganerateColor(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("pickedColor");
let messageDisplay = document.getElementById("message");
let headerDisplay = document.querySelectorAll("h1")[0];
let resetButton = document.getElementById("reset");
let easyBtn = document.getElementById("easy");
let hardBtn = document.getElementById("hard");


easyBtn.addEventListener("click", function () {

    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = ganerateColor(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }

    resetButton.addEventListener("click", function () {
        colors = ganerateColor(3);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        this.textContent = "New Color";
        headerDisplay.style.backgroundColor = "steelblue";
        messageDisplay.textContent = "";
        for (i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
        }
    })

})

hardBtn.addEventListener("click", function () {

    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = ganerateColor(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function () {

    colors = ganerateColor(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Color";
    headerDisplay.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Try Again?";
            headerDisplay.style.backgroundColor = clickedColor;
            changedColor(clickedColor);

        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Wrong! Try Again.."
        }
    })
}

function changedColor(color) {

    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {

    let grabedColor = Math.floor(Math.random() * colors.length);
    return colors[grabedColor];
}

function ganerateColor(num) {

    let arr = [];
    for (i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
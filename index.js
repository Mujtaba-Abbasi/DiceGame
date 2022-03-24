var randomNumber = Math.ceil(Math.random() * 6);
console.log(randomNumber);

var randomNumber1 = Math.ceil(Math.random() * 6);
console.log(randomNumber1);

if (randomNumber === 1) {
    document.querySelector(".img1").setAttribute("src", "/images/dice1.png");
}
else if (randomNumber === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (randomNumber === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (randomNumber === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (randomNumber === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}


if (randomNumber1 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (randomNumber1 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (randomNumber1 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (randomNumber1 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (randomNumber1 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}


if (randomNumber > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} if (randomNumber < randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins";
} else if (randomNumber === randomNumber1) {
    document.querySelector("h1").innerHTML = "Draw";
}

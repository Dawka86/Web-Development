function randomNumber() {
  var randomNumber1 = Math.random();
  randomNumber1 = Math.floor(randomNumber1 * 6 + 1);
  var randomNumber2 = Math.random();

  randomNumber2 = Math.floor(randomNumber2 * 6 + 1);
  console.log(randomNumber1, randomNumber2);

  if (randomNumber1 > randomNumber2) {
    document
      .querySelector(".img1")
      .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document
      .querySelector(".img2")
      .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
    document.querySelector("h1").innerHTML = "Win pierwszy gosc robi obiad!";
  } else if (randomNumber1 < randomNumber2) {
    document
      .querySelector(".img1")
      .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document
      .querySelector(".img2")
      .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
    document.querySelector("h1").innerHTML = "Win drugi gosc robi obiad!";
  } else if (randomNumber1 === randomNumber2) {
    document
      .querySelector(".img1")
      .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document
      .querySelector(".img2")
      .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
    document.querySelector("h1").innerHTML = "Jest dogrywka!";
  }
}
randomNumber();

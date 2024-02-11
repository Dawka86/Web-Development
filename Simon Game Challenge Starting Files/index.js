for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    console.log(buttonInnerHtml);

    switch (buttonInnerHtml) {
      case "#green":
        var green = new Audio("./sounds/green.mp3");
        green.play();
        break;

      case "red":
        var red = new Audio("./sounds/red.mp3");
        red.play();
        break;
      case "yellow":
        var yellow = new Audio("./sounds/yellow.mp3");
        yellow.play();
        break;
      case "blue":
        var blue = new Audio("./sounds/blue.mp3");
        blue.play();
        break;

      default:
        break;
    }
  });
}

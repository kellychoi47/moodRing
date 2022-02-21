var backGround = document.querySelector("body");
var choices = document.querySelector("#moods");

choices.addEventListener("change", function (e) {
  var mood = e.target.value;
  if (mood === "sad") {
    backGround.classList.remove("passionate");
    backGround.classList.remove("happy");
    backGround.classList.add("sad");
  } else if (mood === "passionate") {
    backGround.classList.remove("happy");
    backGround.classList.remove("sad");
    backGround.classList.add("passionate");
  } else {
    backGround.classList.remove("sad");
    backGround.classList.remove("passionate");
    backGround.classList.add("happy");
  }
});

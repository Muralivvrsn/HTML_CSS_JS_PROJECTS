const letters = document.querySelectorAll(".letter");
const obj = {
  a: "clap.wav",
  s: "kick.wav",
  d: "openhat.wav",
  f: "boom.wav",
  g: "snare.wav",
  h: "tink.wav",
  j: "tom.wav",
  k: "hithat.wav",
  l: "ride.wav",
};
console.log(letters[0].innerText);
letters.forEach((element) => {
  element.addEventListener("click", function () {
    element.removeAttribute("style");
    console.log(element);
    document.getElementById(`${element.innerText}`).style.animation =
      "clickMe 0.2s";
    var audio = new Audio(obj[element.innerText.toLowerCase()]);
    audio.play();
  });
  element.addEventListener("keypress", function (e) {
    document.getElementById(`${e.key.toUpperCase()}`).removeAttribute("style");

    document.getElementById(`${e.key.toUpperCase()}`).style.animation =
      "clickMe 0.2s";
    var audio = new Audio(obj[e.key]);
    audio.play();
  });
});

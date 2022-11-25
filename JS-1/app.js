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
  element.onclick = function () {
    var audio = new Audio(obj[element.innerText.toLowerCase()]);
    audio.play();
  };
  element.addEventListener("keypress", function (e) {
    var audio = new Audio(obj[e.key]);
    audio.play();
  });
});

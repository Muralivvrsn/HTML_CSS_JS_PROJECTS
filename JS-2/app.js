const second = document.getElementById("sec");
const hour = document.getElementById("hour");
const minute = document.getElementById("min");

function showTime() {
  const time = new Date();
  const timeInSeconds = time.getSeconds();
  const timeInMinutes = time.getMinutes();
  const timeInHours = time.getHours();
  const secondsInDegrees = (timeInSeconds / 60) * 360 + 90;
  const minutesInDegrees =
    (timeInMinutes / 60) * 360 + (timeInSeconds / 60) * 6 + 90;
  const hoursInDegrees =
    (timeInHours / 12) * 360 + (timeInMinutes / 60) * 30 + 90;

  second.style.transform = `rotate(${secondsInDegrees}deg)`;
  hour.style.transform = `rotate(${minutesInDegrees}deg)`;
  minute.style.transform = `rotate(${hoursInDegrees}deg)`;
}
setInterval(() => {
  showTime();
}, 1000);

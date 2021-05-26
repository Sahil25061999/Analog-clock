const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
setInterval(setClock, 1000);

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds() / 60;
  const minutes = (seconds + now.getMinutes()) / 60;
  const hours = (minutes + now.getHours()) / 12;

  setRotation(second, seconds);
  setRotation(minute, minutes);
  setRotation(hour, hours);
}

function setRotation(element, rotation) {
  element.style.setProperty('--rotate', rotation * 360);
}

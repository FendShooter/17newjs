const hourInputs = document.getElementById('hourInputs');
const minutesInputs = document.getElementById('minutesInputs');
const secondInputs = document.getElementById('secondInputs');
const startTimer = document.getElementById('startTimer');
const hoursOutput = document.getElementById('hoursOutput');
const minutesOutput = document.getElementById('minutesOutput');
const secondsOutput = document.getElementById('secondsOutput');
const btnGroup = document.querySelector('.btn-group');

let targetTime;
const getTimer = () => {
  if (localStorage.getItem('timeTarget') === null) return;
  return (targetTime = JSON.parse(localStorage.getItem('timeTarget')));
};
getTimer();
let timerInterval;

const updateTimer = () => {
  if (targetTime) {
    const differenceInSeconds = Math.floor(targetTime - Date.now()) / 1000;
    if (differenceInSeconds < 1) clearInterval(timerInterval);
    const hours = Math.floor(differenceInSeconds / 3600);
    const minutes = Math.floor(differenceInSeconds / 60) % 60;
    const seconds = Math.floor(differenceInSeconds % 60);
    hoursOutput.textContent = `${hours} Hours`;
    minutesOutput.textContent = `${minutes} minutes`;
    secondsOutput.textContent = `${seconds} seconds`;
  }
};
timerInterval = setInterval(updateTimer, 500);

startTimer.addEventListener('click', () => {
  const hourValue = parseInt(hourInputs.value);
  const minuteValue = parseInt(minutesInputs.value);
  const secondValue = parseInt(secondInputs.value);
  const d = new Date();

  const currentHours = d.getHours();
  const currentMinutes = d.getMinutes();
  const currentSeconds = d.getSeconds();

  d.setHours(currentHours + hourValue);
  d.setMinutes(currentMinutes + minuteValue);
  d.setSeconds(currentSeconds + secondValue);
  targetTime = d.getTime();
  localStorage.setItem('timeTarget', targetTime);
  const buttonElement = `<button class="btn" id="stopTimer" onClick="stopTimerFunc()">Stop</button>`;
  btnGroup.innerHTML = buttonElement;
  timerInterval;
});

const stopTimerFunc = () => clearInterval(timerInterval);

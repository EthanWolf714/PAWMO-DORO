let minutes = 0;
let seconds = 0;
let timeLeft = 1500;
let interval;
let sessionCount;

const sessEl = document.getElementById('sessionCount');
const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');
const timerEl = document.getElementById('timer');
function updateTimer(){
    minutes = Math.floor(timeLeft / 60);
    seconds = timeLeft % 60;
    let formattedTime;
    formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime;
}

function startTimer(){
        interval = setInterval(() => {
            timeLeft--;
            updateTimer();
            if(timeLeft === 0){
                alert("Time's up!");
                timeLeft = 1500;
                updateTimer();
                sessionCount++;
                sessEl.innerText = sessionCount;
            }
        }, 1000);
    console.log("timer started");
    
}

function stopTimer(){
    
    clearInterval(interval);
    console.log("timer stopped");
   
}

function resetTimer(){
    clearInterval(interval)
    timeLeft = 1500;
    updateTimer();
    console.log("timer reset");
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
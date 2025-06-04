function updateTimerDisplay(minutes, seconds) {
	const timerDisplay = document.getElementById("time-left");
	timerDisplay.textContent = `${minutes}:${
		seconds > 9 ? seconds : "0" + seconds
	}`;
}

let timerInterval;

function startTimer(duration) {
	clearInterval(timerInterval);
	const studyCount = document.getElementById("study-count");
	studyCount.textContent = parseInt(studyCount.textContent) + 1;

	timerInterval = setInterval(() => {
		const minutes = Math.floor(duration / 60);
		const seconds = duration % 60;
		updateTimerDisplay(minutes, seconds);
		if (duration <= 0) {
			clearInterval(timerInterval);
		}
		duration--;
	}, 1000);
}

function startStudySession() {
	const studyDuration = 25 * 60;
	startTimer(studyDuration);
}

const studyButton = document.getElementById("study-btn");

studyButton.addEventListener("click", () => {
	startStudySession();
});

const breakButton = document.getElementById("break-btn");

breakButton.addEventListener("click", () => {
	const breakCount = document.getElementById("break-count");
	breakCount.textContent = parseInt(breakCount.textContent) + 1;
	clearInterval(timerInterval);
	startTimer(5 * 60);
});

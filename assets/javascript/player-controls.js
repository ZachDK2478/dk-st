const audio = document.getElementById("dkst-track");
const playPauseBtn = document.getElementById("play-pause");
const seekBar = document.getElementById("seek-bar");
const timeDisplay = document.getElementById("time");
const muteBtn = document.getElementById("mute");

// Play/pause toggle
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶";
    }
});

audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress || 0;
    updateTimeDisplay();
});

seekBar.addEventListener("input", () => {
    const newTime = (seekBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});

muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
});

function updateTimeDisplay() {
    const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };
    timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration || 0)}`;
}
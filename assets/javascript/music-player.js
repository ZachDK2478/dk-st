document.querySelectorAll('.track-card').forEach(card => {
    const audio = card.querySelector('.track-audio');
    const playBtn = card.querySelector('.play');
    const seek = card.querySelector('.seek-bar');
    const time = card.querySelector('.time');
    const mute = card.querySelector('.mute');

    // Play/Pause
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            document.querySelectorAll('.track-audio').forEach(a => a.pause());
            audio.play();
            playBtn.textContent = '⏸';
        } else {
            audio.pause();
            playBtn.textContent = '▶';
        }
    });

    // Time update + progress bar
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        seek.value = progress || 0;
        time.textContent = `${format(audio.currentTime)} / ${format(audio.duration || 0)}`;
    });

    // Seeking manually
    seek.addEventListener('input', () => {
        audio.currentTime = (seek.value / 100) * audio.duration;
    });

    // Mute toggle
    mute.addEventListener('click', () => {
        audio.muted = !audio.muted;
        mute.textContent = audio.muted ? '🔇' : '🔊';
    });

    // Format time
    function format(s) {
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60).toString().padStart(2, '0');
        return `${m}:${sec}`;
    }
});
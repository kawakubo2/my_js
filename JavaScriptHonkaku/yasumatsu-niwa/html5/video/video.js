document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const playlist = document.getElementById('playlist');
    const volumeBar = document.getElementById('volume');

    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');

    const seekbarOut = document.getElementById('seekbar-out');
    const seekbarIn  = document.getElementById('seekbar-in');

    let current = document.getElementById('current');
    let duration = document.getElementById('duration');

    playlist.addEventListener('change', event => {
        const videoId = event.target.value;
        if (videoId === '') return;
        video.textContent = '';
        const source = document.createElement('source');
        source.src = videoId;
        video.appendChild(source);
        video.load();
    });
    playButton.addEventListener('click', () => {
        video.play();
    });
    pauseButton.addEventListener('click', () => {
        video.pause();
    })
    volumeBar.addEventListener('change', event => {
        video.volume = event.target.value;
    });
    video.addEventListener('timeupdate', () => {
        seekbarIn.style.transform = `scaleX(${video.currentTime / video.duration})`;
        current.textContent = getStringTime(video.currentTime);
        if (video.duration) {
            duration.textContent = getStringTime(video.duration);
        }
    });
    seekbarOut.addEventListener('click', event => {
        const percent = 
        (event.pageX - (seekbarOut.getBoundingClientRect().left + window.pageXOffset)) / seekbarOut.clientWidth;
        video.currentTime = video.duration * percent;
    });
    const getStringTime = time => {
        let tmp = time;
        const seconds = Math.floor(tmp % 60);
        tmp /= 60;
        const minutes = Math.floor(tmp % 60);
        tmp /= 60;
        const hours = Math.floor(tmp % 24);
        return (hours < 10 ? "0" + hours: hours) + 
        ":" + (minutes < 10 ? "0" + minutes: minutes) + ":" + (seconds < 10 ? "0" + seconds: seconds);
    };

});
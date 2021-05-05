const video = document.getElementById('video')
const btnPlay = document.getElementById('play')
const btnStop = document.getElementById('stop')
const progressBar = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')
const volumeBar = document.getElementById('volume')

// PLAY AND PAUSE VIDEO
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

// UPDATE PLAY/PAUSE ICON
function updatePlayIcon() {
    if (video.paused) {
        btnPlay.innerHTML = `<i class="fa fa-play fa-2x"></i>`
    } else {
        btnPlay.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
    }
}

// UPDATE PROGRESS AND TIMESTAMP
function updateProgress() {
    progressBar.value = (video.currentTime / video.duration) * 100

    // Get minutes
    let min = Math.floor(video.currentTime / 60)
    min = min < 10 ? '0' + min : min

    // Get seconds
    let sec = Math.floor(video.currentTime % 60)
    sec = sec < 10 ? '0' + sec : sec

    timestamp.innerHTML = `${min}:${sec}`
}

// SET VIDEO TIME TO PROGRESS BAR
function setVideoProgress() {
    video.currentTime = (+progressBar.value * video.duration) / 100
}

let thumb = document.querySelectorAll('input[type=range]')
video.volume = 0.5
// SET VIDEO VOLUME TO VOLUME BAR
function setVideoVolume() {
    video.volume = +volumeBar.value
    console.log(+volumeBar.value)
    if (+volumeBar.value === 0) {
        thumb[1].classList.add('zero')
    } else if (+volumeBar.value > 0) {
        thumb[1].classList.remove('zero')
    }
}

// STOP VIDEO
function stopVideo() {
    video.currentTime = 0
    video.pause()
}


// EVENT LISTENERS
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

btnPlay.addEventListener('click', toggleVideoStatus)
btnStop.addEventListener('click', stopVideo)
progressBar.addEventListener('change', setVideoProgress)
volumeBar.addEventListener('change', setVideoVolume)
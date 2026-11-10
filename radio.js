// SONG LIBRARY
const AUDIO_BASE_URL = "https://pub-c943616d48ec4693a45aaefba6a1fd7e.r2.dev";

let songs = [];

async function loadLibrary() {
    try {
        const response = await fetch(
            `${AUDIO_BASE_URL}/catalog/songs-r2.json`
        );

        if (!response.ok) {
            throw new Error("Could not retrieve music catalogue.");
        }

        songs = await response.json();

        shufflePlaylist();
        loadSong(currentIndex);

    } catch (error) {
        console.error("Library error:", error);
        titleDisplay.textContent = "Library unavailable.";
    }
}

// PLAYER
const audio = document.getElementById("radio-audio");

const titleDisplay = document.getElementById("song-title");
const artistDisplay = document.getElementById("song-artist");
const albumDisplay = document.getElementById("song-album");
const coverDisplay = document.getElementById("album-cover");

const playButton = document.getElementById("play-button");
const nextButton = document.getElementById("skip-button");
const previousButton = document.getElementById("previous-button");
const restartButton = document.getElementById("restart-button");
const loopButton = document.getElementById("loop-button");

const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");

let playlist = [];
let currentIndex = 0;
let lastPlayed = null;

// BUT HERE'S THE SHUFFLER
function shufflePlaylist() {
    playlist = [...songs];
    // playlist = songs.filter(song => song.available === true);

    for (let i = playlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [playlist[i], playlist[j]] =
        [playlist[j], playlist[i]];
    }

    // Avoid repeating the previous song immediately
    if (
        playlist.length > 1 &&
        playlist[0] === lastPlayed
    ) {
        [playlist[0], playlist[1]] =
        [playlist[1], playlist[0]];
    }

    currentIndex = 0;
}

// LOAD SONG
function loadSong(index) {

    const song = playlist[index];
    if (!song) return;

    titleDisplay.textContent = song.title;
    artistDisplay.textContent = song.artist;

    albumDisplay.textContent =
        song.album + " · " + song.year;

    coverDisplay.src = `${AUDIO_BASE_URL}/${song.cover}`;
    coverDisplay.alt =
        "Album artwork for " + song.album;

    audio.src = `${AUDIO_BASE_URL}/${song.file}`;
    audio.load();
    lastPlayed = song;
}

// PLAYBACK
async function playSong() {

    try {

        /* Initialize audio visualizer
        initializeAudio();*/

        await audio.play();

        playButton.innerHTML = "&#10074;&#10074;";
        playButton.setAttribute("aria-label", "Pause");

    } catch (error) {
        console.error("Playback error:", error);
    }
}


function pauseSong() {
    audio.pause();
    playButton.innerHTML = "&#9654;";
    playButton.setAttribute("aria-label", "Play");
}


// PLAY / PAUSE BUTTON
playButton.addEventListener("click", () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});


// NEXT SONG
function nextSong() {
    currentIndex++;

    // End of playlist: reshuffle
    if (currentIndex >= playlist.length) {
        shufflePlaylist();
    }
    loadSong(currentIndex);
    playSong();
}


// PREVIOUS SONG
function previousSong() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = playlist.length - 1;

    }

    loadSong(currentIndex);
    playSong();
}

// RESTART CURRENT TRACK
restartButton.addEventListener("click", () => {
    audio.currentTime = 0;

    if (audio.paused) {
        playSong();
    }
});

// LOOP BUTTON
loopButton.addEventListener("click", () => {
    audio.loop = !audio.loop;

    loopButton.classList.toggle("active", audio.loop);

    loopButton.setAttribute(
        "aria-label",
        audio.loop ? "Disable loop" : "Enable loop"
    );

    loopButton.setAttribute("aria-pressed", audio.loop);
});

// SKIP BUTTONS
nextButton.addEventListener("click", nextSong);
previousButton.addEventListener("click", previousSong);


// AUTOMATICALLY PLAY NEXT SONG WHEN CURRENT ENDS
audio.addEventListener("ended", nextSong);


// UPDATE BUTTON WHEN AUDIO STOPS
audio.addEventListener("pause", () => {

    playButton.innerHTML = "&#9654;";
    playButton.setAttribute("aria-label", "Play");

});

// FORMAT TIME (SECONDS TO MINUTES:SECONDS)
function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

// UPDATE PROGRESS BAR
audio.addEventListener("timeupdate", () => {
    if (!Number.isFinite(audio.duration)) return;

    const progress = (audio.currentTime / audio.duration) * 100;

    progressBar.value = progress;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// UPDATE TOTAL DURATION
audio.addEventListener("loadedmetadata", () => {
    durationDisplay.textContent = formatTime(audio.duration);
});

// SEEK THROUGH TRACK
progressBar.addEventListener("input", () => {
    if (!Number.isFinite(audio.duration)) return;

    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

loadLibrary();
// START TRANSMISSION
// shufflePlaylist();
// loadSong(currentIndex);

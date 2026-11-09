// SONG LIBRARY
const songs = [
    {
        title: "Jekyll",
        artist: "Hiatus Kaiyote",
        album: "Choose Your Weapon",
        year: "2015",
        file: "music/Jekyll.mp3",
        cover: "music/covers/choose-your-weapon.jpg"
    },
    {
        title: "All The Words We Don't Say",
        artist: "Hiatus Kaiyote",
        album: "Mood Valiant",
        year: "2021",
        file: "music/All The Words We Don't Say.mp3",
        cover: "music/covers/mood-valiant.jpg"
    },
    {
        title: "Rose Water",
        artist: "Hiatus Kaiyote",
        album: "Mood Valiant",
        year: "2021",
        file: "music/Rose Water.mp3",
        cover: "music/covers/mood-valiant.jpg"
    },
    {
        title: "Dreamboat",
        artist: "Hiatus Kaiyote",
        album: "Love Heart Cheat Code",
        year: "2024",
        file: "music/Dreamboat.mp3",
        cover: "music/covers/love-heart-cheat-code.jpg"
    },
    {
        title: "Telescope",
        artist: "Hiatus Kaiyote",
        album: "Love Heart Cheat Code",
        year: "2024",
        file: "music/Telescope.mp3",
        cover: "music/covers/love-heart-cheat-code.jpg"
    },
    {
        title: "Make Friends",
        artist: "Hiatus Kaiyote",
        album: "Love Heart Cheat Code",
        year: "2024",
        file: "music/Make Friends.mp3",
        cover: "music/covers/love-heart-cheat-code.jpg"
    },
    {
        title: "BMO is Beautiful",
        artist: "Hiatus Kaiyote, Niki Yang",
        album: "Love Heart Cheat Code",
        year: "2024",
        file: "music/BMO is Beautiful.mp3",
        cover: "music/covers/love-heart-cheat-code.jpg"
    },
    {
        title: "Everything's Beautiful",
        artist: "Hiatus Kaiyote",
        album: "Love Heart Cheat Code",
        year: "2024",
        file: "music/Everything’s Beautiful.mp3",
        cover: "music/covers/love-heart-cheat-code.jpg"
    },
    {
        title: "Dimitri",
        artist: "Hiatus Kaiyote",
        album: "Love Heart Cheat Code",
        year: "2024",
        file: "music/Dimitri.mp3",
        cover: "music/covers/love-heart-cheat-code.jpg"
    },
    {
        title: "How To Meet Yourself",
        artist: "Hiatus Kaiyote",
        album: "Love Heart Cheat Code",
        year: "2024",
        file: "music/How To Meet Yourself.mp3",
        cover: "music/covers/love-heart-cheat-code.jpg"
    },
    {
        title: "Love Heart Cheat Code",
        artist: "Hiatus Kaiyote",
        album: "Love Heart Cheat Code",
        year: "2024",
        file: "music/Love Heart Cheat Code.mp3",
        cover: "music/covers/love-heart-cheat-code.jpg"
    },
    {
        title: "Cinnamon Temple",
        artist: "Hiatus Kaiyote",
        album: "Love Heart Cheat Code",
        year: "2024",
        file: "music/Cinnamon Temple.mp3",
        cover: "music/covers/love-heart-cheat-code.jpg"
    },
    {
        title: "White Rabbit",
        artist: "Hiatus Kaiyote",
        album: "Love Heart Cheat Code",
        year: "2024",
        file: "music/White Rabbit.mp3",
        cover: "music/covers/love-heart-cheat-code.jpg"
    },
    {
        title: "sorry4dying",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/sorry4dying.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "the memories we lost in translation",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/the memories we lost in translation.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "tell me a joke",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/tell me a joke.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "picking up hands",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/picking up hands.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "knots",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/knots.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "house settling",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/house settling.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "fantasyworld",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/fantasyworld.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "don't mind me",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/don't mind me.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "born yesterday",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/born yesterday.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "fractions of infinity",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/fractions of infinity.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "cassini's division",
        artist: "Quadeca",
        album: "I Didn't Mean To Haunt You",
        year: "2022",
        file: "music/cassini's division.mp3",
        cover: "music/covers/i-didnt-mean-to-haunt-you.jpg"
    },
    {
        title: "RUIN MY LIFE",
        artist: "Quadeca",
        album: "Vanisher, Horizon Scraper",
        year: "2025",
        file: "music/RUIN MY LIFE.mp3",
        cover: "music/covers/vanisher-horizon-scraper.jpg"
    },
    {
        title: "Quality Over Opinion",
        artist: "Louis Cole",
        album: "Quality Over Opinion",
        year: "2022",
        file: "music/Quality Over Opinion.mp3",
        cover: "music/covers/quality-over-opinion.jpg"
    },
    {
        title: "Villain",
        artist: "Annahstasia",
        album: "Tether",
        year: "2025",
        file: "music/Villain.mp3",
        cover: "music/covers/tether.jpg"
    },
    {
        title: "SPIKY BOiz",
        artist: "1999 WRITE THE FUTURE, Ghostface Killah, Rich Brian, Smino, Surprise Chef",
        album: "hella (˃̣̣̥╭╮˂̣̣̥) ✧ ♡ ‧º·˚",
        year: "2024",
        file: "music/SPIKY BOiz.mp3",
        cover: "music/covers/hella.jpg"
    },
    {
        title: "LiGhT rAiLs ੈ✩‧₊˚",
        artist: "1999 WRITE THE FUTURE, Rick Ross, Rich Brian",
        album: "hella (˃̣̣̥╭╮˂̣̣̥) ✧ ♡ ‧º·˚",
        year: "2024",
        file: "music/LiGhT rAiLs ੈ✩‧₊˚.mp3",
        cover: "music/covers/hella.jpg"
    },
    {
        title: "thanksgivin",
        artist: "1999 WRITE THE FUTURE, Busta Rhymes, Smino",
        album: "hella (˃̣̣̥╭╮˂̣̣̥) ✧ ♡ ‧º·˚",
        year: "2024",
        file: "music/thanksgivin.mp3",
        cover: "music/covers/hella.jpg"
    },
    {
        title: "cOoL WATeR foR thE nIGHT",
        artist: "1999 WRITE THE FUTURE, Amaarae, Warren Hue",
        album: "hella (˃̣̣̥╭╮˂̣̣̥) ✧ ♡ ‧º·˚",
        year: "2024",
        file: "music/cOoL WATeR foR thE nIGHT.mp3",
        cover: "music/covers/hella.jpg"
    },
    {
        title: "LONG in the tOOth",
        artist: "1999 WRITE THE FUTURE, Warren Hue, Pos of De La Soul, The Budos Band",
        album: "hella (˃̣̣̥╭╮˂̣̣̥) ✧ ♡ ‧º·˚",
        year: "2024",
        file: "music/LONG in the tOOth.mp3",
        cover: "music/covers/hella.jpg"
    },
    {
        title: "WOWoW! ✎ (❁ᴗ͈ˬᴗ͈)",
        artist: "1999 WRITE THE FUTURE, Warren Hue, MILLI",
        album: "hella (˃̣̣̥╭╮˂̣̣̥) ✧ ♡ ‧º·˚",
        year: "2024",
        file: "music/WOWoW! ✎ (❁ᴗ͈ˬᴗ͈).mp3",
        cover: "music/covers/hella.jpg"
    },
    {
        title: "VOoDOo BOogie",
        artist: "1999 WRITE THE FUTURE, Tiger JK, YOON MIRAE",
        album: "hella (˃̣̣̥╭╮˂̣̣̥) ✧ ♡ ‧º·˚",
        year: "2024",
        file: "music/VOoDOo BOogie.mp3",
        cover: "music/covers/hella.jpg"
    },
    {
        title: "Timeless",
        artist: "1999 WRITE THE FUTURE, The Pharcyde",
        album: "Timeless",
        year: "2025",
        file: "music/Timeless.mp3",
        cover: "music/covers/timeless.jpg"
    },
    {
        title: "LUCID DREAMER",
        artist: "The Comet Is Coming",
        album: "Hyper-Dimensional Expansion Beam",
        year: "2022",
        file: "music/LUCID DREAMER.mp3",
        cover: "music/covers/hyper-dimensional-expansion-beam.jpg"
    },
    {
        title: "Start Running",
        artist: "The Comet Is Coming",
        album: "Death to the Planet",
        year: "2017",
        file: "music/Start Running.mp3",
        cover: "music/covers/death-to-the-planet.jpg"
    },
    {
        title: "Hi-De-Ho",
        artist: "Jack White",
        album: "Fear Of The Dawn",
        year: "2022",
        file: "music/Hi-De-Ho.mp3",
        cover: "music/covers/fear-of-the-dawn.jpg"
    },
    {
        title: "Fear Of The Dawn",
        artist: "Jack White",
        album: "Fear Of The Dawn",
        year: "2022",
        file: "music/Fear Of The Dawn.mp3",
        cover: "music/covers/fear-of-the-dawn.jpg"
    },
    {
        title: "Do You See Me?",
        artist: "The Happy Fits",
        album: "Lovesick",
        year: "2025",
        file: "music/Do You See Me.mp3",
        cover: "music/covers/lovesick.jpg"
    },
    {
        title: "Secrets (Your Fire)",
        artist: "Magdalena Bay",
        album: "Mercurial World",
        year: "2021",
        file: "music/Secrets (Your Fire).mp3",
        cover: "music/covers/mercurial-world.jpg"
    },
    {
        title: "Chaeri",
        artist: "Magdalena Bay",
        album: "Imaginal Disk",
        year: "2024",
        file: "music/Chaeri.mp3",
        cover: "music/covers/imaginal-disk.jpg"
    },
    {
        title: "Death & Romance",
        artist: "Magdalena Bay",
        album: "Imaginal Disk",
        year: "2024",
        file: "music/Death & Romance.mp3",
        cover: "music/covers/imaginal-disk.jpg"
    },
    {
        title: "Second Sleep",
        artist: "Magdalena Bay",
        album: "Second Sleep / Star Eyes",
        year: "2025",
        file: "music/Second Sleep.mp3",
        cover: "music/covers/second-sleep-star-eyes.jpg"
    },
    {
        title: "Human Happens",
        artist: "Magdalena Bay",
        album: "Human Happens / Paint Me A Picture",
        year: "2025",
        file: "music/Human Happens.mp3",
        cover: "music/covers/human-happens-pmap.jpg"
    },
    {
        title: "2122",
        artist: "Geese",
        album: "3D Country",
        year: "2023",
        file: "music/2122.mp3",
        cover: "music/covers/3d-country.jpg"
    },
    {
        title: "I See Myself",
        artist: "Geese",
        album: "3D Country",
        year: "2023",
        file: "music/I See Myself.mp3",
        cover: "music/covers/3d-country.jpg"
    },
    {
        title: "Trinidad",
        artist: "Geese",
        album: "Getting Killed",
        year: "2025",
        file: "music/Trinidad.mp3",
        cover: "music/covers/getting-killed.jpg"
    },
    {
        title: "Husbands",
        artist: "Geese",
        album: "Getting Killed",
        year: "2025",
        file: "music/Husbands.mp3",
        cover: "music/covers/getting-killed.jpg"
    },
    {
        title: "Getting Killed",
        artist: "Geese",
        album: "Getting Killed",
        year: "2025",
        file: "music/Getting Killed.mp3",
        cover: "music/covers/getting-killed.jpg"
    },
    {
        title: "Cobra",
        artist: "Geese",
        album: "Getting Killed",
        year: "2025",
        file: "music/Cobra.mp3",
        cover: "music/covers/getting-killed.jpg"
    },
    {
        title: "100 Horses",
        artist: "Geese",
        album: "Getting Killed",
        year: "2025",
        file: "music/100 Horses.mp3",
        cover: "music/covers/getting-killed.jpg"
    },
    {
        title: "Taxes",
        artist: "Geese",
        album: "Getting Killed",
        year: "2025",
        file: "music/Taxes.mp3",
        cover: "music/covers/getting-killed.jpg"
    },
    {
        title: "Lond Island city Here I Come",
        artist: "Geese",
        album: "Getting Killed",
        year: "2025",
        file: "music/Long Island City Here I Come.mp3",
        cover: "music/covers/getting-killed.jpg"
    },
    {
        title: "Half Real",
        artist: "Geese",
        album: "Getting Killed",
        year: "2025",
        file: "music/Half Real.mp3",
        cover: "music/covers/getting-killed.jpg"
    },
    {
        title: "Bow Down",
        artist: "Geese",
        album: "Getting Killed",
        year: "2025",
        file: "music/Bow Down.mp3",
        cover: "music/covers/getting-killed.jpg"
    },
    {
        title: "Au Pays du Cocaine",
        artist: "Geese",
        album: "Getting Killed",
        year: "2025",
        file: "music/Au Pays du Cocaine.mp3",
        cover: "music/covers/getting-killed.jpg"
    },
    {
        title: "Cops and robbers",
        artist: "underscores",
        album: "Wallsocket",
        year: "2023",
        file: "music/Cops and robbers.mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "You don't even know who I am",
        artist: "underscores",
        album: "Wallsocket",
        year: "2023",
        file: "music/You don't even know who I am.mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Shoot to kill, kill your darlings",
        artist: "underscores",
        album: "Wallsocket",
        year: "2023",
        file: "music/Shoot to kill, kill your darlings.mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Local (Girls like us) [with gabby start]",
        artist: "underscores, gabby start",
        album: "Wallsocket",
        year: "2023",
        file: "music/Local (Girls like us) [with gabby start].mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Johnny johnny johnny",
        artist: "underscores",
        album: "Wallsocket",
        year: "2023",
        file: "music/Johnny johnny johnny.mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Horror movie soundtrack",
        artist: "underscores",
        album: "Wallsocket",
        year: "2023",
        file: "music/Horror movie soundtrack.mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Duhhhhhhhhhhhhhhhhh",
        artist: "underscores",
        album: "Wallsocket",
        year: "2023",
        file: "music/Duhhhhhhhhhhhhhhhhh.mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Uncanny long arms (with Jane Remover)",
        artist: "underscores, Jane Remover",
        album: "Wallsocket",
        year: "2023",
        file: "music/Uncanny long arms (with Jane Remover).mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Seventyseven dog years",
        artist: "underscores",
        album: "Wallsocket",
        year: "2023",
        file: "music/Seventyseven dog years.mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Old money bitch",
        artist: "underscores",
        album: "Wallsocket",
        year: "2023",
        file: "music/Old money bitch.mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Good luck final girl",
        artist: "underscores",
        album: "Wallsocket",
        year: "2023",
        file: "music/Good luck final girl.mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Geez louise (with henhouse!)",
        artist: "underscores, henhouse!",
        album: "Wallsocket",
        year: "2023",
        file: "music/Geez louise (with henhouse!).mp3",
        cover: "music/covers/wallsocket.jpg"
    },
    {
        title: "Psychoboost",
        artist: "Jane Remover",
        album: "Revengeseekerz",
        year: "2025",
        file: "music/Psychoboost.mp3",
        cover: "music/covers/revengeseekerz.jpg"
    },
    {
        title: "Little Bones",
        artist: "The Tragically Hip",
        album: "Road Apples",
        year: "1991",
        file: "music/Little Bones.mp3",
        cover: "music/covers/road-apples.jpg"
    },
    {
        title: "Well Rested",
        artist: "Kero Kero Bonito",
        album: "Civilisation II",
        year: "2021",
        file: "music/Well Rested.mp3",
        cover: "music/covers/civilisation-ii.jpg"
    },
    {
        title: "Lost!",
        artist: "Portraits Of Tracy",
        album: "Divine Home: Parting Gifts",
        year: "2024",
        file: "music/Lost!.mp3",
        cover: "music/covers/divine-home-parting-gifts.jpg"
    },
    {
        title: "Energy",
        artist: "Midnight Generation",
        album: "Teacher",
        year: "2025",
        file: "music/Energy.mp3",
        cover: "music/covers/teacher.jpg"
    },
    {
        title: "#RICHAXXHAITIAN",
        artist: "Mach-Hommy",
        album: "#RICHAXXHAITIAN",
        year: "2024",
        file: "music/RICHAXXHAITIAN.mp3",
        cover: "music/covers/richaxxhaitian.jpg"
    }
];

// PLAYER
const audio = document.getElementById("radio-audio");

const titleDisplay = document.getElementById("song-title");
const artistDisplay = document.getElementById("song-artist");
const albumDisplay = document.getElementById("song-album");
const coverDisplay = document.getElementById("album-cover");

const playButton = document.getElementById("play-button");
const nextButton = document.getElementById("skip-button");
const previousButton = document.getElementById("previous-button");

let playlist = [];
let currentIndex = 0;
let lastPlayed = null;

// BUT HERE'S THE SHUFFLER
function shufflePlaylist() {
    playlist = [...songs];

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

    coverDisplay.src = song.cover;
    coverDisplay.alt =
        "Album artwork for " + song.album;

    audio.src = song.file;
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

// START TRANSMISSION
shufflePlaylist();
loadSong(currentIndex);

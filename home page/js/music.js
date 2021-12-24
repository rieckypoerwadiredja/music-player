// -----------------------------------Music Title------------------------
const heatIcon = document.querySelectorAll('.fa-heart');

heatIcon.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList.contains('far')) {
            e.className = 'fas fa-heart';
        } else {
            e.className = 'far fa-heart';
        }
    });
});


// -----------------------------------Music Progress------------------------
const shuffle = document.getElementById('shuffle');
const repeat = document.getElementById('repeat');
const next = document.getElementById('next');
const preview = document.getElementById('preview');
const playPouse = document.getElementById('playPouse');

class Music {
    constructor(shuffle, repeat, next, preview, playPouse) {
        this.shuffle = shuffle;
        this.repeat = repeat;
        this.nextt = next;
        this.preview = preview;
        this.playPouse = playPouse;
    }

    // ganti img
    changeImg(img) {
        const imgPlayer = document.querySelector('.img-song-player');
        imgPlayer.setAttribute('src', img);
    }
    // ganti judul
    changeTitle(title, name) {
        const titlePlayer = document.querySelector('.popular-title');
        const namePlayer = document.querySelector('.popular-name');
        titlePlayer.innerHTML = title;
        namePlayer.innerHTML = name;
    }
    //ganti source audio Music Bar
    changeSource(audio) {
        const audioMusicBar = document.querySelector('.audioMusicBar');
        audioMusicBar.src = audio;
    }
    // play music
    playMusic() {
        const audioMusicBar = document.querySelector('.audioMusicBar');

        audioMusicBar.play();

        // Buat Mobile ksh class active
        const musicBarBtn = document.querySelector('.music-bar-btn');
        const musicBar = document.querySelector('.music-bar');
        const imgSongMusic = document.querySelector('.img-song-player');

        musicBar.classList.remove('active');
        musicBarBtn.classList.remove('active');
        imgSongMusic.classList.remove('active');

        // get duration
        audioMusicBar.onloadedmetadata = () => {
            // ---------------TOTAL DURASI------------
            // Total menit lagu
            let Tmenit = Math.floor(audioMusicBar.duration / 60);
            if (Tmenit < 10) Tmenit = "0" + Tmenit;
            console.log(Tmenit);

            // total sisa detik
            let Tdetik = Math.floor(audioMusicBar.duration - (Tmenit * 60));
            if (Tdetik < 10) Tdetik = "0" + Tdetik;
            console.log(Tdetik);

            const waktuTotal = document.querySelector('.duration-song');
            waktuTotal.innerHTML = `${Tmenit}:${Tdetik}`;

            // -----------------WAKTU SEKARANG ------------ 

            audioMusicBar.addEventListener("timeupdate", () => {
                //  menit lagu sekarang
                let Smenit = Math.floor(audioMusicBar.currentTime / 60);
                if (Smenit < 10) Smenit = "0" + Smenit;

                //  detik lagu sekarang
                let Sdetik = Math.floor(audioMusicBar.currentTime - (Smenit * 60));
                if (Sdetik < 10) Sdetik = "0" + Sdetik;

                const turentTime = document.querySelector('.curent-time-song');
                turentTime.innerHTML = `${Smenit}:${Sdetik}`;
            });

            // ---------------slider song------------------
            audioMusicBar.addEventListener("timeupdate", () => {
                const sliderSong = document.querySelector('.range-song');
                const valueMusic = audioMusicBar.currentTime * (100 / audioMusicBar.duration);
                sliderSong.value = valueMusic;

                const shuffle = document.getElementById('shuffle');
                const repeat = document.getElementById('repeat');

                if (sliderSong.value == 100) {
                    audioMusicBar.pause();
                    audioMusicBar.currentTime = 0;
                    if (repeat.classList.contains('active')) {} else {
                        const playBtnBar = document.querySelector('.play-pouse');
                        playBtnBar.classList.remove('pause');
                        music.playBtnBar();
                    }
                }

                // --------repeat-----------
                if (sliderSong.value == 100 && repeat.classList.contains('active')) {
                    audioMusicBar.pause();
                    audioMusicBar.currentTime = 0;
                    audioMusicBar.play();
                }

                // --------shuffle----------
                if (sliderSong.value == 100 && shuffle.classList.contains('active')) {
                    audioMusicBar.pause();
                    audioMusicBar.currentTime = 0;

                    function random(max) {
                        return Math.floor(Math.random() * max);
                    }

                    let angka = random(3);
                    // console.log(angka);
                    let arraySong = ['Adventures', 'Different Heaven', 'Lights  Sappheiros'];

                    const audioSrc = `./song/${arraySong[angka]}.mp3`;
                    music.changeSource(audioSrc);

                    let singerSong = ['Takeshimure', 'Angelica', 'Sizuru'];

                    // ----------------change img--------------
                    const srcImg = `./images/imgSec/song popular ${angka}.jpg`;
                    music.changeImg(srcImg);

                    // ---------------Change Title------------
                    const titleSong = arraySong[angka];
                    const nameSong = singerSong[angka];
                    music.changeTitle(titleSong, nameSong);

                    audioMusicBar.play();

                    const playBtnBar = document.querySelector('.play-pouse');
                    playBtnBar.classList.add('pause');
                    music.playBtnBar();
                }

                // -------------------------------Slider Song---------------------------------
                const rangeSong = document.querySelector('.range-song');
                let geser;
                rangeSong.addEventListener("mousedown", (e) => {
                    geser = true;
                    musicPosition(e);
                });
                rangeSong.addEventListener("mouseup", (e) => {
                    geser = false;
                });
                rangeSong.addEventListener("mousemove", (e) => {
                    musicPosition(e);
                });

                function musicPosition(e) {
                    if (geser) {
                        let value = audioMusicBar.duration * rangeSong.value / 100;
                        audioMusicBar.currentTime = value;
                    }
                }

            });

        }

    }
    volume(value) {
        const audioMusicBar = document.querySelector('.audioMusicBar');
        audioMusicBar.volume = value / 100;
    }
    playBtnBar() {
        const playBtnBar = document.querySelector('.play-pouse');
        if (playBtnBar.classList.contains('pause')) {
            playBtnBar.children[0].className = 'fas fa-pause';
        } else {
            playBtnBar.children[0].className = 'fas fa-play';
        }
    }
    playPause() {
        const audioMusicBar = document.querySelector('.audioMusicBar');
        audioMusicBar.pause();
    }



}

const music = new Music(shuffle, repeat, next, preview, playPouse);

// -----------------------------Change Img---------------------------
const playBtnPopular = document.querySelectorAll('.play-button');
playBtnPopular.forEach((e) => {
    e.addEventListener("click", () => {
        const srcImg = e.nextElementSibling.getAttribute('src');
        music.changeImg(srcImg);
        // ---------------Change Title------------
        const titleSong = e.previousElementSibling.children[1].children[0].children[0].innerHTML;
        const nameSong = e.previousElementSibling.children[1].children[0].children[1].children[1].innerHTML;
        music.changeTitle(titleSong, nameSong);
        // ---------------play Song---------------
        const popAudio = document.querySelectorAll('.popAudio');
        for (let i = 0; i < popAudio.length; i++) {

            if (e.classList.contains(i)) {
                let arraySong = ['Adventures', 'Different Heaven', 'Lights  Sappheiros'];
                // const audioSrc = e.nextElementSibling.nextElementSibling.getAttribute('src');
                const audioSrc = `./song/${arraySong[i]}.mp3`;
                music.changeSource(audioSrc);

                const playBtnBar = document.querySelector('.play-pouse');
                playBtnBar.classList.add('pause');



                // --------------------------------NEXT-----------------------------------------
                const next = document.getElementById('next');
                next.addEventListener("click", (e) => {
                    let singerSong = ['Takeshimure', 'Angelica', 'Sizuru'];
                    if (i < arraySong.length - 1) {
                        i++;
                        // console.log(i);

                        const audioSrc = `./song/${arraySong[i]}.mp3`;
                        music.changeSource(audioSrc);

                        // change img
                        const srcImg = `./images/imgSec/song popular ${i}.jpg`;
                        music.changeImg(srcImg);

                        // ---------------Change Title------------
                        const titleSong = arraySong[i];
                        const nameSong = singerSong[i];
                        music.changeTitle(titleSong, nameSong);
                    } else {
                        i = 0;
                        // console.log(i);
                        const audioSrc = `./song/${arraySong[i]}.mp3`;
                        music.changeSource(audioSrc);

                        // change img
                        const srcImg = `./images/imgSec/song popular ${i}.jpg`;
                        music.changeImg(srcImg);

                        // ---------------Change Title------------
                        const titleSong = arraySong[i];
                        const nameSong = singerSong[i];
                        music.changeTitle(titleSong, nameSong);
                    }
                    music.playMusic();
                    music.playBtnBar();
                });

                // --------------------------------PREVIEW-----------------------------------------
                const preview = document.getElementById('preview');
                preview.addEventListener("click", (e) => {
                    let singerSong = ['Takeshimure', 'Angelica', 'Sizuru'];
                    if (i > 0) {
                        i--;
                        console.log(i);

                        const audioSrc = `./song/${arraySong[i]}.mp3`;
                        music.changeSource(audioSrc);

                        // change img
                        const srcImg = `./images/imgSec/song popular ${i}.jpg`;
                        music.changeImg(srcImg);

                        // ---------------Change Title------------
                        const titleSong = arraySong[i];
                        const nameSong = singerSong[i];
                        music.changeTitle(titleSong, nameSong);

                    } else {
                        i = 2;
                        // console.log(i);
                        const audioSrc = `./song/${arraySong[i]}.mp3`;
                        music.changeSource(audioSrc);

                        // change img
                        const srcImg = `./images/imgSec/song popular ${i}.jpg`;
                        music.changeImg(srcImg);

                        // ---------------Change Title------------
                        const titleSong = arraySong[i];
                        const nameSong = singerSong[i];
                        music.changeTitle(titleSong, nameSong);
                    }
                    music.playMusic();
                    music.playBtnBar();
                });

                music.playMusic();
                music.playBtnBar();
            }

        }
    });
});

const controlTengah = document.querySelectorAll('.control-tengah');
controlTengah.forEach((e) => {
    e.addEventListener("click", () => {
        const shuffle = document.getElementById('shuffle');
        const repeat = document.getElementById('repeat');

        if (e.id == 'shuffle') {
            e.classList.toggle('active');
            repeat.classList.remove('active');
        }
        if (e.id == 'repeat') {
            e.classList.toggle('active');
            shuffle.classList.remove('active');
        }

    });
});

// -------------------------------Volume Song---------------------------------
const volumeSLider = document.querySelector('.volume-song');
volumeSLider.addEventListener("mousemove", () => {
    let volume = volumeSLider.value;
    music.volume(volume);
});

// ---------------------- BtnPlayPause Bar-------------------------------------
const playBtnBar = document.querySelector('.play-pouse');

playBtnBar.addEventListener("click", () => {


    const audioMusicBar = document.querySelector('.audioMusicBar').getAttribute('src');
    if (audioMusicBar == '') {
        alert("silahkan pilih lagunya");
    } else {
        // alert(playBtnBar.className);

        playBtnBar.classList.toggle('pause');
        music.playBtnBar();

        if (playBtnBar.classList.contains('pause')) {
            music.playMusic();
        } else {
            music.playPause();
        }
    }

});
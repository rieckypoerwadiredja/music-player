const musicBarBtn = document.querySelector('.music-bar-btn');
const musicBar = document.querySelector('.music-bar');
const imgSongMusic = document.querySelector('.img-song-player');


class Style {
    constructor(musicBarBtn, musicBar, imgSongMusic) {
        this.musicBarBtn = musicBarBtn;
        this.musicBar = musicBar;
        this.imgSongMusic = imgSongMusic;
    }
    modelMusicBar() {
        musicBar.classList.toggle('active');
        musicBarBtn.classList.toggle('active');
        imgSongMusic.classList.toggle('active');
    }

    scrolModeMusicBar() {

        window.addEventListener("scroll", () => {
            const section = document.getElementsByTagName('section');
            const totalHeight = document.documentElement.clientHeight;
            let scrollNow = window.scrollY;

            if (scrollNow % 3 == 0) {
                musicBar.classList.add('active');
                musicBarBtn.classList.add('active');
                imgSongMusic.classList.add('active');
            }

        });
    }

    // play music
    playMusic() {
        const audioMusicBar = document.querySelector('.audioMusicBar');

        audioMusicBar.play();
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
        console.log(audioMusicBar.src);
    }

    // ganti icon
    playBtnBar() {
        const playBtnBar = document.querySelector('.play-pouse');
        if (playBtnBar.classList.contains('pause')) {
            playBtnBar.children[0].className = 'fas fa-pause';
        } else {
            playBtnBar.children[0].className = 'fas fa-play';
        }
    }
    // volume
    volume(value) {
        const audioMusicBar = document.querySelector('.audioMusicBar');
        audioMusicBar.volume = value / 100;
    }

    // audioPlay
    play() {
        const audioMusicBar = document.querySelector('.audioMusicBar');
        audioMusicBar.play();

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
        }

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

const style = new Style(musicBarBtn, musicBar, imgSongMusic);

musicBarBtn.addEventListener("click", (e) => {
    style.modelMusicBar();
});

if (musicBar.classList.contains('active')) {} else {
    style.scrolModeMusicBar();
}

const playPouseMob = document.querySelectorAll('.play-pouse-mob');
playPouseMob.forEach((e) => {

    // ------------------keluarkan control music-----------------
    e.addEventListener('click', () => {
        // -------------buka tutup music bar-------------
        musicBar.classList.remove('active');
        musicBarBtn.classList.remove('active');
        imgSongMusic.classList.remove('active');

        // ----------------change Img--------------------
        const srcImg = e.previousElementSibling.previousElementSibling.getAttribute('src');
        style.changeImg(srcImg);

        // ---------------Change Title------------
        const titleSong = e.previousElementSibling.children[0].innerHTML;
        const nameSong = e.previousElementSibling.children[1].innerHTML;
        style.changeTitle(titleSong, nameSong);

        const popAudioMob = document.querySelectorAll('.popAudioMob');
        for (let i = 0; i < popAudioMob.length; i++) {

            if (e.classList.contains(i)) {
                let arraySongMob = ['Adventures', 'Different Heaven', 'Lights  Sappheiros'];
                // const audioSrc = e.nextElementSibling.nextElementSibling.getAttribute('src');
                const audioSrc = `./song/${arraySongMob[i]}.mp3`;
                style.changeSource(audioSrc);

                // change icon
                const playBtnBar = document.querySelector('.play-pouse');
                playBtnBar.classList.add('pause');
                style.playBtnBar();

                // --------------------------------NEXT-----------------------------------------
                const next = document.getElementById('next');
                next.addEventListener("click", (e) => {
                    let singerSong = ['Takeshimure', 'Angelica', 'Sizuru'];
                    if (i < arraySongMob.length - 1) {
                        i++;
                        // console.log(i);

                        const audioSrc = `./song/${arraySongMob[i]}.mp3`;
                        style.changeSource(audioSrc);

                        // change img
                        const srcImg = `./images/imgSec/song popular ${i}.jpg`;
                        style.changeImg(srcImg);

                        // ---------------Change Title------------
                        const titleSong = arraySongMob[i];
                        const nameSong = singerSong[i];
                        style.changeTitle(titleSong, nameSong);
                    } else {
                        i = 0;
                        // console.log(i);
                        const audioSrc = `./song/${arraySongMob[i]}.mp3`;
                        style.changeSource(audioSrc);

                        // change img
                        const srcImg = `./images/imgSec/song popular ${i}.jpg`;
                        music.changeImg(srcImg);

                        // ---------------Change Title------------
                        const titleSong = arraySongMob[i];
                        const nameSong = singerSong[i];
                        style.changeTitle(titleSong, nameSong);
                    }
                    style.playMusic();
                    style.playBtnBar();
                });

                // --------------------------------PREVIEW-----------------------------------------
                const preview = document.getElementById('preview');
                preview.addEventListener("click", (e) => {
                    let singerSong = ['Takeshimure', 'Angelica', 'Sizuru'];
                    if (i > 0) {
                        i--;
                        console.log(i);

                        const audioSrc = `./song/${arraySongMob[i]}.mp3`;
                        style.changeSource(audioSrc);

                        // change img
                        const srcImg = `./images/imgSec/song popular ${i}.jpg`;
                        style.changeImg(srcImg);

                        // ---------------Change Title------------
                        const titleSong = arraySongMob[i];
                        const nameSong = singerSong[i];
                        style.changeTitle(titleSong, nameSong);

                    } else {
                        i = 2;
                        // console.log(i);
                        const audioSrc = `./song/${arraySongMob[i]}.mp3`;
                        style.changeSource(audioSrc);

                        // change img
                        const srcImg = `./images/imgSec/song popular ${i}.jpg`;
                        style.changeImg(srcImg);

                        // ---------------Change Title------------
                        const titleSong = arraySongMob[i];
                        const nameSong = singerSong[i];
                        style.changeTitle(titleSong, nameSong);
                    }
                    style.playMusic();
                    style.playBtnBar();
                });



            }
            style.play();
        }
    });

});

// -------------------------------Volume Song---------------------------------
const volumeSLiderMob = document.querySelector('.volume-song');
volumeSLiderMob.addEventListener("mousemove", () => {
    let volume = volumeSLider.value;
    style.volume(volume);
});
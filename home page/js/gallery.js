const kategories = document.querySelector('.filter.add');

document.onclick = (e) => {
    if (e.target.className !== 'filter add active') {
        kategories.classList.remove('active');
        kategories.children[1].classList.remove('active');
    }
}

kategories.addEventListener("click", (e) => {
    kategories.classList.toggle('active');
    kategories.children[1].classList.toggle('active');
});


// data lagu 

let songs = [

    {
        name: "Chiisana Boukensha",
        image: "./images/imgGallery/Chiisana Boukensha.jpg",
        song: "./song/Chiisana Boukensha.mp3",
        linkOri: "https://youtu.be/NevwXF6ZdtI",
        price: "1,580",
        genre: "Anime Music"

    },

    {
        name: "Jazz Music Bar",
        image: "./images/imgGallery/Jazz Music Bar.jpg",
        song: "./song/Jazz Music Bar.mp3",
        linkOri: "https://youtu.be/tQjd3yciezU",
        price: "1,580",
        genre: "Jazz Music"

    },

    {
        name: "Trauma",
        image: "./images/imgGallery/Trauma.jpg",
        song: "./song/Trauma.mp3",
        linkOri: "https://youtu.be/ZHP0Zm6nniE",
        price: "1,580",
        genre: "Pop Music"

    },

    {
        name: "Face Off",
        image: "./images/imgGallery/Face Off.jpg",
        song: "./song/Face Off.mp3",
        linkOri: "https://youtu.be/sH0gzen3z4k",
        price: "1,580",
        genre: "Rap Music"

    },

    {
        name: "Canon in D",
        image: "./images/imgGallery/Canon in D.jpg",
        song: "./song/Canon in D.mp3",
        linkOri: "https://youtu.be/Ptk_1Dc2iPY",
        price: "1,580",
        genre: "Classic Music"

    },



    {
        name: "Sparkle",
        image: "./images/imgGallery/Sparkle.jpg",
        song: "./song/Sparkle.mp3",
        linkOri: "https://youtu.be/-pHfPJGatgE",
        price: "1,320",
        genre: "Anime Music"

    },


    {
        name: "Nocturne op.9 No.2",
        image: "./images/imgGallery/Nocturne op.9 No.2.jpg",
        song: "./song/Nocturne op.9 No.2.mp3",
        linkOri: "https://youtu.be/9E6b3swbnWg",
        price: "1,580",
        genre: "Classic Music"

    },

    {
        name: "Happy by skinnyfab",
        image: "./images/imgGallery/Happy.jpg",
        song: "./song/Happy.mp3",
        linkOri: "https://youtu.be/qiQn5tYXdGA",
        price: "1,580",
        genre: "Pop Music"

    },

    {
        name: "All The Kids Are Depressed",
        image: "./images/imgGallery/All the kids are depressed.jpg",
        song: "./song/All the kids are depressed.mp3",
        linkOri: "https://youtu.be/d_So8lwTHAg",
        price: "1,580",
        genre: "Pop Music"

    },

    {
        name: "Rose",
        image: "./images/imgGallery/Rose.jpg",
        song: "./song/Rose.mp3",
        linkOri: "https://youtu.be/cKxjDHdUj1A",
        price: "1,580",
        genre: "Pop Music"

    },



    {
        name: "BOP on Broadway",
        image: "./images/imgGallery/BOP on Broadway.jpg",
        song: "./song/BOP on Broadwayl.mp3",
        linkOri: "https://youtu.be/28hYUZMufDg",
        price: "1,580",
        genre: "Rap Music"

    },

    {
        name: "Rap God",
        image: "./images/imgGallery/Rap God.jpg",
        song: "./song/Rap God.mp3",
        linkOri: "https://youtu.be/XbGs_qK2PQA",
        price: "1,580",
        genre: "Rap Music"

    },

    {
        name: "Dat $tick",
        image: "./images/imgGallery/Dat $tick.png",
        song: "./song/Dat $tick.mp3",
        linkOri: "https://youtu.be/XbGs_qK2PQA",
        price: "1,580",
        genre: "Rap Music"

    },

    {
        name: "Omoide Shiritori",
        image: "./images/imgGallery/Omoide Shiritori.jpg",
        song: "./song/Omoide Shiritori.mp3",
        linkOri: "https://youtu.be/1GMar6F_ovY",
        price: "1,580",
        genre: "Anime Music"

    },

    {
        name: "Psychosocial",
        image: "./images/imgGallery/Psychosocial.jpg",
        song: "./song/Psychosocial.mp3",
        linkOri: "https://youtu.be/5abamRO41fE",
        price: "1,580",
        genre: "Rock Music"

    },

    {
        name: "You Only Live Once",
        image: "./images/imgGallery/You Only Live Once.jpg",
        song: "./song/You Only Live Once.mp3",
        linkOri: "https://youtu.be/312Sb-2PovA",
        price: "1,580",
        genre: "Rock Music"

    },

    {
        name: "Clock Strikes",
        image: "./images/imgGallery/Clock Strikes.jpg",
        song: "./song/Clock Strikes.mp3",
        linkOri: "https://youtu.be/312Sb-2PovA",
        price: "1,580",
        genre: "Rock Music"

    },

    {
        name: "It's My Life",
        image: "./images/imgGallery/It's My Life.jpg",
        song: "./song/It's My Life.mp3",
        linkOri: "https://youtu.be/vx2u5uUu3DE",
        price: "1,580",
        genre: "Rock Music"

    },

    {
        name: "Andante",
        image: "./images/imgGallery/Andante.jpg",
        song: "./song/Andante.mp3",
        linkOri: "https://youtu.be/DvIpbA342Pc",
        price: "1,580",
        genre: "Classic Music"

    },

    {
        name: "Sonata No. 16 in C Major, K.545",
        image: "./images/imgGallery/Sonata No. 16 in C Major, K.545.jpg",
        song: "./song/Sonata No. 16 in C Major, K.545.mp3",
        linkOri: "https://youtu.be/qjk-YRuQZDE",
        price: "1,580",
        genre: "Classic Music"

    },

    {
        name: "Relaxing jazz music piano",
        image: "./images/imgGallery/Relaxing jazz music piano.jpg",
        song: "./song/Relaxing jazz music piano.mp3",
        linkOri: "https://youtu.be/jUCxIbI9cak",
        price: "1,580",
        genre: "Jazz Music"

    },

    {
        name: "Signal",
        image: "./images/imgGallery/Signal.jpg",
        song: "./song/Signal.mp3",
        linkOri: "https://youtu.be/WNg3mK0-tN0",
        price: "1,800",
        genre: "Anime Music"

    },

];


class Gallery {

    makeCard(data) {

        data.forEach(dataSong => {
            let card = `
                <div data-song = "${dataSong.genre}" class = "card-item all">
                    <div class = "img-box">
                        <img src = "${dataSong.image}" alt = "" >
                    </div> 
                    
                    <div class = "content-item" >
                        <h4 class = "genre">${dataSong.genre}</h4> 
                        <h3 class = "title-song-item">${dataSong.name}</h3> 
                        <div class = "control" >
                            <div class = "view" >
                            <div class = "bulat" >
                            <ion-icon name = "logo-bitcoin"></ion-icon> 
                        </div> 
                        
                        <p>${dataSong.price}</p> 
                    </div> 

                    <div class = "share-song">
                        <div class = "bulat like" >
                        <ion-icon name = "heart"></ion-icon> 
                    </div> 
                    
                    <div class = "bulat share" >
                        <ion-icon name = "share-social"></ion-icon> 
                    </div> 
                    <div class = "bulat link" >
                        <ion-icon name = "link"></ion-icon> 
                    </div> 
                </div> 

                `;
            document.querySelector('.gallery-songs').innerHTML += card;

            const cards = document.getElementsByClassName('card-item');

            setTimeout(() => {
                if (cards.length > 7) {
                    for (let i = 8; i < cards.length; i++) {
                        cards[i].style.display = 'none';
                    }
                }
            }, 0);
            // console.log(window.innerWidth);
            if (window.innerWidth <= 650) {
                setTimeout(() => {
                    if (cards.length > 7) {
                        for (let i = 6; i < card.length; i++) {
                            cards[i].style.display = 'none';
                        }
                    }
                }, 0);
            }
            if (window.innerWidth <= 375) {
                setTimeout(() => {
                    if (cards.length > 5) {
                        for (let i = 4; i < card.length; i++) {
                            cards[i].style.display = 'none';
                        }
                    }
                }, 0);
            }
        });



    }


    filterSong() {
        const cards = document.querySelectorAll('.card-item');

        const containerList = document.querySelector('.container-filter');
        const classSong = ['anime', 'pop', 'rock', 'rap', 'jazz', 'classic'];
        const dataAtribute = ['Anime Music', 'Pop Music', 'Rock Music', 'Rap Music', 'Jazz Music', 'Classic Music'];

        containerList.addEventListener('click', (e) => {

            if (e.target.classList.contains('all')) {

                cards.forEach(e => {
                    if (e.className == 'card-item all') {
                        e.style.display = 'flex';
                    }

                    setTimeout(() => {
                        if (cards.length > 7) {
                            for (let i = 8; i < cards.length; i++) {
                                cards[i].style.display = 'none';
                            }
                        }
                    }, 0);

                    if (window.innerWidth <= 650) {
                        setTimeout(() => {
                            if (cards.length > 7) {
                                for (let i = 6; i < cards.length; i++) {
                                    cards[i].style.display = 'none';
                                }
                            }
                        }, 0);
                    }

                    if (window.innerWidth <= 375) {
                        setTimeout(() => {
                            if (cards.length > 5) {
                                for (let i = 4; i < cards.length; i++) {
                                    cards[i].style.display = 'none';
                                }
                            }
                        }, 0);
                    }

                });

            }

            for (let i = 0; i < classSong.length; i++) {
                if (e.target.classList.contains(classSong[i])) {
                    cards.forEach(e => {
                        if (e.getAttribute('data-song') == dataAtribute[i]) {
                            e.style.display = 'flex';
                        } else {
                            e.style.display = 'none';
                        }

                        // for (let i = 3; i <= cards.length; i++) {
                        //     setTimeout(() => {
                        //         if (cards.length > 3) {
                        //             let panjang = cards.length - 1;
                        //             cards[panjang].style.display = 'none';
                        //         }
                        //     }, 0);

                        // }



                    });

                }
            }

        });

    }
}


const galleryClass = new Gallery();

// ------------------------------ Panggil loop object ----------------------------------
const propertyNames = Object.values(songs);

galleryClass.makeCard(propertyNames);

// --------------------------------------------Filter-----------------------------------
galleryClass.filterSong();
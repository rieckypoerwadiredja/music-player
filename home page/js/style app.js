const mobListWidth = document.querySelector('.mobile-menu li:nth-child(2)').offsetWidth;
const mobList = document.querySelectorAll('.list-mobile');
const boll = document.querySelector('.boll');

boll.classList.add('home');


mobList.forEach(((e) => {
    e.addEventListener("click", (el => {
        if (e.id === 'listSatu') {
            boll.className = 'boll home';
            removeClassIcon(e.childNodes[1].children[0]);
            font(e.childNodes[1].children[1]);
        }
        if (e.id === 'listDua') {
            boll.className = 'boll market';
            removeClassIcon(e.childNodes[1].children[0]);
            font(e.childNodes[1].children[1]);
        }
        if (e.id === 'listTiga') {
            boll.className = 'boll search';
            removeClassIcon(e.childNodes[1].children[0]);
            font(e.childNodes[1].children[1]);
        }
        if (e.id === 'listEmpat') {
            boll.className = 'boll mywallet';
            removeClassIcon(e.childNodes[1].children[0]);
            font(e.childNodes[1].children[1]);
        }
    }));
}));

function removeClassIcon(awal) {
    const allIcon = document.querySelectorAll('.icon-mob');
    allIcon.forEach((e) => {
        if (e.classList.contains('up')) {
            e.classList.remove('up')
        }
        awal.classList.add('up');
    });
}

function font(awal) {
    const fontMenuMobile = document.querySelectorAll('.menu-font');

    fontMenuMobile.forEach((e) => {
        if (e.classList.contains('font-up')) {
            e.classList.remove('font-up')
        }
        awal.classList.add('font-up');
    });
}
/////////////////////////////////////////////
// klasa sticky dodawanie i odejmowanie
/////////////////////////////////////////////

const header = document.querySelector(".header");

function sticky() {
    if (window.scrollY > 30) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')

    }
}
window.addEventListener("scroll", sticky)
sticky()








/////////////////////////////////////////////
// dodawanie klasy is-active do hamburgera
/////////////////////////////////////////////

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".page-menu");
const menua = menu.querySelectorAll('a');


menua.forEach(function(e) {
    e.addEventListener('click', function() {
        menu.classList.remove('is-active')
    })
})




hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('is-active');
})



/////////////////////////////////////////////
//lata doswiadczenia
/////////////////////////////////////////////

const birthYear = 2005;
const currentYear = new Date().getFullYear();
const periods = document.querySelectorAll('.period b');

function odmiana(rok, lata, lat, value) {
    if (value === 1) {
        return rok;
    } else if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
        return lata;
    } else {
        return lat;
    }
}
const okres = currentYear - parseFloat(birthYear);
const odmianaLat = odmiana("rok", "lata", "lat", okres);


periods.forEach(function(b) {
    b.innerHTML = `${okres} ${odmianaLat}`

});

/////////////////////////////////////////////
//copyright rok
/////////////////////////////////////////////

document.querySelector('#currYear').innerHTML = currentYear;

/////////////////////////////////////////////
//lata doswiadczenia i copyright ENDDDDDD
/////////////////////////////////////////////




///PLIKI COOKIES KOMUNIKAT I JEGO OBSŁUGA ZA POMOCA LOCALSTORAGE

var body = document.querySelector('body');
var container = document.createElement('div'),
    link = document.createElement('a');


container.setAttribute('id', 'cookieinfo');
container.setAttribute('class', 'hidden');
container.innerHTML = '<h6>Ta strona wykorzystuje pliki cookie</h6><p>Używamy informacji zapisanych za pomocą plików cookies w celu zapewnienia maksymalnej wygody w korzystaniu z naszego serwisu. Mogą też korzystać z nich współpracujące z nami firmy badawcze oraz reklamowe. Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w cookies kliknij na &bdquo;x&rdquo; w prawym górnym rogu tej informacji. Jeśli nie wyrażasz zgody, ustawienia dotyczące plików cookies możesz zmienić w swojej przeglądarce.</p>';

link.setAttribute('href', '#');
link.classList.add("close");
link.setAttribute('title', 'Zamknij');
link.innerHTML = 'x';

body.appendChild(container);
container.appendChild(link);



document.addEventListener('DOMContentLoaded', () => {
    if (window.localStorage) {
        const cookieInfo = document.getElementById('cookieinfo');
        console.log(cookieInfo);

        if (!localStorage.getItem('cookieinfo')) {
            cookieInfo.classList.remove('hidden');
        }

        cookieInfo.addEventListener('click', (event) => {
            const target = event.target;


            if (target.tagName === 'A' && target.classList.contains('close')) {
                event.preventDefault();
                cookieInfo.classList.add('hidden');
                localStorage.setItem('cookieinfo', true);
            }
        }, false);
    }
});
// localStorage.clear();
//PLIKI COOKIES ENDDDD

//---------------------Animacja obrazkow----------------------------//

var controller = new ScrollMagic.Controller();

const fromLeftElements = document.querySelectorAll(".fromLeft");
for (let i = 0; i < fromLeftElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
            triggerElement: fromLeftElements[i], // y value not modified, so we can use element as trigger as well
            offset: 10, // start a little later
            duration: "100%",
            triggerHook: 0.65
        })
        .setClassToggle(fromLeftElements[i], "show") // add class toggle

    .addIndicators({
            name: "from-left--> " + (i + 1),
            colorStart: 'red', // custom color - colorEnd
            colorTrigger: 'orange',

        }) // add indicators (requires plugin)

    .addTo(controller);
}

const fromRightElements = document.querySelectorAll(".fromRight");
for (let i = 0; i < fromRightElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
            triggerElement: fromRightElements[i], // y value not modified, so we can use element as trigger as well
            offset: 50, // start a little later
            duration: "100%",
            triggerHook: 0.8
        })
        .setClassToggle(fromRightElements[i], "show") // add class toggle

    .addIndicators({
            name: "<--from-right " + (i + 1),
            colorStart: 'dodgeblue', // custom color - colorEnd
            colorTrigger: 'violet',

        }) // add indicators (requires plugin)

    .addTo(controller);
}




//---------------------Animacja obrazkow-END------------------------//
//plynne prewijanie do kotwicy
// in js
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', function(e) {
        let fromHash = item.getAttribute('href')
        let target = document.querySelector(fromHash)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, fromHash)
        e.preventDefault()
    })
}
//plynne prewijanie do kotwicy ENDDDD
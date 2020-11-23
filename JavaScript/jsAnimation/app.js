const intro = document.querySelector('.intro');
const text = intro.querySelector('h1');
const video = intro.querySelector('video');
//End section
const section = document.querySelector('section');
const end = section.querySelector('h1');

//Scroll Magic
const controller = new ScrollMagic.Controller();

//Scenes

let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin('.intro')
.addTo(controller);

//text animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller)

//Video Animation

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
    console.log(e);
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    // console.log(scrollpos, delay)

    video.currentTime = delay;
}, 33.3);
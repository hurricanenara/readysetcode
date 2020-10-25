// TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();

$(".section").each(function(i) {
  var target = $(this).find(".box");
  var tl = new TimelineMax();
  
  tl.from(target, 0.25, { opacity:0 });
  tl.to(target, 0.25, { opacity:0 }, 0.75);
  
  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.2,
    duration: '150%'
  })
    .setPin(this)
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
});

    values: [
        { x: 100, y: 0 },
        { x: 300, y: -10 },
        { x: 500, y: -15 },
        { x: 555, y: -20 },
        { x: 800, y: -30 },
        { x: 700, y: -300 },
        { x: 600, y: -350 },
        { x: 500, y: -380 },
        { x: 400, y: -410 },
        { x: 300, y: -460 },
        { x: 300, y: -460 },
        

        // { x: window.innerWidth, y: -290 },
    ]
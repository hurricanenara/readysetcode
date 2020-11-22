gsap.registerPlugin(ScrollTrigger);

// if there are objects that may get inline styles added (like via tweens) that should get reverted, use ScrollTrigger.saveStyles() initially so that the current inline styles are saved for later reversion. It's not always necessary, but it goes well with ScrollTrigger.matchMedia() so we figured it'd make sense to show it here (it's not needed in this demo)
ScrollTrigger.saveStyles(".mobile, .desktop");

/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
ScrollTrigger.matchMedia({
	
	// desktop
	"(min-width: 800px)": function() {
		// setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
		// ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    let test1 = gsap.timeline({
          scrollTrigger: {
          trigger: ".gray",
          scrub: 1,
          end: "200%",
          pin: true
        }
      });
    //   test1.to(".desktop", {opacity:0, duration:1, delay:0})
    test1.to(".desktop", {scale: 2, rotation: 360})
      .to(".desktop", {scale: 1});
  }, 
  
	// mobile
	"(max-width: 799px)": function() {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore. 
    let test1 = gsap.timeline({ 
        scrollTrigger:{
          trigger: ".gray",
          scrub: 1,
          end: "200%",
          pin: true
        }
      });
    test1.to(".mobile", {scale: 2, rotation: 360})
      .to(".mobile", {scale: 1});
  }, 
  
	// all 
	"all": function() {
		// ScrollTriggers created here aren't associated with a particular media query,
		// so they persist.
	}
  
});
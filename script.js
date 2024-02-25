gsap.from(".navbar", {
	y:-50,
	duration:0.4,
	opacity:0.2
});

gsap.from(".left", {
	scrollTrigger: ".left", 
	x:-50,
	delay:0.5,
	opacity:0
  });


gsap.from(".right", {
	scrollTrigger: ".right", 
	x:50,
	delay:0.5,
	opacity:0
  });


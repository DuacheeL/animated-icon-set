// ✅ gsap loaded? 
console.log( gsap );



gsap.to(".rightBracket", {
	delay: 1.1,
	x: 2.5,
	opacity: 1,
	duration: 0.5,
	repeat: -1,
	yoyo: true
  });
  
  gsap.to(".leftBracket", {
	delay: 1.1,
	opacity: 1,
	x: -2.5,
	duration: 0.5,
	repeat: -1,
	yoyo: true
  });
  
  gsap.fromTo(
	"#dataFolder",
	{
	  opacity: 0,
	  x: -800,
	},
	{
	  opacity: 1,
	  x: -5,
	  duration: 1,
	  onStart: () => {
		gsap.set("#contact", {
		  opacity: 0
		});
	  },
	  onComplete: () => {
	   
		gsap.to("#dataFolder", {
		  opacity: 0,
		  duration: 0.1,
		  repeat: 3,
		  yoyo: true,
		  ease: "none",
		});
  
		// Bounce effect for folder
		gsap.to("#dataFolder", {
		  x: 8,
		  duration: 0.5,
		  ease: "bounce.out",
		  onComplete: () => {
			gsap.to("#dataFolder", {
			  x: 0,
			  duration: 1
			});
  
			// Animation 4 (rotating folder)
			gsap.fromTo("#dataFolder", {
			  rotate: 15,
			},
					  {
						  delay: .04,
			  rotate: 0,
			  duration: 0.5,
			  repeat: -1,
			  yoyo: true,
			  ease: "elastic.out(4, 1)",
			});
		  }
		});
  
		// Making contact stay visible after animation
		gsap.to("#contact", {
		  delay: 0.3,
		  opacity: 1,
		  duration: 0.1,
		  ease: "none"
		});
	  }
	}
  );
  
  
  const headFlash = gsap.to(".head", {
	opacity: 0.5, 
	duration: 0.1,
	repeat: -1,
	yoyo: true, 
	ease: "power1.inOut",
	paused: true 
  });
  
  // Play the flashing animation immediately after page load
  headFlash.play();
  
  // Stop flashing when #contact is clicked
  document.getElementById("contact").addEventListener("click", function() {
	headFlash.pause(); // this pauses the flash animation
	gsap.to(".head", {
	  opacity: 1, 
	  duration: 0.2
	});
  
	gsap.fromTo(".head",
	  {
		x: 4,
		opacity: 1,
	  },
	  {
		delay: 0.47,
		x: -4,
		duration: 1,
		yoyo: true,
		repeat: -1,
	  }
	);
  
	// Animation 2
	gsap.fromTo(".head",
	  {
		y: 2,
	  },
	  {  
		y: -2,
		duration: 0.5,
		repeat: -1,
		yoyo: true,
	  });
  
	// Animation 3
	gsap.fromTo(".body",
	  {
		x: 2,
	  },
	  {
		x: -2,
		repeat: -1,
		yoyo: true,
		duration: 1,
	  });
	  
  });
  
  
  gsap.fromTo (".rightTick",
  {
	  y: 0,
  },
  {
	  y: -1,
	  duration: 1,
	  repeat: -1,
	  yoyo: true,
  });
  
  gsap.fromTo (".leftTick",
  {
	  y: 0,
  },
  {
	  delay: 1,
	  y: -1,
	  duration: 1,
	  repeat: -1,
	  yoyo: true,
  });
  
  
  gsap.fromTo(
	"#globe",
	{
	  y: -10,
	  opacity: 0,
	},
	{
	  delay: 1.5,     
	  y: 0,           
	  opacity: 1,
	  rotate: 360,
	  duration: 2,      
	  ease: "power3.out",
	}
  );
  
  gsap.set(".middleLine2", {
	y: 0,
  });
  
  
  gsap.set(".middleLine2", {
	opacity: 0, 
	y: 0
  });
  
  
  gsap.to("#globe", {
	y: 3,         
	duration: 0.5,
	ease: "bounce.out", 
	yoyo: true,        
	repeat: 1,
	onComplete: () => {
	 
	  gsap.fromTo(".middleLine2", {
		   opacity: 0,
		y: 11        
	  }, {
		opacity: 1,  
		y: -11,      
		delay: 2,    
		repeat: -1,
		yoyo: true,
		duration: 1,
		ease: "none",
	  });
	}
  });
  
  gsap.fromTo("#globe", {
	  y: 2,
  },
  {
	  y:-2,
	  repeat: -1,
	  yoyo: true,
	  ease: "none",
	  duration: 1,
  })
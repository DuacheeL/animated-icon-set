// ✅ gsap loaded? 
console.log( gsap );


// gsap.from("#dataFolder", {
// 	rotate: 15,
// 	duration: .5,
// 	repeat: -1,
// 	yoyo: true,
// 	ease: "elastic.out(2, 1)"
// });

gsap.from("#dataFolder", {
	x: -180,
	duration: 1,
});

// console.log("hello");

gsap.from("#rightBracket",
	{
		x: 2.5,
		duration: .5,
		repeat: -1,
		yoyo: true
	});


gsap.from("#leftBracket",
	{
		x: -2.5,
		duration: .5,
		repeat: -1,
		yoyo: true
	});
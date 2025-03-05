gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline();

// tlLoader
// 	.set('.loader__item', {yPercent: -100})
// 	.set('.loader__logo', {opacity: 0})
// 	.to('.loader__item', {
// 		yPercent: 0,
// 		duration: 0.5,
// 		stagger: 0.25
// 	})
// 	.to('.loader__item', {
// 		yPercent: 100,
// 		duration: 0.5,
// 		stagger: 0.25
// 	})
// 	.to('.loader__logo', {
// 		opacity: 1,
// 		duration: 1,
// 		scale: 1.2
// 	})
// 	.set('.loader__item', {
// 		yPercent: -100
// 	})
// 	.to('.loader__logo', {
// 		opacity: 0,
// 		duration: 1,
// 		scale: 0.8
// 	})
// 	.to('.loader', {
// 		yPercent: -100,
// 		duration: 1
// 	}, '-=0.2')

gsap.to('.hero__title', {
	scrollTrigger: {
		trigger: '#AboutIntro',
		start: 'start top',
		scrub: true,
	},
	scale: 0.1,
})

gsap.to('.hero__sub__title', {
	scrollTrigger: {
		trigger: '#AboutIntro',
		start: 'start top',
		scrub: true,
	},
	scale: 0.4
})

gsap.to('#scrollButtonOfferSection', {
	scrollTrigger: {
		trigger: '#AboutIntro',
		start: 'start top',
		scrub: true,
	},
	scale: 0.7
})

gsap.to('.hero__icon__left', {
	scrollTrigger: {
		trigger: '#AboutIntro',
		start: 'start top',
		scrub: true,
	},
	xPercent: -300
})

gsap.to('.hero__icon__right', {
	scrollTrigger: {
		trigger: '#AboutIntro',
		start: 'start top',
		scrub: true,
	},
	xPercent: 300
})

const leftItems = gsap.utils.toArray('.what_i_offer__item__left');
const rightItems = gsap.utils.toArray('.what_i_offer__item:not(.what_i_offer__item__left)');

function animateItemsWhatIOffer() {
	gsap.set(leftItems, { xPercent: -100, opacity: 0 });
	gsap.set(rightItems, { xPercent: 100, opacity: 0 });

	gsap.to(leftItems, {
		xPercent: 0,
		opacity: 1,
		duration: 1.2,
		ease: 'power3.out',
		stagger: 0.3
	});

	gsap.to(rightItems, {
		xPercent: 0,
		opacity: 1,
		duration: 1.2,
		ease: 'power3.out',
		stagger: 0.3
	});
}

ScrollTrigger.create({
	trigger: '#WhatIOffer',
	start: 'top center',
	end: 'bottom center',
	onEnter: animateItemsWhatIOffer,
	onEnterBack: animateItemsWhatIOffer
});

function animateAboutMe() {
	gsap.set('.about_me__video__container', { yPercent: -100, opacity: 0 });
	gsap.set('.about_me__img__box', {yPercent: 100, opacity: 0})
	gsap.set('.about_me__content__text', {yPercent: 100, opacity: 0})
	gsap.to('.about_me__video__container', {
		yPercent: 0,
		opacity: 1,
		duration: 1.2
	})
	gsap.to('.about_me__img__box', {
		yPercent: 0,
		opacity: 1,
		duration: 1.3
	})
	gsap.to('.about_me__content__text', {
		yPercent: 0,
		opacity: 1,
		duration: 1.7
	})
	gsap.from('.about_me__name__box', {
		scale: 0.2,
		duration: 2
	})
	gsap.from('.social-links__list', {
		scale: 0.2,
		duration: 2.2
	})
}

ScrollTrigger.create({
	trigger: '#AboutMe',
	start: 'top center',
	end: 'bottom center',
	onEnter: animateAboutMe,
	onEnterBack: animateAboutMe
})

const card1 = gsap.utils.toArray('.card img');
function animationGallery () {
	gsap.set(card1, {opacity: 0})

	gsap.to(card1, {
		opacity: 1,
		duration: 0.3,
		stagger: 0.1
	})
}

ScrollTrigger.create({
	trigger: '#Gallery',
	start: 'top center',
	end: 'bottom center',
	onEnter: animationGallery,
	onEnterBack: animationGallery
})
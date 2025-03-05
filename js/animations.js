gsap.registerPlugin(ScrollTrigger);

const tlLoader = gsap.timeline();

tlLoader
	.set('.loader__item', {yPercent: -100})
	.set('.loader__logo', {opacity: 0})
	.to('.loader__item', {
		yPercent: 0,
		duration: 0.5,
		stagger: 0.25
	})
	.to('.loader__item', {
		yPercent: 100,
		duration: 0.5,
		stagger: 0.25
	})
	.to('.loader__logo', {
		opacity: 1,
		duration: 1,
		scale: 1.2
	})
	.set('.loader__item', {
		yPercent: -100
	})
	.to('.loader__logo', {
		opacity: 0,
		duration: 1,
		scale: 0.8
	})
	.to('.loader', {
		yPercent: -100,
		duration: 1
	}, '-=0.2')
	.fromTo('.navbar__logo', {
		scale: 0
	}, {
		scale: 1,
		duration: 1
	})
	.fromTo('.hero__title', {
		yPercent: 100,
		opacity: 0,
	}, {
		yPercent: 0,
		opacity: 1,
		ease: "power2.out",
		duration: 1
	})
	.fromTo('.hero__sub__title', {
		yPercent: 100,
		opacity: 0,
	}, {
		yPercent: 0,
		opacity: 1,
		ease: "power2.out",
		duration: 1
	})
	.fromTo('#scrollButtonOfferSection', {
		yPercent: 100,
		opacity: 0,
	}, {
		yPercent: 0,
		opacity: 1,
		ease: "power2.out",
		duration: 1
	})
	.fromTo('.hero__icon', {
		yPercent: 100,
		opacity: 0,
	}, {
		yPercent: 0,
		opacity: 1,
		ease: "power2.out",
		duration: 1
	})
	.fromTo('.header li', {
		yPercent: -50,
		opacity: 0,
	}, {
		yPercent: 0,
		opacity: 1,
		ease: "power2.out",
		duration: 1,
		stagger: 0.15
	})
	.fromTo('.hero__hashtag__container', {
		yPercent: -50,
		opacity: 0,
	}, {
		yPercent: 0,
		opacity: 1,
		ease: "power2.out",
		duration: 1,
	})

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

const card1 = gsap.utils.toArray('.card1 img');
const card2 = gsap.utils.toArray('.card2 img');
const card3 = gsap.utils.toArray('.card3 img');
const card4 = gsap.utils.toArray('.card4 img');
const card5 = gsap.utils.toArray('.card5 img');
const card6 = gsap.utils.toArray('.card6 img');
const card7 = gsap.utils.toArray('.card7 img');
const card8 = gsap.utils.toArray('.card8 img');
const card9 = gsap.utils.toArray('.card9 img');
const card10 = gsap.utils.toArray('.card10 img');
const card11 = gsap.utils.toArray('.card11 img');
const card12 = gsap.utils.toArray('.card12 img');
function animationGallery () {
	gsap.set(card1, {opacity: 0})
	gsap.set(card2, {opacity: 0})
	gsap.set(card3, {opacity: 0})
	gsap.set(card4, {opacity: 0})
	gsap.set(card5, {opacity: 0})
	gsap.set(card6, {opacity: 0})
	gsap.set(card7, {opacity: 0})
	gsap.set(card8, {opacity: 0})
	gsap.set(card9, {opacity: 0})
	gsap.set(card10, {opacity: 0})
	gsap.set(card11, {opacity: 0})
	gsap.set(card12, {opacity: 0})

	gsap.to(card1, {
		opacity: 1,
		duration: 0.7,
		stagger: 0.4
	})
	gsap.to(card2, {
		opacity: 1,
		duration: 1,
		stagger: 0.7
	})
	gsap.to(card3, {
		opacity: 1,
		duration: 0.9,
		stagger: 0.7
	})
	gsap.to(card4, {
		opacity: 1,
		duration: 0.7,
		stagger: 0.8
	})
	gsap.to(card5, {
		opacity: 1,
		duration: 0.3,
		stagger: 1
	})
	gsap.to(card6, {
		opacity: 1,
		duration: 0.2,
		stagger: 0.6
	})
	gsap.to(card7, {
		opacity: 1,
		duration: 0.7,
		stagger: 0.8
	})
	gsap.to(card8, {
		opacity: 1,
		duration: 0.7,
		stagger: 0.9
	})
	gsap.to(card9, {
		opacity: 1,
		duration: 0.7,
		stagger: 0.4
	})
	gsap.to(card10, {
		opacity: 1,
		duration: 0.7,
		stagger: 0.4
	})
	gsap.to(card11, {
		opacity: 1,
		duration: 0.7,
		stagger: 0.4
	})
	gsap.to(card12, {
		opacity: 1,
		duration: 0.7,
		stagger: 0.4
	})
}

ScrollTrigger.create({
	trigger: '#Gallery',
	start: 'top center',
	end: 'bottom center',
	onEnter: animationGallery,
	onEnterBack: animationGallery
})

const input = gsap.utils.toArray('#orderForm input');
function animationOrderProcess() {
	// gsap.timeline();
	gsap.set('.order_process__title', {opacity: 0})
	gsap.set('.order_process__title__second', {opacity: 0})
	gsap.set(input, {opacity: 0, yPercent: 300})
	gsap.set('#orderForm select', {opacity: 0, yPercent: 300})
	gsap.set('#orderForm textarea', {opacity: 0, yPercent: 300})
	gsap.set('#orderForm button', {yPercent: 300, opacity: 0})

	gsap.to(input, {
		yPercent: 0,
		opacity: 1,
		duration: 1,
		stagger: 0.25
	})
	gsap.to('#orderForm select', {
		yPercent: 0,
		opacity: 1,
		duration: 1,
	})
	gsap.to('#orderForm textarea', {
		yPercent: 0,
		opacity: 1,
		duration: 1.2,
	})
	gsap.to('.order_process__title', {
		opacity: 1,
	}, '-=0.2')
	gsap.to('.order_process__title__second', {
		opacity: 1,
	}, '-=0.3')
	gsap.to('#orderForm button', {
		yPercent: 0,
		opacity: 1,
	}, '-=0.1')
}

ScrollTrigger.create({
	trigger: '#OrderProcess',
	start: 'top center',
	end: 'bottom center',
	onEnter: animationOrderProcess,
	onEnterBack: animationOrderProcess
})
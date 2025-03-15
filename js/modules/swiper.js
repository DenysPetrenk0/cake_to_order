export function initSwiper() {
	new Swiper('.swiper', {
		effect: 'coverflow',
		slidesPerView: 3,
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
			}
		},
		centeredSlides: true,
		coverflowEffect: {
			rotate: 50,
			stretch: 100,
			depth: 100,
			modifier: 1,
			slideShadows: true
		},
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}
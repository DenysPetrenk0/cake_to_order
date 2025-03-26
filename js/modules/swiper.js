export function initTestimonialsSwiper() {
	new Swiper('.testimonials__swiper', {
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

export function initCutsSwiper() {
	new Swiper('.cuts__swiper', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: -40,
			stretch: -100,
			modifier: 1,
			slideShadows: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
				coverflowEffect: {
					depth: 300,
				},
			},
			768: {
				slidesPerView: 2,
				coverflowEffect: {
					depth: 600,
				},
			},
			0: {
				slidesPerView: 1,
				coverflowEffect: {
					depth: 300,
				},
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
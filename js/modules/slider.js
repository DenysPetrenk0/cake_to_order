const slideContainer = document.querySelector(".testimonials__container");
const slide = document.querySelector(".testimonials__list");
const prevBtn = document.querySelector(".testimonials__button__prev");
const nextBtn = document.querySelector(".testimonials__button__next");

const interval = 4000;
const transition = `transform 2s ease-in-out`;

let slides = document.querySelectorAll(".testimonials__item");
let index = 1;
let slideId;

const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);

firstSlide.setAttribute("id", "first-slide");
lastSlide.setAttribute("id", "last-slide");

slide.append(firstSlide);
slide.prepend(lastSlide);

const slideWidth = slides[index].clientWidth + 20;

const slideTransform = () => `translateX(${-slideWidth * index}px)`;
const getSlide = () => document.querySelectorAll(".testimonials__item");

slide.style.transform = slideTransform();

export const startSlide = () => {
	slideId = setInterval(() => {
		moveNextSlide();
	}, interval);
};

export const stopSlide = () => clearInterval(slideId);

slide.addEventListener("transitionend", () => {
	slides = getSlide();

	if (slides[index].id === firstSlide.id) {
		slide.style.transition = "none";
		index = 1;
		slide.style.transform = slideTransform();
	}

	if (slides[index].id === lastSlide.id) {
		slide.style.transition = "none";
		index = slides.length - 2;
		slide.style.transform = slideTransform();
	}
});

const moveNextSlide = (event) => {
	if (event) event.preventDefault();
	slides = getSlide();

	if (index >= slides.length - 1) return;
	index++;
	slide.style.transform = slideTransform();
	slide.style.transition = transition;
};

const movePrevSlide = (event) => {
	event.preventDefault();
	slides = getSlide();

	if (index <= 0) return;
	index--;
	slide.style.transform = slideTransform();
	slide.style.transition = transition;
};

slideContainer.addEventListener("mouseenter", () => {
	clearInterval(slideId);
});

slideContainer.addEventListener("mouseleave", startSlide);

prevBtn.addEventListener("click", movePrevSlide);
nextBtn.addEventListener("click", moveNextSlide);

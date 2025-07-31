import {initSmoothScroll} from "./modules/scrolling.js";
import {initModalGallery} from "./modules/modalGallery.js";
import {initModalWhatIOffer} from "./modules/modalWhatIOffer.js";
import {initModalHeaderMenu} from "./modules/modalHeaderMenu.js";
import {products} from "../data/products.js";
import {setOrder, setupContactPlaceholder} from "./modules/form.js";
import {startBackgroundChange} from "./modules/heroBackground.js"
import {initSlider} from "./modules/slider.js"

document.addEventListener("DOMContentLoaded", () => {
	initSmoothScroll();
	setupContactPlaceholder();
	setOrder();
	initSlider('cuts__');
	initSlider('testimonials__');

	const openModal = initModalGallery();
	const basePath = "./assets/img/gallery/";

	document.querySelectorAll(".card").forEach((card) => {
		card.addEventListener("click", () => {
			let images = JSON.parse(card.getAttribute("data-images") || "[]");
			images = images.map(img => basePath + img);
			if (images.length > 0) {
				openModal(images, 0);
			}
		});
	});

	document.querySelectorAll(".what_i_offer__link").forEach((link) => {
		link.addEventListener("click", (event) => {
			event.preventDefault();
			const productKey = link.getAttribute("data-product");
			const product = products[productKey];
			initModalWhatIOffer(product);
		});
	});

	document.querySelector("#menuBtn").addEventListener("click", () => {
		initModalHeaderMenu();
	})
});

document.querySelector("#scrollButtonOfferSection").addEventListener("click", () => {
	document.querySelector("#OrderProcess").scrollIntoView({behavior: "smooth"});
});

window.addEventListener("load", startBackgroundChange);
window.addEventListener("resize", startBackgroundChange);
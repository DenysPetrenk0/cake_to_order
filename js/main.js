import {initSmoothScroll} from "./modules/scrolling.js";
import {initModalGallery} from "./modules/modalGallery.js";
import {initModalWhatIOffer} from "./modules/modalWhatIOffer.js";
import {products} from "../data/products.js";

document.addEventListener("DOMContentLoaded", () => {
	initSmoothScroll()

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
});
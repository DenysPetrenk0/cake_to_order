import {initSmoothScroll} from "./modules/scrolling.js";
import {initModal} from "./modules/modal_gallery.js";

document.addEventListener("DOMContentLoaded", () => {
	initSmoothScroll()

	const openModal = initModal();
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
});
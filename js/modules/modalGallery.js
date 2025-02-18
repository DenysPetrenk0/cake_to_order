export const initModalGallery = () => {
	const backDrop = document.querySelector(".backdrop");

	let images = [];
	let currentIndex = 0;

	function openModal(imgArray, index) {
		images = imgArray;
		currentIndex = index;

		backDrop.innerHTML = `
			<button class="modal__close">&times;</button>
			<div class="modal">
				<img class="modal__image" src="${images[currentIndex]}" alt="Gallery Image">
			</div>
			<button class="modal__prev">←</button>
			<button class="modal__next">→</button>
		`;

		backDrop.classList.remove("is-hidden");

		// Отримуємо нові елементи
		const modalImage = backDrop.querySelector(".modal__image");
		const closeButton = backDrop.querySelector(".modal__close");
		const prevButton = backDrop.querySelector(".modal__prev");
		const nextButton = backDrop.querySelector(".modal__next");

		function closeModal() {
			backDrop.classList.add("is-hidden");
			backDrop.innerHTML = "";
		}

		function showNextImage() {
			currentIndex = (currentIndex + 1) % images.length;
			modalImage.src = images[currentIndex];
		}

		function showPrevImage() {
			currentIndex = (currentIndex - 1 + images.length) % images.length;
			modalImage.src = images[currentIndex];
		}

		closeButton.addEventListener("click", closeModal);
		prevButton.addEventListener("click", showPrevImage);
		nextButton.addEventListener("click", showNextImage);
		modalImage.addEventListener("click", showNextImage);

		backDrop.addEventListener("click", (e) => {
			if (e.target === backDrop) {
				closeModal();
			}
		});
	}

	return openModal;
}
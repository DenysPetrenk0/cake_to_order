export const initModalGallery = () => {
	const backDrop = document.querySelector(".backdrop");

	let images = [];
	let currentIndex = 0;

	function openModal(imgArray, index) {
		images = imgArray;
		currentIndex = index;

		backDrop.innerHTML = `
			<a href="#" class="modal__close">
				<svg class="modal__icon">
					<use href="./assets/icon/cross.svg#cross"></use>
				</svg>
			</a>
			<div class="modal">
				<img class="modal__image gallery__img" src="${images[currentIndex]}" alt="Gallery Image">
				<a href="#" class="modal__prev">
					<svg class="modal__icon">
						<use href="./assets/icon/modalArrow.svg#modal-arrow"></use>
					</svg>
				</a>
				<a href="#" class="modal__next">
					<svg class="modal__icon">
						<use href="./assets/icon/modalArrow.svg#modal-arrow"></use>
					</svg>
				</a>
			</div>
		`;

		backDrop.classList.remove("is-hidden");

		// Отримуємо нові елементи
		const modalImage = backDrop.querySelector(".modal__image");
		const closeButton = backDrop.querySelector(".modal__close");
		const prevButton = backDrop.querySelector(".modal__prev");
		const nextButton = backDrop.querySelector(".modal__next");

		function closeModal(event) {
			event.preventDefault();
			backDrop.classList.add("is-hidden");
			backDrop.innerHTML = "";
		}

		function showNextImage(event) {
			event.preventDefault();
			currentIndex = (currentIndex + 1) % images.length;
			modalImage.src = images[currentIndex];
		}

		function showPrevImage(event) {
			event.preventDefault();
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